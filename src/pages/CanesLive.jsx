import { useState, useEffect, useCallback } from "react";

// ============================================================
//  CANES LIVE  —  private page for route /canes
//
//  Drop this file into your GNL React/Vite app the same way you
//  did WarrenProposal.jsx, and add the route:
//
//     <Route path="/canes" element={<CanesLive />} />
//
//  ONE THING TO PASTE: after you deploy the Cloudflare Worker,
//  put its URL on the line below (WORKER_URL). Until you do, the
//  page still works in manual mode with the Refresh + edit buttons.
// ============================================================

const WORKER_URL = "https://dry-forest-d634.greg-ff0.workers.dev";

// ---- Hurricanes palette ----
const RED = "#CC0000";
const BLACK = "#0A0A0A";
const SILVER = "#A2AAAD";
const BONE = "#F4F4F4";

// Series state (best-of-7). Edit these two numbers after each game
// if you're running manual, or just enjoy — the live feed doesn't
// track series, so this stays hand-set.
const SERIES_DEFAULT = { canes: 1, opp: 2, oppName: "Vegas" };

// Fallback game data used in manual mode / before the worker is live.
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

export default function CanesLive() {
  const [game, setGame] = useState(MANUAL_DEFAULT);
  const [series, setSeries] = useState(SERIES_DEFAULT);
  const [live, setLive] = useState(Boolean(WORKER_URL));
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchLive = useCallback(async () => {
    if (!WORKER_URL) return;
    setLoading(true);
    setErr(null);
    try {
      const res = await fetch(WORKER_URL, { cache: "no-store" });
      const data = await res.json();
      if (data && data.found) {
        setGame(data);
        setLastUpdated(new Date());
      } else if (data && data.found === false) {
        setErr("No Canes game found in the feed right now.");
      } else if (data && data.error) {
        setErr("Feed hiccup — try again in a sec.");
      }
    } catch (e) {
      setErr("Couldn't reach the feed.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!live) return;
    fetchLive();
    const id = setInterval(fetchLive, 15000); // every 15s
    return () => clearInterval(id);
  }, [live, fetchLive]);

  const isFinal = game.state === "FINAL" || game.state === "OFF";
  const isLiveGame = game.state === "LIVE" || game.state === "CRIT";
  const canesWinning = game.canes.score > game.opp.score;
  const canesLost = isFinal && game.canes.score < game.opp.score;

  const periodLabel = () => {
    if (game.inIntermission) return "INTERMISSION";
    if (isFinal) return "FINAL";
    if (game.state === "FUT" || game.state === "PRE") return "PREGAME";
    const p = game.period;
    if (!p) return "";
    if (game.periodType === "OT") return "OT";
    if (game.periodType === "SO") return "SHOOTOUT";
    const ord = p === 1 ? "1ST" : p === 2 ? "2ND" : p === 3 ? "3RD" : `${p}TH`;
    return ord;
  };

  const adjustSeries = (key, delta) =>
    setSeries((s) => ({ ...s, [key]: Math.max(0, Math.min(4, s[key] + delta)) }));

  return (
    <div style={styles.page}>
      <style>{keyframes}</style>

      {/* hero flag bar */}
      <div style={styles.flagBar} aria-hidden />

      <header style={styles.header}>
        <div style={styles.eyebrow}>STANLEY CUP FINAL · PRIVATE BOARD</div>
        <h1 style={styles.wordmark}>
          <span style={{ color: RED }}>CAROLINA</span>{" "}
          <span style={{ color: BONE }}>HURRICANES</span>
        </h1>
        <div style={styles.tagline}>Take warning.</div>
      </header>

      {/* SCORE */}
      <main style={styles.board}>
        <div style={styles.scoreRow}>
          {/* Canes side — always the hero */}
          <div style={styles.canesSide}>
            <div style={styles.teamTag}>CANES</div>
            <div
              style={{
                ...styles.scoreBig,
                color: RED,
                textShadow: canesWinning ? `0 0 28px rgba(204,0,0,0.6)` : "none",
              }}
            >
              {game.canes.score}
            </div>
            {isLiveGame && (
              <div style={styles.sog}>{game.canes.sog} SOG</div>
            )}
          </div>

          {/* center state */}
          <div style={styles.center}>
            <div
              style={{
                ...styles.period,
                color: isLiveGame ? RED : SILVER,
                animation: isLiveGame && !game.inIntermission ? "pulse 2s infinite" : "none",
              }}
            >
              {periodLabel()}
            </div>
            {isLiveGame && !game.inIntermission && (
              <div style={styles.clock}>{game.clock}</div>
            )}
            {(game.state === "FUT" || game.state === "PRE") && game.startTimeUTC && (
              <div style={styles.clock}>
                {new Date(game.startTimeUTC).toLocaleTimeString([], {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </div>
            )}
            <div style={styles.vs}>vs</div>
          </div>

          {/* opponent side — smaller, where it belongs */}
          <div style={styles.oppSide}>
            <div style={styles.oppTag}>{game.opp.abbrev}</div>
            <div style={styles.scoreSmall}>{game.opp.score}</div>
            {isLiveGame && <div style={styles.sogOpp}>{game.opp.sog} SOG</div>}
          </div>
        </div>

        {/* result banner */}
        {canesWinning && isFinal && <div style={styles.winBanner}>CANES WIN 🚨</div>}
        {canesWinning && isLiveGame && <div style={styles.leadBanner}>CANES LEAD</div>}
        {canesLost && <div style={styles.lossBanner}>Tough one. On to the next.</div>}

        {game.venue && (
          <div style={styles.venue}>{game.venue}</div>
        )}
      </main>

      {/* SERIES TRACKER */}
      <section style={styles.series}>
        <div style={styles.seriesTitle}>SERIES · BEST OF 7</div>
        <div style={styles.seriesRow}>
          <SeriesTeam label="CANES" wins={series.canes} accent={RED} />
          <div style={styles.seriesDash}>—</div>
          <SeriesTeam label={series.oppName.toUpperCase()} wins={series.opp} accent={SILVER} />
        </div>
        <div style={styles.seriesNote}>
          First to 4 wins the Cup.
        </div>
        {/* manual series adjusters */}
        <div style={styles.seriesControls}>
          <span style={styles.ctrlLabel}>Canes</span>
          <button style={styles.ctrlBtn} onClick={() => adjustSeries("canes", -1)}>–</button>
          <button style={styles.ctrlBtn} onClick={() => adjustSeries("canes", 1)}>+</button>
          <span style={{ ...styles.ctrlLabel, marginLeft: 16 }}>{series.oppName}</span>
          <button style={styles.ctrlBtn} onClick={() => adjustSeries("opp", -1)}>–</button>
          <button style={styles.ctrlBtn} onClick={() => adjustSeries("opp", 1)}>+</button>
        </div>
      </section>

      {/* CONTROLS */}
      <section style={styles.controls}>
        {live ? (
          <>
            <button style={styles.primaryBtn} onClick={fetchLive} disabled={loading}>
              {loading ? "Updating…" : "Refresh now"}
            </button>
            <div style={styles.liveTag}>
              <span style={styles.liveDot} /> LIVE · auto every 15s
            </div>
            {lastUpdated && (
              <div style={styles.updated}>
                Updated {lastUpdated.toLocaleTimeString()}
              </div>
            )}
            {err && <div style={styles.err}>{err}</div>}
          </>
        ) : (
          <div style={styles.manualNote}>
            Manual mode — paste your Cloudflare Worker URL into{" "}
            <code style={styles.code}>WORKER_URL</code> to go live.
            Edit the score with the buttons below.
          </div>
        )}

        {/* manual score adjusters (handy if feed is down) */}
        {!live && (
          <div style={styles.manualScore}>
            <ScoreStepper
              label="Canes"
              value={game.canes.score}
              onChange={(v) =>
                setGame((g) => ({ ...g, canes: { ...g.canes, score: Math.max(0, v) } }))
              }
              accent={RED}
            />
            <ScoreStepper
              label={game.opp.abbrev}
              value={game.opp.score}
              onChange={(v) =>
                setGame((g) => ({ ...g, opp: { ...g.opp, score: Math.max(0, v) } }))
              }
              accent={SILVER}
            />
          </div>
        )}
      </section>

      <footer style={styles.footer}>
        <div>GNL · private board</div>
        <div style={{ color: RED, fontWeight: 700 }}>BUNCH OF JERKS 🚨</div>
      </footer>
    </div>
  );
}

function SeriesTeam({ label, wins, accent }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ ...styles.seriesPips }}>
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            style={{
              ...styles.pip,
              background: i < wins ? accent : "transparent",
              borderColor: accent,
              boxShadow: i < wins ? `0 0 10px ${accent}` : "none",
            }}
          />
        ))}
      </div>
      <div style={{ ...styles.seriesLabel, color: accent }}>{label}</div>
      <div style={styles.seriesWins}>{wins}</div>
    </div>
  );
}

function ScoreStepper({ label, value, onChange, accent }) {
  return (
    <div style={styles.stepper}>
      <div style={{ ...styles.stepperLabel, color: accent }}>{label}</div>
      <div style={styles.stepperRow}>
        <button style={styles.ctrlBtn} onClick={() => onChange(value - 1)}>–</button>
        <span style={styles.stepperVal}>{value}</span>
        <button style={styles.ctrlBtn} onClick={() => onChange(value + 1)}>+</button>
      </div>
    </div>
  );
}

const keyframes = `
@keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.45;} }
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
@media (max-width:520px){
  .canes-score-big{ font-size:5.5rem !important; }
}
`;

const styles = {
  page: {
    minHeight: "100vh",
    background: `radial-gradient(circle at 50% -10%, #1a1a1a 0%, ${BLACK} 60%)`,
    color: BONE,
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    padding: "0 0 48px",
    margin: 0,
  },
  flagBar: {
    height: 8,
    background: `repeating-linear-gradient(45deg, ${RED} 0 24px, ${BLACK} 24px 48px)`,
  },
  header: { textAlign: "center", padding: "32px 20px 8px" },
  eyebrow: {
    letterSpacing: 3,
    fontSize: 11,
    color: SILVER,
    fontWeight: 700,
    marginBottom: 12,
  },
  wordmark: {
    margin: 0,
    fontSize: "clamp(28px, 7vw, 48px)",
    fontWeight: 900,
    letterSpacing: 1,
    fontStyle: "italic",
  },
  tagline: { color: SILVER, fontStyle: "italic", marginTop: 6, fontSize: 14 },
  board: { maxWidth: 640, margin: "0 auto", padding: "24px 20px 8px" },
  scoreRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
  },
  canesSide: { flex: 1, textAlign: "center" },
  oppSide: { flex: 1, textAlign: "center", opacity: 0.85 },
  teamTag: { color: RED, fontWeight: 900, fontSize: 18, letterSpacing: 2 },
  oppTag: { color: SILVER, fontWeight: 700, fontSize: 14, letterSpacing: 2 },
  scoreBig: {
    fontSize: "clamp(72px, 20vw, 130px)",
    fontWeight: 900,
    lineHeight: 1,
    fontVariantNumeric: "tabular-nums",
  },
  scoreSmall: {
    fontSize: "clamp(44px, 12vw, 80px)",
    fontWeight: 700,
    lineHeight: 1,
    color: SILVER,
    fontVariantNumeric: "tabular-nums",
  },
  sog: { color: SILVER, fontSize: 12, marginTop: 6, letterSpacing: 1 },
  sogOpp: { color: "#777", fontSize: 11, marginTop: 6, letterSpacing: 1 },
  center: { flex: "0 0 auto", textAlign: "center", minWidth: 92 },
  period: { fontWeight: 900, fontSize: 16, letterSpacing: 2 },
  clock: {
    fontSize: 22,
    fontWeight: 700,
    fontVariantNumeric: "tabular-nums",
    marginTop: 4,
  },
  vs: { color: "#555", fontSize: 12, marginTop: 8, fontStyle: "italic" },
  winBanner: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 28,
    fontWeight: 900,
    color: RED,
    letterSpacing: 2,
    animation: "blink 1s infinite",
  },
  leadBanner: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 16,
    fontWeight: 800,
    color: RED,
    letterSpacing: 3,
  },
  lossBanner: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 15,
    color: SILVER,
    fontStyle: "italic",
  },
  venue: { textAlign: "center", color: "#666", fontSize: 12, marginTop: 14, letterSpacing: 1 },
  series: { maxWidth: 520, margin: "28px auto 0", padding: "20px", textAlign: "center" },
  seriesTitle: { color: SILVER, fontSize: 11, letterSpacing: 3, fontWeight: 700 },
  seriesRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    marginTop: 14,
  },
  seriesDash: { color: "#444", fontSize: 28, fontWeight: 300 },
  seriesPips: { display: "flex", gap: 6, justifyContent: "center", marginBottom: 8 },
  pip: {
    width: 14,
    height: 14,
    borderRadius: "50%",
    border: "2px solid",
    display: "inline-block",
  },
  seriesLabel: { fontWeight: 800, fontSize: 13, letterSpacing: 1 },
  seriesWins: { fontSize: 30, fontWeight: 900, marginTop: 2 },
  seriesNote: { color: "#666", fontSize: 12, marginTop: 14, fontStyle: "italic" },
  seriesControls: {
    marginTop: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    flexWrap: "wrap",
  },
  ctrlLabel: { color: SILVER, fontSize: 12, marginRight: 4 },
  ctrlBtn: {
    background: "transparent",
    border: `1px solid ${SILVER}`,
    color: BONE,
    width: 30,
    height: 30,
    borderRadius: 6,
    cursor: "pointer",
    fontSize: 16,
    lineHeight: 1,
  },
  controls: { maxWidth: 520, margin: "8px auto 0", padding: "12px 20px", textAlign: "center" },
  primaryBtn: {
    background: RED,
    color: BONE,
    border: "none",
    padding: "12px 28px",
    borderRadius: 8,
    fontWeight: 800,
    fontSize: 15,
    cursor: "pointer",
    letterSpacing: 1,
  },
  liveTag: {
    marginTop: 12,
    color: SILVER,
    fontSize: 12,
    letterSpacing: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: RED,
    display: "inline-block",
    animation: "pulse 1.5s infinite",
  },
  updated: { color: "#666", fontSize: 11, marginTop: 6 },
  err: { color: "#ff6b6b", fontSize: 12, marginTop: 8 },
  manualNote: { color: SILVER, fontSize: 13, lineHeight: 1.6 },
  code: { color: RED, fontFamily: "monospace" },
  manualScore: { display: "flex", justifyContent: "center", gap: 32, marginTop: 18 },
  stepper: { textAlign: "center" },
  stepperLabel: { fontWeight: 800, fontSize: 13, marginBottom: 6 },
  stepperRow: { display: "flex", alignItems: "center", gap: 10 },
  stepperVal: { fontSize: 26, fontWeight: 900, minWidth: 28, fontVariantNumeric: "tabular-nums" },
  footer: {
    maxWidth: 640,
    margin: "40px auto 0",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    color: "#555",
    fontSize: 12,
    borderTop: "1px solid #1f1f1f",
  },
};
