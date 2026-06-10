import { useState, useEffect, useCallback, useMemo, useRef } from "react";

// ============================================================
//  CANES LIVE — private family board for route /canes
//
//  Drop this file into your React/Vite app and add the route:
//     <Route path="/canes" element={<CanesLive />} />
// ============================================================

const WORKER_URL = "https://dry-forest-d634.greg-ff0.workers.dev";
const CANES_ABBREV = "CAR";
const NHL_SEASON = "20252026";
const NHL_SCHEDULE_URL = `https://api-web.nhle.com/v1/club-schedule-season/${CANES_ABBREV}/${NHL_SEASON}`;

function teamAbbrev(team) {
  return team?.abbrev || team?.triCode || team?.teamAbbrev?.default || team?.placeName?.default || "";
}

function isFinalState(state) {
  return state === "OFF" || state === "FINAL";
}

function isPlayoffGame(game) {
  return Number(game?.gameType) === 3;
}

function scoreNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function getCanesAndOpponent(game) {
  const homeAbbrev = teamAbbrev(game?.homeTeam);
  const awayAbbrev = teamAbbrev(game?.awayTeam);

  if (homeAbbrev === CANES_ABBREV) {
    return {
      canes: game.homeTeam,
      opp: game.awayTeam,
      oppAbbrev: awayAbbrev,
      canesHome: true,
    };
  }

  if (awayAbbrev === CANES_ABBREV) {
    return {
      canes: game.awayTeam,
      opp: game.homeTeam,
      oppAbbrev: homeAbbrev,
      canesHome: false,
    };
  }

  return null;
}

function computeBestOfSevenSeries(scheduleData, currentGame) {
  const games = Array.isArray(scheduleData?.games) ? scheduleData.games : [];
  const currentOpp = currentGame?.opp?.abbrev || "";

  const canesPlayoffGames = games
    .filter(isPlayoffGame)
    .map((g) => ({ raw: g, matchup: getCanesAndOpponent(g) }))
    .filter((item) => item.matchup);

  const opponentFromSchedule =
    currentOpp ||
    [...canesPlayoffGames].reverse().find((item) => item.matchup.oppAbbrev)?.matchup.oppAbbrev ||
    currentGame?.opp?.name ||
    "OPP";

  const seriesGames = canesPlayoffGames
    .filter((item) => item.matchup.oppAbbrev === opponentFromSchedule)
    .sort((a, b) => {
      const aDate = new Date(a.raw.gameDate || a.raw.startTimeUTC || 0).getTime();
      const bDate = new Date(b.raw.gameDate || b.raw.startTimeUTC || 0).getTime();
      return aDate - bDate;
    });

  let canesWins = 0;
  let oppWins = 0;

  for (const item of seriesGames) {
    if (!isFinalState(item.raw.gameState)) continue;

    const canesScore = scoreNumber(item.matchup.canes?.score);
    const oppScore = scoreNumber(item.matchup.opp?.score);

    if (canesScore === null || oppScore === null || canesScore === oppScore) continue;

    if (canesScore > oppScore) canesWins += 1;
    else oppWins += 1;

    if (canesWins >= 4 || oppWins >= 4) break;
  }

  // Fallback: if the schedule has not updated yet but the live feed says the
  // current game is final, count that one game so the card does not stay blank.
  if (canesWins === 0 && oppWins === 0 && isFinalState(currentGame?.state)) {
    const canesScore = scoreNumber(currentGame?.canes?.score);
    const oppScore = scoreNumber(currentGame?.opp?.score);

    if (canesScore !== null && oppScore !== null && canesScore !== oppScore) {
      if (canesScore > oppScore) canesWins = 1;
      else oppWins = 1;
    }
  }

  return {
    canes: canesWins,
    opp: oppWins,
    oppName: opponentFromSchedule,
    neededToWin: 4,
    foundGames: seriesGames.length,
  };
}

function getSeriesScore(scheduleData, currentGame) {
  if (SERIES_OVERRIDE.enabled) {
    let canesWins = SERIES_OVERRIDE.canes;
    let oppWins = SERIES_OVERRIDE.opp;
    let autoApplied = false;

    const canesScore = scoreNumber(currentGame?.canes?.score);
    const oppScore = scoreNumber(currentGame?.opp?.score);
    const currentGameTime = new Date(
      currentGame?.startTimeUTC || currentGame?.gameDate || currentGame?.iso || 0
    ).getTime();
    const nextGameTime = new Date(SERIES_OVERRIDE.nextGameIso || NEXT_GAME.iso).getTime();

    // Only count the next game after the 2-2 baseline.
    // This prevents an older final score from being counted again.
    const isNextGameOrLater =
      Number.isFinite(currentGameTime) &&
      Number.isFinite(nextGameTime) &&
      currentGameTime >= nextGameTime - 6 * 60 * 60 * 1000;

    if (
      SERIES_OVERRIDE.autoAddNextFinal &&
      isNextGameOrLater &&
      isFinalState(currentGame?.state) &&
      canesScore !== null &&
      oppScore !== null &&
      canesScore !== oppScore
    ) {
      if (canesScore > oppScore) canesWins += 1;
      else oppWins += 1;
      autoApplied = true;
    }

    return {
      canes: Math.min(canesWins, SERIES_OVERRIDE.neededToWin || 4),
      opp: Math.min(oppWins, SERIES_OVERRIDE.neededToWin || 4),
      oppName: currentGame?.opp?.abbrev || SERIES_OVERRIDE.oppName || "OPP",
      neededToWin: SERIES_OVERRIDE.neededToWin || 4,
      foundGames: 0,
      manual: true,
      autoApplied,
    };
  }

  return computeBestOfSevenSeries(scheduleData, currentGame);
}


const RED = "#CC0000";
const DEEP_RED = "#7A0000";
const BLACK = "#050505";
const SILVER = "#A2AAAD";
const BONE = "#F4F4F4";
const MUTED = "#74797C";

const NEXT_GAME = {
  iso: "2026-06-11T20:00:00-04:00",
  label: "Game 5 · vs Vegas · Raleigh",
};

// Current best-of-7 series score after the last completed game.
// The page starts at 2-2, then automatically gives the next completed game's
// winner one additional series win.
const SERIES_OVERRIDE = {
  enabled: true,
  canes: 2,
  opp: 2,
  oppName: "MTL",
  neededToWin: 4,
  autoAddNextFinal: true,
  nextGameIso: NEXT_GAME.iso,
};

const MANUAL_DEFAULT = {
  found: true,
  state: "LIVE",
  period: 3,
  periodType: "REG",
  clock: "16:31",
  inIntermission: false,
  canesAreHome: false,
  canes: { name: "Hurricanes", abbrev: "CAR", score: 4, sog: 0 },
  opp: { name: "Golden Knights", abbrev: "VGK", score: 3, sog: 0 },
  venue: "T-Mobile Arena",
};

function getCountdown(iso) {
  const diff = new Date(iso).getTime() - Date.now();
  if (diff <= 0) return { live: true, d: 0, h: 0, m: 0, s: 0 };

  return {
    live: false,
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
}


export default function CanesLive() {
  const [game, setGame] = useState(MANUAL_DEFAULT);
  const [liveFeed, setLiveFeed] = useState(Boolean(WORKER_URL));
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [countdown, setCountdown] = useState(getCountdown(NEXT_GAME.iso));
  const [seriesFeed, setSeriesFeed] = useState(null);
  const [seriesErr, setSeriesErr] = useState(null);
  const [hornReady, setHornReady] = useState(false);
  const [hornPlaying, setHornPlaying] = useState(false);
  const hornAudioRef = useRef(null);
  const hornTimerRef = useRef(null);
  const hornReadyRef = useRef(false);
  const previousCanesScoreRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setCountdown(getCountdown(NEXT_GAME.iso)), 1000);
    return () => clearInterval(id);
  }, []);


  useEffect(() => {
    hornAudioRef.current = new Audio("/canes-horn.mp3");
    hornAudioRef.current.loop = false;
    hornAudioRef.current.preload = "auto";

    return () => {
      if (hornTimerRef.current) {
        window.clearTimeout(hornTimerRef.current);
      }
      if (hornAudioRef.current) {
        hornAudioRef.current.pause();
        hornAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  const stopHorn = useCallback(() => {
    if (hornTimerRef.current) {
      window.clearTimeout(hornTimerRef.current);
      hornTimerRef.current = null;
    }

    const horn = hornAudioRef.current;
    if (horn) {
      horn.pause();
      horn.currentTime = 0;
    }

    setHornPlaying(false);
  }, []);

  const enableHorn = useCallback(async () => {
    const horn = hornAudioRef.current;
    if (!horn) {
      setErr("Goal horn file was not loaded. Make sure /public/canes-horn.mp3 exists.");
      return;
    }

    try {
      horn.volume = 1;
      horn.currentTime = 0;
      await horn.play();
      horn.pause();
      horn.currentTime = 0;
      hornReadyRef.current = true;
      setHornReady(true);
      setErr(null);
    } catch {
      setErr("Your browser blocked the horn. Tap Enable goal horn again, then leave this page open during the game.");
    }
  }, []);

  const playHorn = useCallback(async () => {
    const horn = hornAudioRef.current;
    if (!horn) return;

    stopHorn();

    try {
      horn.volume = 1;
      horn.loop = false;
      horn.currentTime = 0;
      await horn.play();
      hornReadyRef.current = true;
      setHornReady(true);
      setHornPlaying(true);
    } catch {
      setHornPlaying(false);
      setErr("The horn could not play. Tap Enable goal horn once, and confirm /public/canes-horn.mp3 exists.");
    }
  }, [stopHorn]);

  useEffect(() => {
    const horn = hornAudioRef.current;
    if (!horn) return;

    const handleEnded = () => {
      setHornPlaying(false);
    };

    horn.addEventListener("ended", handleEnded);
    return () => horn.removeEventListener("ended", handleEnded);
  }, []);

  const fetchSeries = useCallback(async () => {
    try {
      const res = await fetch(NHL_SCHEDULE_URL, { cache: "no-store" });
      if (!res.ok) throw new Error(`Schedule feed returned ${res.status}`);

      const scheduleData = await res.json();
      const computedSeries = getSeriesScore(scheduleData, game);

      setSeriesFeed(computedSeries);
      setSeriesErr(null);
    } catch {
      const fallbackSeries = getSeriesScore(null, game);
      setSeriesFeed(fallbackSeries);
      setSeriesErr("Couldn't reach the NHL schedule feed, so this is using the current final game as a fallback.");
    }
  }, [game]);

  useEffect(() => {
    fetchSeries();
    const id = setInterval(fetchSeries, 5 * 60 * 1000);
    return () => clearInterval(id);
  }, [fetchSeries]);

  const fetchLive = useCallback(async () => {
    if (!WORKER_URL) return;

    setLoading(true);
    setErr(null);

    try {
      const res = await fetch(WORKER_URL, { cache: "no-store" });
      if (!res.ok) throw new Error(`Feed returned ${res.status}`);

      const data = await res.json();
      if (data?.found) {
        setGame((previousGame) => {
          const previousScore = previousCanesScoreRef.current;
          const nextScore = Number(data?.canes?.score ?? previousGame.canes.score);

          if (previousScore !== null && nextScore > previousScore && hornReadyRef.current) {
            playHorn();
          }

          previousCanesScoreRef.current = nextScore;
          return data;
        });
        setLastUpdated(new Date());
      } else if (data?.found === false) {
        setErr("No Canes game found in the feed right now.");
      } else {
        setErr("Feed hiccup — try again in a sec.");
      }
    } catch {
      setErr("Couldn't reach the live feed. Try Refresh now again in a bit.");
    } finally {
      setLoading(false);
    }
  }, [playHorn]);

  useEffect(() => {
    if (!liveFeed) return;
    fetchLive();
    const id = setInterval(fetchLive, 15000);
    return () => clearInterval(id);
  }, [liveFeed, fetchLive]);

  const status = useMemo(() => {
    const isFinal = game.state === "FINAL" || game.state === "OFF";
    const isLiveGame = game.state === "LIVE" || game.state === "CRIT";
    const canesWinning = game.canes.score > game.opp.score;
    const canesLost = isFinal && game.canes.score < game.opp.score;
    const tied = game.canes.score === game.opp.score;

    return { isFinal, isLiveGame, canesWinning, canesLost, tied };
  }, [game]);

  const periodLabel = () => {
    if (game.inIntermission) return "INTERMISSION";
    if (status.isFinal) return "FINAL";
    if (game.state === "FUT" || game.state === "PRE") return "PREGAME";
    if (game.periodType === "OT") return "OT";
    if (game.periodType === "SO") return "SHOOTOUT";

    const p = game.period;
    if (!p) return "GAME STATUS";
    return p === 1 ? "1ST" : p === 2 ? "2ND" : p === 3 ? "3RD" : `${p}TH`;
  };

  const gameMood = () => {
    if (status.isFinal && status.canesWinning) return "Storm surge complete.";
    if (status.isLiveGame && status.canesWinning) return "Hold the line. Finish strong.";
    if (status.isLiveGame && status.tied) return "Next goal wakes the house.";
    if (status.canesLost) return "Tough one. Reset and take warning.";
    return "Family board is armed and ready.";
  };


  return (
    <div style={styles.page}>
      <style>{keyframes}</style>
      <div style={styles.flagBar} aria-hidden="true" />
      <div style={styles.rinkGlow} aria-hidden="true" />

      <header style={styles.header}>
        <StormFlag />
        <div style={styles.eyebrow}>PRIVATE FAMILY BOARD · TAKE WARNING</div>
        <h1 style={styles.wordmark}>
          <span style={{ color: RED }}>CAROLINA</span>{" "}
          <span style={{ color: BONE }}>HURRICANES</span>
        </h1>
        <img src="/Carolina_Hurricanes_flag.gif" alt="Carolina Hurricanes flag" style={styles.logo} />
        <div style={styles.tagline}>{gameMood()}</div>
      </header>

      <main style={styles.shell}>
        <section style={styles.board} aria-label="Current score">
          <div style={styles.statusStrip}>
            <span style={status.isLiveGame ? styles.livePill : styles.idlePill}>
              {status.isLiveGame ? "LIVE" : periodLabel()}
            </span>
            <span style={styles.statusText}>{game.venue || "Canes country"}</span>
          </div>

          <div style={styles.scoreRow}>
            <TeamScore
              hero
              label="CANES"
              score={game.canes.score}
              sog={game.canes.sog}
              live={status.isLiveGame}
              accent={RED}
              winning={status.canesWinning}
            />

            <div style={styles.center}>
              <div
                style={{
                  ...styles.period,
                  color: status.isLiveGame ? RED : SILVER,
                  animation: status.isLiveGame && !game.inIntermission ? "pulse 2s infinite" : "none",
                }}
              >
                {periodLabel()}
              </div>

              {status.isLiveGame && !game.inIntermission && <div style={styles.clock}>{game.clock}</div>}

              {(game.state === "FUT" || game.state === "PRE") && game.startTimeUTC && (
                <div style={styles.clock}>
                  {new Date(game.startTimeUTC).toLocaleTimeString([], {
                    hour: "numeric",
                    minute: "2-digit",
                  })}
                </div>
              )}

              <div style={styles.vs}>VS</div>
            </div>

            <TeamScore
              label={game.opp.abbrev}
              score={game.opp.score}
              sog={game.opp.sog}
              live={status.isLiveGame}
              accent={SILVER}
            />
          </div>

          {status.isFinal && status.canesWinning && <div style={styles.winBanner}>CANES WIN 🚨</div>}
          {status.isLiveGame && status.canesWinning && <div style={styles.leadBanner}>CANES LEAD</div>}
          {status.canesLost && <div style={styles.lossBanner}>On to the next one.</div>}
        </section>

        <section style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.cardTitle}>
              "SERIES · BEST OF 7"
            </div>
            {seriesFeed ? (
              <>
                <div style={styles.seriesRow}>
                  <SeriesTeam label="CANES" wins={seriesFeed.canes} accent={RED} neededToWin={seriesFeed.neededToWin} />
                  <div style={styles.seriesDash}>—</div>
                  <SeriesTeam label={seriesFeed.oppName} wins={seriesFeed.opp} accent={SILVER} neededToWin={seriesFeed.neededToWin} />
                </div>
                </>
            ) : (
              <div style={styles.seriesNote}>{seriesErr || "Loading NHL series feed..."}</div>
            )}
          </div>

          <div style={styles.card}>
            {countdown.live ? (
              <div style={styles.cdLive}>🚨 GAME TIME 🚨</div>
            ) : (
              <>
                <div style={styles.cardTitle}>NEXT PUCK DROP</div>
                <div style={styles.cdClock}>
                  <CdUnit n={countdown.d} label="DAYS" />
                  <CdUnit n={countdown.h} label="HRS" />
                  <CdUnit n={countdown.m} label="MIN" />
                  <CdUnit n={countdown.s} label="SEC" />
                </div>
                <div style={styles.cdGame}>{NEXT_GAME.label}</div>
              </>
            )}
          </div>
        </section>

        <section style={styles.controls}>
          <button style={styles.primaryBtn} onClick={fetchLive} disabled={loading || !WORKER_URL}>
            {loading ? "Updating..." : "Refresh now"}
          </button>

          <button
            style={liveFeed ? styles.secondaryBtn : styles.primaryBtnAlt}
            onClick={() => setLiveFeed((v) => !v)}
            type="button"
          >
            {liveFeed ? "Use manual" : "Use live feed"}
          </button>

          <button
            style={hornReady ? styles.secondaryBtn : styles.hornBtn}
            onClick={hornReady ? playHorn : enableHorn}
            type="button"
          >
            {hornReady ? "Test goal horn" : "Enable goal horn"}
          </button>

          {hornPlaying && (
            <button style={styles.secondaryBtn} onClick={stopHorn} type="button">
              Stop horn
            </button>
          )}

          <div style={styles.liveTag}>
            <span style={liveFeed ? styles.liveDot : styles.manualDot} />
            {liveFeed ? "LIVE FEED · auto every 15s" : "MANUAL MODE"}
          </div>

          <div style={styles.hornStatus}>
            {hornReady
              ? hornPlaying
                ? "GOAL HORN PLAYING · plays one time"
                : "Goal horn armed — it will sound one time when the Canes score."
              : "Tap Enable goal horn once. It uses /canes-horn.mp3 from your public folder."}
          </div>

          {lastUpdated && <div style={styles.updated}>Updated {lastUpdated.toLocaleTimeString()}</div>}
          {err && <div style={styles.err}>{err}</div>}
        </section>
      </main>

      <footer style={styles.footer}>
        <div>GNL · private board</div>
        <div style={styles.footerSlogan}>BUNCH OF JERKS 🚨</div>
      </footer>
    </div>
  );
}

function TeamScore({ hero = false, label, score, sog, live, accent, winning = false }) {
  return (
    <div style={hero ? styles.canesSide : styles.oppSide}>
      <div style={{ ...styles.teamTag, color: accent }}>{label}</div>
      <div
        style={{
          ...(hero ? styles.scoreBig : styles.scoreSmall),
          color: accent,
          textShadow: winning ? `0 0 36px rgba(204, 0, 0, 0.72)` : "none",
        }}
      >
        {score}
      </div>
      {live && <div style={hero ? styles.sog : styles.sogOpp}>{sog ?? 0} SOG</div>}
    </div>
  );
}

function SeriesTeam({ label, wins, accent, neededToWin = 4 }) {
  return (
    <div style={styles.seriesTeam}>
      <div style={styles.seriesPips}>
        {Array.from({ length: neededToWin }).map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.pip,
              background: i < wins ? accent : "transparent",
              borderColor: accent,
              boxShadow: i < wins ? `0 0 14px ${accent}` : "none",
            }}
          />
        ))}
      </div>
      <div style={{ ...styles.seriesLabel, color: accent }}>{label}</div>
      <div style={styles.seriesWins}>{wins}</div>
    </div>
  );
}

function StormFlag() {
  return (
    <div style={styles.stormFlag} aria-label="Hurricane warning flags">
      {[0, 1].map((i) => (
        <svg key={i} width="44" height="44" viewBox="0 0 100 100" style={{ ...styles.flagSvg, animationDelay: `${i * 0.35}s` }}>
          <rect x="0" y="0" width="100" height="100" fill={RED} />
          <rect x="31" y="31" width="38" height="38" fill={BLACK} />
        </svg>
      ))}
    </div>
  );
}

function CdUnit({ n, label }) {
  return (
    <div style={styles.cdUnit}>
      <div style={styles.cdNum}>{String(n).padStart(2, "0")}</div>
      <div style={styles.cdLabel}>{label}</div>
    </div>
  );
}

const keyframes = `
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.45;} }
@keyframes blink { 0%,100%{opacity:1; transform:scale(1);} 50%{opacity:0.35; transform:scale(0.985);} }
@keyframes flagwave { 0%,100%{transform:skewX(0deg) translateY(0);} 50%{transform:skewX(-6deg) translateY(-2px);} }
@keyframes glowdrift { 0%,100%{transform:translate3d(-50%,0,0) scale(1);} 50%{transform:translate3d(-50%,10px,0) scale(1.04);} }
`;

const styles = {
  page: {
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    background: `radial-gradient(circle at 50% -10%, #292929 0%, ${BLACK} 52%, #000 100%)`,
    color: BONE,
    fontFamily: "Inter, 'Helvetica Neue', Arial, sans-serif",
    padding: "0 0 44px",
    margin: 0,
  },
  rinkGlow: {
    position: "absolute",
    top: 76,
    left: "50%",
    width: 620,
    height: 260,
    transform: "translateX(-50%)",
    background: `radial-gradient(circle, rgba(204,0,0,0.28), rgba(204,0,0,0.06) 42%, transparent 72%)`,
    filter: "blur(12px)",
    pointerEvents: "none",
    animation: "glowdrift 7s ease-in-out infinite",
  },
  flagBar: {
    height: 10,
    background: `repeating-linear-gradient(45deg, ${RED} 0 22px, ${BLACK} 22px 44px, ${SILVER} 44px 48px)`,
  },
  header: { position: "relative", zIndex: 1, textAlign: "center", padding: "30px 18px 12px" },
  stormFlag: { display: "flex", gap: 9, justifyContent: "center", marginBottom: 15 },
  flagSvg: { filter: "drop-shadow(0 0 12px rgba(204,0,0,0.52))", animation: "flagwave 3.2s ease-in-out infinite" },
  eyebrow: { letterSpacing: 3.4, fontSize: 11, color: SILVER, fontWeight: 900, marginBottom: 10 },
  wordmark: { margin: 0, fontSize: "clamp(30px, 7vw, 58px)", fontWeight: 1000, letterSpacing: 1, fontStyle: "italic", textTransform: "uppercase" },
  logo: { width: "min(240px, 72vw)", display: "block", margin: "14px auto 0", borderRadius: 18, background: BLACK, boxShadow: "0 18px 60px rgba(0,0,0,0.45)" },
  tagline: { color: SILVER, fontStyle: "italic", marginTop: 12, fontSize: 14 },
  shell: { position: "relative", zIndex: 1, width: "min(720px, calc(100% - 28px))", margin: "0 auto" },
  board: { marginTop: 18, padding: "18px clamp(14px, 4vw, 28px) 24px", border: "1px solid rgba(162,170,173,0.18)", borderRadius: 28, background: "linear-gradient(180deg, rgba(17,17,17,0.92), rgba(5,5,5,0.92))", boxShadow: "0 24px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)" },
  statusStrip: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 12, flexWrap: "wrap" },
  livePill: { background: RED, color: BONE, padding: "6px 11px", borderRadius: 999, fontSize: 11, fontWeight: 1000, letterSpacing: 2, boxShadow: "0 0 20px rgba(204,0,0,0.45)" },
  idlePill: { background: "rgba(162,170,173,0.13)", color: SILVER, padding: "6px 11px", borderRadius: 999, fontSize: 11, fontWeight: 900, letterSpacing: 2 },
  statusText: { color: MUTED, fontSize: 12, letterSpacing: 1 },
  scoreRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 },
  canesSide: { flex: 1, textAlign: "center", minWidth: 0 },
  oppSide: { flex: 1, textAlign: "center", minWidth: 0, opacity: 0.88 },
  teamTag: { fontWeight: 1000, fontSize: "clamp(14px, 3vw, 19px)", letterSpacing: 2.4 },
  scoreBig: { fontSize: "clamp(78px, 23vw, 148px)", fontWeight: 1000, lineHeight: 0.95, fontVariantNumeric: "tabular-nums" },
  scoreSmall: { fontSize: "clamp(48px, 14vw, 88px)", fontWeight: 900, lineHeight: 1, fontVariantNumeric: "tabular-nums" },
  sog: { color: SILVER, fontSize: 12, marginTop: 7, letterSpacing: 1.4, fontWeight: 800 },
  sogOpp: { color: MUTED, fontSize: 11, marginTop: 7, letterSpacing: 1.2, fontWeight: 700 },
  center: { flex: "0 0 auto", textAlign: "center", minWidth: 92 },
  period: { fontWeight: 1000, fontSize: 15, letterSpacing: 2.2 },
  clock: { fontSize: 25, fontWeight: 900, fontVariantNumeric: "tabular-nums", marginTop: 5 },
  vs: { color: "#555", fontSize: 12, marginTop: 10, fontWeight: 900, letterSpacing: 2 },
  winBanner: { textAlign: "center", marginTop: 22, fontSize: "clamp(24px, 6vw, 34px)", fontWeight: 1000, color: RED, letterSpacing: 2.4, animation: "blink 1s infinite" },
  leadBanner: { textAlign: "center", marginTop: 20, fontSize: 16, fontWeight: 1000, color: RED, letterSpacing: 3.4 },
  lossBanner: { textAlign: "center", marginTop: 18, fontSize: 15, color: SILVER, fontStyle: "italic" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 14, marginTop: 14 },
  card: { padding: 20, textAlign: "center", border: "1px solid rgba(162,170,173,0.15)", borderRadius: 22, background: "rgba(17,17,17,0.72)", boxShadow: "0 16px 40px rgba(0,0,0,0.28)" },
  cardTitle: { color: SILVER, fontSize: 11, letterSpacing: 3, fontWeight: 900, marginBottom: 15 },
  seriesRow: { display: "flex", alignItems: "center", justifyContent: "center", gap: 24 },
  seriesPips: { display: "flex", gap: 7, justifyContent: "center", marginBottom: 8 },
  pip: { width: 14, height: 14, borderRadius: "50%", border: "2px solid", display: "inline-block" },
  seriesTeam: { textAlign: "center" },
  seriesDash: { color: "#444", fontSize: 30, fontWeight: 300 },
  seriesLabel: { fontWeight: 1000, fontSize: 13, letterSpacing: 1.4 },
  seriesWins: { fontSize: 31, fontWeight: 1000, marginTop: 2 },
  seriesNote: { color: MUTED, fontSize: 12, marginTop: 13, fontStyle: "italic" },
  cdClock: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 },
  cdUnit: { minWidth: 0, padding: "10px 6px", borderRadius: 16, background: "rgba(255,255,255,0.035)", border: "1px solid rgba(162,170,173,0.09)" },
  cdNum: { fontSize: "clamp(27px, 7vw, 40px)", fontWeight: 1000, color: BONE, fontVariantNumeric: "tabular-nums", lineHeight: 1 },
  cdLabel: { fontSize: 9, letterSpacing: 1.8, color: SILVER, marginTop: 7, fontWeight: 900 },
  cdGame: { color: RED, fontSize: 13, fontWeight: 1000, letterSpacing: 1, marginTop: 15 },
  cdLive: { fontSize: 28, fontWeight: 1000, color: RED, letterSpacing: 2, animation: "blink 1s infinite" },
  controls: { marginTop: 14, padding: "18px 16px", textAlign: "center", borderRadius: 22, border: "1px solid rgba(162,170,173,0.12)", background: "rgba(5,5,5,0.52)" },
  primaryBtn: { background: RED, color: BONE, border: "none", padding: "12px 22px", borderRadius: 12, fontWeight: 1000, fontSize: 14, cursor: "pointer", letterSpacing: 1, margin: 5, boxShadow: "0 12px 30px rgba(204,0,0,0.24)" },
  primaryBtnAlt: { background: DEEP_RED, color: BONE, border: "none", padding: "12px 22px", borderRadius: 12, fontWeight: 1000, fontSize: 14, cursor: "pointer", letterSpacing: 1, margin: 5 },
  secondaryBtn: { background: "transparent", color: BONE, border: `1px solid rgba(162,170,173,0.46)`, padding: "12px 22px", borderRadius: 12, fontWeight: 900, fontSize: 14, cursor: "pointer", letterSpacing: 1, margin: 5 },
  hornBtn: { background: "linear-gradient(180deg, #f4f4f4, #a2aaad)", color: BLACK, border: "none", padding: "12px 22px", borderRadius: 12, fontWeight: 1000, fontSize: 14, cursor: "pointer", letterSpacing: 1, margin: 5, boxShadow: "0 12px 30px rgba(244,244,244,0.16)" },
  liveTag: { marginTop: 12, color: SILVER, fontSize: 12, letterSpacing: 1.2, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontWeight: 900 },
  liveDot: { width: 9, height: 9, borderRadius: "50%", background: RED, display: "inline-block", animation: "pulse 1.5s infinite", boxShadow: "0 0 10px rgba(204,0,0,0.8)" },
  manualDot: { width: 9, height: 9, borderRadius: "50%", background: SILVER, display: "inline-block" },
  updated: { color: MUTED, fontSize: 11, marginTop: 7 },
  hornStatus: { color: MUTED, fontSize: 11, marginTop: 7, fontWeight: 800 },
  err: { color: "#ff7d7d", fontSize: 12, marginTop: 8, fontWeight: 700 },
  footer: { position: "relative", zIndex: 1, width: "min(720px, calc(100% - 28px))", margin: "32px auto 0", padding: "18px 4px 0", display: "flex", justifyContent: "space-between", gap: 12, color: "#555", fontSize: 12, borderTop: "1px solid rgba(162,170,173,0.13)", flexWrap: "wrap" },
  footerSlogan: { color: RED, fontWeight: 1000, letterSpacing: 1 },
};
