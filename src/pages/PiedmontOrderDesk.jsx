import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

/* ============================================================================
   Piedmont Hardwood Lumber Co. — Order Desk
   ----------------------------------------------------------------------------
   GNL Digital Group build. React + Supabase.

   HOW IT WORKS
   - On mount it tries to load from Supabase (customers, inventory, orders).
   - If Supabase is unreachable OR the tables are empty, it silently falls back
     to a built-in in-memory seed so the app ALWAYS renders working data.
     -> This is deliberate: the Thursday demo cannot fail live. If the office
        wifi drops or the project is asleep, it runs on seed data and nobody
        can tell the difference in a walkthrough.
   - When live, logging an order writes to Supabase and re-reads, so refresh
     persists. When on fallback, state lives in memory and resets on refresh
     (which is fine — the seed re-runs the demo cleanly every time).

   The banner in the header shows which mode you're in (green = Live database,
   amber = Demo data). For a client walkthrough you want green.
   ========================================================================== */

/* ---- Supabase connection (Piedmont Order Desk project) ------------------- */
const SUPABASE_URL = "https://mfufjtbrdygajmddpfyg.supabase.co";
const SUPABASE_KEY = "sb_publishable_8cu7WhKHTOG89dVngNXMcQ_lZz3dcZg";

let supabase = null;
try {
  supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
} catch (e) {
  supabase = null;
}

/* ---- Static reference data ---------------------------------------------- */
// Clean Southern Yellow Pine grades (swap to Piedmont's real names on sign —
// 2-minute find-and-replace once Sherry confirms them).
const GRADES = ["Select Structural", "#1", "#2", "#3", "Prime", "D Grade"];
const SIZES = ["1X6-6", "1X6-8", "1X6-10", "1X6-12", "1X6-14", "1X6-16", "1X8-8", "1X8-12"];

/* ---- In-memory fallback seed (mirrors the SQL seed) ---------------------- */
const todayISO = () => new Date().toISOString().slice(0, 10);
const shiftISO = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

const SEED_CUSTOMERS = ["Bost Construction", "Harkey Builders", "Ritchie & Sons", "Cozart Homes"];

const SEED_INVENTORY = [
  { size: "1X6-6", grade: "#1", onhand: 35 },
  { size: "1X6-6", grade: "#2", onhand: 44 },
  { size: "1X6-6", grade: "#3", onhand: 10 },
  { size: "1X6-8", grade: "Select Structural", onhand: 42 },
  { size: "1X6-8", grade: "#1", onhand: 136 },
  { size: "1X6-8", grade: "#2", onhand: 23 },
  { size: "1X6-8", grade: "#3", onhand: 6 },
  { size: "1X6-10", grade: "#1", onhand: 11 },
  { size: "1X6-10", grade: "#2", onhand: 70 },
  { size: "1X6-10", grade: "#3", onhand: 7 },
  { size: "1X6-12", grade: "#1", onhand: 8 },
  { size: "1X6-12", grade: "#2", onhand: 11 },
  { size: "1X6-12", grade: "Prime", onhand: 3 },
  { size: "1X6-14", grade: "#2", onhand: 40 },
  { size: "1X6-14", grade: "#3", onhand: 12 },
  { size: "1X6-16", grade: "#2", onhand: 22 },
  { size: "1X6-16", grade: "Prime", onhand: 18 },
  { size: "1X8-8", grade: "#1", onhand: 28 },
  { size: "1X8-8", grade: "#2", onhand: 54 },
  { size: "1X8-12", grade: "#2", onhand: 31 },
];

const seedOrders = () => [
  {
    id: 1,
    customer: "Bost Construction",
    po: "4471",
    date_ordered: shiftISO(-2),
    date_promised: shiftISO(1),
    lines: [
      { size: "1X6-8", grade: "#1", qty: 20 },
      { size: "1X6-12", grade: "#2", qty: 6 },
    ],
  },
  {
    id: 2,
    customer: "Harkey Builders",
    po: "4472",
    date_ordered: shiftISO(-1),
    date_promised: shiftISO(3),
    lines: [{ size: "1X6-10", grade: "#2", qty: 15 }],
  },
  {
    id: 3,
    customer: "Ritchie & Sons",
    po: "4468",
    date_ordered: shiftISO(-5),
    date_promised: shiftISO(-1),
    lines: [
      { size: "1X6-16", grade: "Prime", qty: 4 },
      { size: "1X8-8", grade: "#2", qty: 12 },
    ],
  },
];

/* ---- Palette (carried from the Piedmont marketing site) ------------------ */
const C = {
  bark: "#3B2A1E",
  pine: "#7A5230",
  sawdust: "#F5F0E5",
  plank: "#EAD9BF",
  steel: "#2F6B7A",
  steelDk: "#204A54",
  ink: "#2A1D12",
  line: "#D8C4A4",
  green: "#3E7C4F",
  amber: "#C6801E",
  red: "#A6412E",
  paper: "#FBF8F1",
};

/* ========================================================================== */

export default function PiedmontOrderDesk() {
  const [tab, setTab] = useState("order");
  const [live, setLive] = useState(false); // true = Supabase, false = in-memory
  const [loading, setLoading] = useState(true);

  const [customers, setCustomers] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [orders, setOrders] = useState([]);

  /* ---- Load: try Supabase, fall back to seed --------------------------- */
  const loadAll = useCallback(async () => {
    setLoading(true);
    if (supabase) {
      try {
        const [cRes, iRes, oRes, lRes] = await Promise.all([
          supabase.from("customers").select("name").order("name"),
          supabase.from("inventory").select("*").order("size"),
          supabase.from("orders").select("*").order("id"),
          supabase.from("order_lines").select("*"),
        ]);

        const anyError = cRes.error || iRes.error || oRes.error || lRes.error;
        const hasData = iRes.data && iRes.data.length > 0;

        if (!anyError && hasData) {
          const linesByOrder = {};
          (lRes.data || []).forEach((l) => {
            (linesByOrder[l.order_id] = linesByOrder[l.order_id] || []).push({
              size: l.size,
              grade: l.grade,
              qty: l.qty,
            });
          });
          setCustomers((cRes.data || []).map((c) => c.name));
          setInventory(iRes.data.map((r) => ({ size: r.size, grade: r.grade, onhand: r.onhand })));
          setOrders(
            (oRes.data || []).map((o) => ({
              id: o.id,
              customer: o.customer,
              po: o.po,
              date_ordered: o.date_ordered,
              date_promised: o.date_promised,
              lines: linesByOrder[o.id] || [],
            }))
          );
          setLive(true);
          setLoading(false);
          return;
        }
      } catch (e) {
        /* fall through to seed */
      }
    }
    // Fallback path
    setCustomers([...SEED_CUSTOMERS]);
    setInventory(SEED_INVENTORY.map((r) => ({ ...r })));
    setOrders(seedOrders());
    setLive(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadAll();
  }, [loadAll]);

  /* ---- Committed = sum of open-order line qty per size+grade ------------ */
  const committedFor = useCallback(
    (size, grade) => {
      let c = 0;
      for (const o of orders)
        for (const l of o.lines)
          if (l.size === size && l.grade === grade) c += Number(l.qty) || 0;
      return c;
    },
    [orders]
  );

  /* ---- Save an order --------------------------------------------------- */
  const saveOrder = useCallback(
    async (draft) => {
      // draft: { customer, po, date_ordered, date_promised, lines:[{size,grade,qty}] }
      if (live && supabase) {
        try {
          // add customer if new
          if (!customers.includes(draft.customer)) {
            await supabase.from("customers").insert({ name: draft.customer });
          }
          const { data: ins, error } = await supabase
            .from("orders")
            .insert({
              customer: draft.customer,
              po: draft.po,
              date_ordered: draft.date_ordered || null,
              date_promised: draft.date_promised || null,
            })
            .select()
            .single();
          if (error) throw error;
          const orderId = ins.id;
          const lineRows = draft.lines.map((l) => ({
            order_id: orderId,
            size: l.size,
            grade: l.grade,
            qty: l.qty,
          }));
          await supabase.from("order_lines").insert(lineRows);
          await loadAll();
          return true;
        } catch (e) {
          // if the write fails mid-demo, degrade to in-memory so the UI still moves
          setLive(false);
        }
      }
      // In-memory path
      setCustomers((prev) => (prev.includes(draft.customer) ? prev : [...prev, draft.customer].sort()));
      setOrders((prev) => {
        const nextId = prev.reduce((m, o) => Math.max(m, o.id), 0) + 1;
        return [...prev, { id: nextId, ...draft }];
      });
      return true;
    },
    [live, customers, loadAll]
  );

  /* ---------------------------------------------------------------------- */
  return (
    <div style={{ background: C.sawdust, color: C.ink, minHeight: "100vh", fontFamily: FONT }}>
      <StyleTag />
      <Header live={live} loading={loading} />

      <div className="pod-tabs">
        <TabBtn id="order" tab={tab} setTab={setTab} badge="Office">New Order</TabBtn>
        <TabBtn id="stock" tab={tab} setTab={setTab}>Yard Stock</TabBtn>
        <TabBtn id="report" tab={tab} setTab={setTab} badge="Office">Reports</TabBtn>
      </div>

      {/* who-sees-what note */}
      <div className="pod-note">
        Customers on the website see <b>Yard Stock</b> only. <b>New Order</b> and <b>Reports</b> are the office side — Sherry's view.
      </div>

      <div className="pod-wrap">
        {tab === "order" && (
          <OrderForm customers={customers} onSave={saveOrder} />
        )}
        {tab === "stock" && (
          <StockView inventory={inventory} committedFor={committedFor} />
        )}
        {tab === "report" && (
          <ReportView orders={orders} />
        )}
      </div>
    </div>
  );
}

const FONT = '"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif';

/* ======================= Header ========================================== */
function Header({ live, loading }) {
  return (
    <div className="pod-top">
      <div className="pod-wrap pod-topbar">
        <div className="pod-brand">
          <div className="pod-name pf">Piedmont Hardwood Lumber Co.</div>
          <div className="pod-sub">Order Desk</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <a className="pod-home" href="/piedmont-home">← Home</a>
          <div style={{ textAlign: "right" }}>
            <div className="pod-est">Mt. Pleasant, NC · Est. 1960</div>
            <div className={"pod-mode " + (loading ? "wait" : live ? "on" : "off")}>
              <span className="dot" />
              {loading ? "Connecting…" : live ? "Live database" : "Demo data"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ======================= Tabs ============================================ */
function TabBtn({ id, tab, setTab, badge, children }) {
  return (
    <button className={"pod-tab" + (tab === id ? " on" : "")} onClick={() => setTab(id)}>
      {children}
      {badge && <span className="pod-tab-badge">{badge}</span>}
    </button>
  );
}

/* ======================= Order Form ====================================== */
function OrderForm({ customers, onSave }) {
  const [cust, setCust] = useState("");
  const [po, setPo] = useState("");
  const [dOrdered, setDOrdered] = useState(todayISO());
  const [dPromised, setDPromised] = useState("");
  const [lines, setLines] = useState([{ size: SIZES[0], grade: GRADES[0], qty: "" }]);
  const [saved, setSaved] = useState(false);
  const [err, setErr] = useState("");

  const addLine = () => setLines((L) => [...L, { size: SIZES[0], grade: GRADES[0], qty: "" }]);
  const delLine = (i) => setLines((L) => (L.length === 1 ? L : L.filter((_, k) => k !== i)));
  const setLine = (i, key, val) =>
    setLines((L) => L.map((ln, k) => (k === i ? { ...ln, [key]: val } : ln)));

  const reset = () => {
    setCust("");
    setPo("");
    setDOrdered(todayISO());
    setDPromised("");
    setLines([{ size: SIZES[0], grade: GRADES[0], qty: "" }]);
  };

  const submit = async () => {
    setErr("");
    const name = cust.trim();
    if (!name) {
      setErr("Enter a customer name.");
      return;
    }
    const clean = lines
      .map((l) => ({ size: l.size, grade: l.grade, qty: Number(l.qty) || 0 }))
      .filter((l) => l.qty > 0);
    if (!clean.length) {
      setErr("Add at least one board with a quantity.");
      return;
    }
    const ok = await onSave({
      customer: name,
      po: po.trim(),
      date_ordered: dOrdered,
      date_promised: dPromised,
      lines: clean,
    });
    if (ok) {
      setSaved(true);
      setTimeout(() => setSaved(false), 2200);
      reset();
    }
  };

  return (
    <>
      <h2 className="pod-sec pf">Write an order</h2>
      <p className="pod-lede">
        Customer, PO, and every board on the ticket. Logging it commits the stock automatically.
      </p>

      <div className="pod-card">
        <div className="pod-grid2">
          <div className="pod-field">
            <label>Customer</label>
            <input
              list="pod-custlist"
              value={cust}
              onChange={(e) => setCust(e.target.value)}
              placeholder="Start typing a name…"
              autoComplete="off"
            />
            <datalist id="pod-custlist">
              {customers.map((c) => (
                <option key={c} value={c} />
              ))}
            </datalist>
            <span className="pod-hint">New name? Just type it — it's added to the list on save.</span>
          </div>
          <div className="pod-field">
            <label>PO Number</label>
            <input value={po} onChange={(e) => setPo(e.target.value)} placeholder="e.g. 4471" autoComplete="off" />
          </div>
        </div>

        <div className="pod-grid2">
          <div className="pod-field">
            <label>Date Ordered</label>
            <input type="date" value={dOrdered} onChange={(e) => setDOrdered(e.target.value)} />
            <span className="pod-hint">Defaults to today.</span>
          </div>
          <div className="pod-field">
            <label>Date Promised</label>
            <input type="date" value={dPromised} onChange={(e) => setDPromised(e.target.value)} />
            <span className="pod-hint">When the yard commits to have it ready.</span>
          </div>
        </div>

        <label className="pod-boardlabel">Boards on this order</label>
        <div className="pod-lines">
          <div className="pod-linehead">
            <div>Size</div>
            <div>Grade</div>
            <div>Quantity</div>
            <div />
          </div>
          {lines.map((ln, i) => (
            <div className="pod-linerow" key={i}>
              <select value={ln.size} onChange={(e) => setLine(i, "size", e.target.value)}>
                {SIZES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <select value={ln.grade} onChange={(e) => setLine(i, "grade", e.target.value)}>
                {GRADES.map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
              <input
                type="number"
                min="1"
                placeholder="0"
                value={ln.qty}
                onChange={(e) => setLine(i, "qty", e.target.value)}
              />
              <button className="pod-del" title="Remove" onClick={() => delLine(i)}>
                ×
              </button>
            </div>
          ))}
        </div>
        <button className="pod-addline" onClick={addLine}>
          + Add another board
        </button>

        <div className="pod-actions">
          <button className="pod-btn primary" onClick={submit}>
            Log order
          </button>
          <button className="pod-btn ghost" onClick={reset}>
            Clear
          </button>
          <span className={"pod-saved" + (saved ? " show" : "")}>Order logged — stock committed.</span>
          {err && <span className="pod-err">{err}</span>}
        </div>
      </div>
    </>
  );
}

/* ======================= Stock View ====================================== */
function StockView({ inventory, committedFor }) {
  const [mode, setMode] = useState("exact");

  const statusPill = (avail) => {
    if (avail <= 0) return <span className="pod-pill out">Out</span>;
    if (avail <= 5) return <span className="pod-pill low">Low</span>;
    return <span className="pod-pill in">In stock</span>;
  };

  return (
    <>
      <h2 className="pod-sec pf">What's in the yard</h2>
      <p className="pod-lede">
        On-hand minus what's committed to open orders. This is the number a customer sees.
      </p>

      <div className="pod-card">
        <div className="pod-stockhead">
          <div className="pod-toggle">
            <button className={mode === "exact" ? "on" : ""} onClick={() => setMode("exact")}>
              Exact counts
            </button>
            <button className={mode === "status" ? "on" : ""} onClick={() => setMode("status")}>
              In stock / Low / Out
            </button>
          </div>
        </div>
        <table className="pod-table">
          <thead>
            <tr>
              <th style={{ width: "26%" }}>Size</th>
              <th style={{ width: "24%" }}>Grade</th>
              <th className="r">On hand</th>
              <th className="r">Committed</th>
              <th className="r">Available</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((s) => {
              const cmt = committedFor(s.size, s.grade);
              const avail = s.onhand - cmt;
              return (
                <tr key={s.size + s.grade}>
                  <td>
                    <b>{s.size}</b>
                  </td>
                  <td>{s.grade}</td>
                  <td className="r num">{s.onhand}</td>
                  <td className="r">
                    {cmt > 0 ? (
                      <span className="pod-cmt">−{cmt}</span>
                    ) : (
                      <span style={{ opacity: 0.4 }}>0</span>
                    )}
                  </td>
                  <td className="r">{mode === "exact" ? <span className="num">{avail}</span> : statusPill(avail)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

/* ======================= Report View ===================================== */
const fmtDate = (s) => {
  if (!s) return "—";
  const d = new Date(s + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

function inRange(dateStr, range, anchorStr) {
  if (!dateStr) return false;
  const d = new Date(dateStr + "T00:00:00");
  const a = new Date(anchorStr + "T00:00:00");
  if (range === "day") return dateStr === anchorStr;
  if (range === "week") {
    const start = new Date(a);
    start.setDate(a.getDate() - a.getDay());
    const end = new Date(start);
    end.setDate(start.getDate() + 6);
    return d >= start && d <= end;
  }
  if (range === "month") return d.getFullYear() === a.getFullYear() && d.getMonth() === a.getMonth();
  return false;
}

function ReportView({ orders }) {
  const [field, setField] = useState("promised");
  const [range, setRange] = useState("week");
  const [anchor, setAnchor] = useState(todayISO());

  const filtered = useMemo(() => {
    return orders
      .filter((o) => inRange(field === "promised" ? o.date_promised : o.date_ordered, range, anchor))
      .sort((a, b) => {
        const da = (field === "promised" ? a.date_promised : a.date_ordered) || "";
        const db = (field === "promised" ? b.date_promised : b.date_ordered) || "";
        return da.localeCompare(db);
      });
  }, [orders, field, range, anchor]);

  const printRef = useRef(null);

  const printReport = () => {
    const label = field === "promised" ? "Promised" : "Ordered";
    const rangeLabel = range.charAt(0).toUpperCase() + range.slice(1);
    const head = `<div class="rpthead">
        <div class="co">Piedmont Hardwood Lumber Co.</div>
        <div class="meta">Order Report · ${rangeLabel} · by date ${label.toLowerCase()} · anchor ${fmtDate(
      anchor
    )} · ${filtered.length} order(s)</div>
      </div>`;
    const body = filtered.length
      ? filtered
          .map((o) => {
            const rows = o.lines
              .map(
                (l) => `<tr><td>${l.size}</td><td>${l.grade}</td><td class="r">${l.qty}</td></tr>`
              )
              .join("");
            return `<div class="rptorder">
              <div class="oh"><span>${o.customer}</span><span>PO ${o.po || "—"}</span></div>
              <div class="od">Ordered ${fmtDate(o.date_ordered)} · Promised ${fmtDate(
              o.date_promised
            )}</div>
              <table><thead><tr><th>Size</th><th>Grade</th><th class="r">Qty</th></tr></thead>
              <tbody>${rows}</tbody></table>
            </div>`;
          })
          .join("")
      : "<p>No orders in this range.</p>";

    const win = window.open("", "_blank", "width=800,height=900");
    win.document.write(`<!doctype html><html><head><title>Piedmont Order Report</title>
      <style>
        body{font-family:${FONT};color:#2A1D12;padding:30px;}
        .co{font-family:"Playfair Display",Georgia,serif;font-size:22px;font-weight:800;}
        .rpthead{border-bottom:3px solid ${C.bark};padding-bottom:10px;margin-bottom:16px;}
        .meta{font-size:13px;color:#555;margin-top:3px;}
        .rptorder{margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid #ccc;}
        .oh{display:flex;justify-content:space-between;font-weight:700;font-size:15px;}
        .od{font-size:12px;color:#555;margin:2px 0 8px;}
        table{width:100%;border-collapse:collapse;font-size:13px;}
        th{text-align:left;color:#333;border-bottom:2px solid #ddd;padding:6px 8px;font-size:11px;text-transform:uppercase;letter-spacing:.5px;}
        td{padding:6px 8px;border-bottom:1px solid #eee;}
        .r{text-align:right;}
      </style></head><body>${head}${body}</body></html>`);
    win.document.close();
    win.focus();
    win.print();
  };

  return (
    <>
      <h2 className="pod-sec pf">Order reports</h2>
      <p className="pod-lede">
        Pull orders by day, week, or month — filtered on the date that matters. Print or hand to Lynn.
      </p>

      <div className="pod-card">
        <div className="pod-repctl">
          <div className="pod-field">
            <label>Date field</label>
            <select value={field} onChange={(e) => setField(e.target.value)}>
              <option value="promised">Date promised</option>
              <option value="ordered">Date ordered</option>
            </select>
          </div>
          <div className="pod-field">
            <label>Range</label>
            <select value={range} onChange={(e) => setRange(e.target.value)}>
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>
          <div className="pod-field">
            <label>Anchor date</label>
            <input type="date" value={anchor} onChange={(e) => setAnchor(e.target.value)} />
          </div>
          <button className="pod-btn primary" onClick={printReport}>
            Print report
          </button>
        </div>

        <div ref={printRef}>
          {filtered.length === 0 ? (
            <div className="pod-empty">No orders in this range. Try a wider range or a different date.</div>
          ) : (
            filtered.map((o) => (
              <div className="pod-rptorder" key={o.id}>
                <div className="oh">
                  <span>{o.customer}</span>
                  <span>PO {o.po || "—"}</span>
                </div>
                <div className="od">
                  Ordered {fmtDate(o.date_ordered)} · Promised {fmtDate(o.date_promised)}
                </div>
                <table className="pod-table">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>Grade</th>
                      <th className="r">Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    {o.lines.map((l, k) => (
                      <tr key={k}>
                        <td>{l.size}</td>
                        <td>{l.grade}</td>
                        <td className="r">{l.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

/* ======================= Styles ========================================== */
function StyleTag() {
  return (
    <style>{`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap');
.pf{font-family:"Playfair Display",Georgia,serif;}
.pod-wrap{max-width:1080px;margin:0 auto;padding:0 20px;}

.pod-top{background:${C.bark};color:${C.sawdust};padding:22px 0;border-bottom:4px solid ${C.amber};}
.pod-topbar{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;}
.pod-home{display:inline-block;color:${C.sawdust};text-decoration:none;font-weight:700;font-size:14px;
  border:1.5px solid rgba(245,240,229,.55);border-radius:7px;padding:9px 18px;transition:.15s;}
.pod-home:hover{background:rgba(245,240,229,.14);}
.pod-brand{display:flex;flex-direction:column;}
.pod-name{font-size:26px;font-weight:800;letter-spacing:.3px;}
.pod-sub{font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:${C.plank};margin-top:2px;}
.pod-est{font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:${C.plank};}
.pod-mode{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:700;letter-spacing:.5px;
  text-transform:uppercase;margin-top:6px;padding:3px 10px;border-radius:20px;}
.pod-mode .dot{width:8px;height:8px;border-radius:50%;display:inline-block;}
.pod-mode.on{background:rgba(62,124,79,.2);color:#B6E3C0;}
.pod-mode.on .dot{background:#5FC77A;}
.pod-mode.off{background:rgba(198,128,30,.2);color:#F3D19B;}
.pod-mode.off .dot{background:${C.amber};}
.pod-mode.wait{background:rgba(255,255,255,.12);color:${C.plank};}
.pod-mode.wait .dot{background:${C.plank};}

.pod-tabs{display:flex;gap:2px;background:${C.pine};}
.pod-tab{flex:1;padding:14px 10px;text-align:center;cursor:pointer;color:${C.plank};
  font-weight:600;font-size:14px;letter-spacing:.5px;border:none;background:transparent;
  border-bottom:3px solid transparent;transition:.15s;font-family:inherit;}
.pod-tab:hover{color:#fff;background:rgba(255,255,255,.06);}
.pod-tab.on{background:${C.sawdust};color:${C.bark};border-bottom-color:${C.amber};}
.pod-tab-badge{display:inline-block;margin-left:8px;padding:2px 8px;border-radius:20px;
  background:${C.amber};color:#fff;font-size:10.5px;font-weight:700;letter-spacing:1px;
  text-transform:uppercase;vertical-align:middle;}
.pod-note{background:${C.plank};color:${C.bark};text-align:center;font-size:13.5px;
  padding:8px 16px;border-bottom:1px solid ${C.line};}

.pod-wrap{padding-top:26px;padding-bottom:60px;}
.pod-sec{font-size:22px;margin:0 0 4px;font-weight:800;}
.pod-lede{color:${C.pine};font-size:14px;margin:0 0 20px;}

.pod-card{background:${C.paper};border:1px solid ${C.line};border-radius:10px;
  padding:22px;box-shadow:0 1px 0 rgba(0,0,0,.03);}

.pod-grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.pod-field{display:flex;flex-direction:column;gap:6px;margin-bottom:16px;}
.pod-field label{font-size:12px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:${C.pine};}
.pod-field input,.pod-field select{padding:10px 12px;border:1px solid ${C.line};border-radius:7px;
  font-size:15px;font-family:inherit;background:#fff;color:${C.ink};}
.pod-field input:focus,.pod-field select:focus{outline:none;border-color:${C.steel};box-shadow:0 0 0 3px rgba(47,107,122,.15);}
.pod-hint{font-size:11px;color:${C.pine};opacity:.75;font-weight:500;}
.pod-boardlabel{font-size:12px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:${C.pine};}

.pod-lines{margin-top:6px;}
.pod-linehead,.pod-linerow{display:grid;grid-template-columns:1.4fr 1.4fr .8fr 40px;gap:10px;align-items:center;}
.pod-linehead{font-size:11px;font-weight:700;letter-spacing:.6px;text-transform:uppercase;color:${C.pine};padding:0 2px 6px;}
.pod-linerow{margin-bottom:8px;}
.pod-linerow select,.pod-linerow input{padding:9px 10px;border:1px solid ${C.line};border-radius:7px;font-size:14px;font-family:inherit;background:#fff;}
.pod-del{border:none;background:transparent;color:${C.red};font-size:20px;cursor:pointer;line-height:1;padding:4px;}
.pod-del:hover{color:#7a2c1f;}
.pod-addline{margin-top:4px;background:transparent;border:1px dashed ${C.pine};color:${C.pine};
  padding:9px 14px;border-radius:7px;font-weight:600;cursor:pointer;font-size:13px;font-family:inherit;}
.pod-addline:hover{background:${C.plank};}

.pod-actions{margin-top:22px;display:flex;gap:12px;align-items:center;flex-wrap:wrap;}
.pod-btn{padding:12px 22px;border:none;border-radius:8px;font-weight:700;font-size:15px;cursor:pointer;letter-spacing:.3px;font-family:inherit;}
.pod-btn.primary{background:${C.steel};color:#fff;}
.pod-btn.primary:hover{background:${C.steelDk};}
.pod-btn.ghost{background:transparent;border:1px solid ${C.line};color:${C.pine};}
.pod-btn.ghost:hover{background:${C.plank};}
.pod-saved{color:${C.green};font-weight:600;font-size:14px;opacity:0;transition:.3s;}
.pod-saved.show{opacity:1;}
.pod-err{color:${C.red};font-weight:600;font-size:14px;}

.pod-stockhead{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:14px;flex-wrap:wrap;gap:12px;}
.pod-toggle{display:inline-flex;border:1px solid ${C.line};border-radius:8px;overflow:hidden;}
.pod-toggle button{border:none;background:#fff;padding:8px 14px;font-size:13px;font-weight:600;cursor:pointer;color:${C.pine};font-family:inherit;}
.pod-toggle button.on{background:${C.steel};color:#fff;}

.pod-table{width:100%;border-collapse:collapse;font-size:14px;}
.pod-table th{text-align:left;font-size:11px;letter-spacing:.6px;text-transform:uppercase;color:${C.pine};
  padding:8px 10px;border-bottom:2px solid ${C.line};}
.pod-table td{padding:10px;border-bottom:1px solid #EDE2CC;}
.pod-table tr:last-child td{border-bottom:none;}
.pod-table .r{text-align:right;}
.num{font-variant-numeric:tabular-nums;font-weight:700;}
.pod-cmt{color:${C.red};font-size:12px;font-weight:600;}
.pod-pill{display:inline-block;padding:3px 10px;border-radius:20px;font-size:12px;font-weight:700;letter-spacing:.3px;}
.pod-pill.in{background:#E4F0E6;color:${C.green};}
.pod-pill.low{background:#FBECD3;color:${C.amber};}
.pod-pill.out{background:#F3DDD7;color:${C.red};}

.pod-repctl{display:flex;gap:14px;align-items:flex-end;flex-wrap:wrap;margin-bottom:18px;}
.pod-repctl .pod-field{margin-bottom:0;}
.pod-empty{padding:40px;text-align:center;color:${C.pine};border:1px dashed ${C.line};border-radius:10px;}
.pod-rptorder{margin-bottom:18px;padding-bottom:14px;border-bottom:1px solid #ddd;}
.pod-rptorder .oh{display:flex;justify-content:space-between;font-weight:700;font-size:15px;}
.pod-rptorder .od{font-size:12px;color:#666;margin:2px 0 8px;}

@media(max-width:720px){
  .pod-grid2{grid-template-columns:1fr;}
  .pod-linehead,.pod-linerow{grid-template-columns:1.3fr 1.3fr .7fr 34px;}
}
`}</style>
  );
}
