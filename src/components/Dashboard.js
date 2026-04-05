import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TIMETABLE = {
  Monday:    [{ time:"9:00 AM",  sub:"Operating Systems",   room:"Lab 3",    dot:"#a855f7" },{ time:"11:00 AM", sub:"Data Structures",    room:"Room 204", dot:"#06b6d4" },{ time:"2:00 PM",  sub:"Web Technologies",   room:"Room 101", dot:"#10b981" },{ time:"4:00 PM",  sub:"Software Engineering", room:"Room 305", dot:"#ec4899" }],
  Tuesday:   [{ time:"9:00 AM",  sub:"Computer Networks",   room:"Lab 1",    dot:"#f59e0b" },{ time:"11:00 AM", sub:"Database Systems",   room:"Room 202", dot:"#a855f7" },{ time:"2:00 PM",  sub:"Mathematics",         room:"Room 110", dot:"#06b6d4" }],
  Wednesday: [{ time:"10:00 AM", sub:"Web Technologies",    room:"Lab 2",    dot:"#10b981" },{ time:"12:00 PM", sub:"Operating Systems",  room:"Room 204", dot:"#a855f7" },{ time:"3:00 PM",  sub:"Software Engineering", room:"Room 305", dot:"#ec4899" }],
  Thursday:  [{ time:"9:00 AM",  sub:"Data Structures",     room:"Lab 3",    dot:"#06b6d4" },{ time:"11:00 AM", sub:"Computer Networks",  room:"Room 202", dot:"#f59e0b" },{ time:"2:00 PM",  sub:"Database Systems",    room:"Room 110", dot:"#a855f7" }],
  Friday:    [{ time:"9:00 AM",  sub:"Mathematics",         room:"Room 101", dot:"#10b981" },{ time:"11:00 AM", sub:"Web Technologies",   room:"Lab 2",    dot:"#06b6d4" },{ time:"2:00 PM",  sub:"Project Work",        room:"Lab 4",    dot:"#ec4899" },{ time:"4:00 PM", sub:"Soft Skills", room:"Seminar", dot:"#f59e0b" }],
};

const NOTES = [
  { id:1, sub:"Data Structures",     topic:"Binary Trees & Traversals",  size:"2.4 MB", date:"Apr 2",  type:"PDF", color:"#a855f7" },
  { id:2, sub:"Operating Systems",   topic:"Process Scheduling",          size:"1.8 MB", date:"Apr 1",  type:"PDF", color:"#06b6d4" },
  { id:3, sub:"Web Technologies",    topic:"React Hooks Deep Dive",       size:"3.1 MB", date:"Mar 30", type:"PDF", color:"#10b981" },
  { id:4, sub:"Database Systems",    topic:"Normalization — 1NF to 3NF", size:"1.2 MB", date:"Mar 28", type:"PDF", color:"#f59e0b" },
  { id:5, sub:"Computer Networks",   topic:"OSI Model & TCP/IP",          size:"2.7 MB", date:"Mar 25", type:"PDF", color:"#ec4899" },
  { id:6, sub:"Software Engineering",topic:"SDLC Models",                 size:"1.5 MB", date:"Mar 20", type:"PDF", color:"#a855f7" },
];

const INIT_ASSIGNMENTS = [
  { id:1, sub:"Operating Systems",    title:"OS Project — Shell Simulator",  due:"Apr 8",  status:"pending",   priority:"high",   color:"#a855f7" },
  { id:2, sub:"Data Structures",      title:"BST Implementation in C++",      due:"Apr 10", status:"pending",   priority:"medium", color:"#06b6d4" },
  { id:3, sub:"Web Technologies",     title:"React Portfolio Website",         due:"Apr 15", status:"ongoing",   priority:"high",   color:"#10b981" },
  { id:4, sub:"Database Systems",     title:"ER Diagram — Hospital Mgmt",     due:"Mar 30", status:"submitted", priority:"low",    color:"#f59e0b" },
  { id:5, sub:"Computer Networks",    title:"Network Topology Report",         due:"Mar 25", status:"submitted", priority:"low",    color:"#ec4899" },
];

const NOTICES = [
  { id:1, text:"Internal exam schedule released for April batch", time:"2 hours ago", dot:"#a855f7" },
  { id:2, text:"Hackathon registration open — deadline Apr 10",   time:"Yesterday",   dot:"#06b6d4" },
  { id:3, text:"Library extended hours: 8am–9pm this week",       time:"2 days ago",  dot:"#f59e0b" },
  { id:4, text:"UI/UX workshop by senior students — Sat 11am",    time:"3 days ago",  dot:"#10b981" },
  { id:5, text:"Fee payment deadline: April 20",                   time:"4 days ago",  dot:"#ec4899" },
];

const SUBJECT_ATTENDANCE = [
  { sub:"Data Structures",    pct:90, color:"#a855f7" },
  { sub:"Operating Systems",  pct:80, color:"#06b6d4" },
  { sub:"Web Technologies",   pct:95, color:"#10b981" },
  { sub:"Database Systems",   pct:70, color:"#f59e0b" },
  { sub:"Computer Networks",  pct:85, color:"#ec4899" },
];

const days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];

const glass  = { background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.1)",  borderRadius:16 };
const glass2 = { background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.15)", borderRadius:12 };

const fade    = { hidden:{ opacity:0, y:16 }, show:{ opacity:1, y:0, transition:{ duration:0.4, ease:[0.22,1,0.36,1] } } };
const stagger = { hidden:{}, show:{ transition:{ staggerChildren:0.08 } } };

// ── Reusable stat card ────────────────────────────────────────────────────────
function StatCard({ label, value, bar, badge, grad, bg, badgeBg, badgeColor, icon, delay }) {
  return (
    <motion.div variants={fade} whileHover={{ y:-4 }}
      style={{ ...glass, padding:"18px 16px", position:"relative", overflow:"hidden", cursor:"default" }}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:grad, borderRadius:"16px 16px 0 0" }}/>
      <div style={{ width:36, height:36, borderRadius:10, background:bg,
        display:"flex", alignItems:"center", justifyContent:"center", marginBottom:12 }}>{icon}</div>
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:700, color:"#fff", marginBottom:2 }}>{value}</div>
      <div style={{ fontSize:11, color:"rgba(255,255,255,0.45)", letterSpacing:".5px", textTransform:"uppercase" }}>{label}</div>
      <div style={{ height:6, background:"rgba(255,255,255,0.1)", borderRadius:10, marginTop:8, overflow:"hidden" }}>
        <motion.div initial={{ width:0 }} animate={{ width:`${bar}%` }}
          transition={{ duration:1, delay:0.4 + (delay||0), ease:"easeOut" }}
          style={{ height:"100%", background:grad, borderRadius:10 }}/>
      </div>
      <div style={{ display:"inline-block", fontSize:10, padding:"2px 8px", borderRadius:20,
        marginTop:8, fontWeight:500, background:badgeBg, color:badgeColor }}>{badge}</div>
    </motion.div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function Dashboard({ user, onLogout }) {
  const [activeTab,     setActiveTab]     = useState("home");
  const [selectedDay,   setSelectedDay]   = useState("Monday");
  const [downloads,     setDownloads]     = useState([]);
  const [assignments,   setAssignments]   = useState(INIT_ASSIGNMENTS);
  const [toast,         setToast]         = useState(null);
  const [searchQ,       setSearchQ]       = useState("");
  const [filterStatus,  setFilterStatus]  = useState("all");
  const [attendance,    setAttendance]    = useState({ present:85, total:100 });

  // derive display name & initials from user prop
  const displayName = user?.name || "Student";
  const initials    = displayName.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2);
  const attendPct   = Math.round((attendance.present / attendance.total) * 100);

  const showToast = (msg, color = "#a855f7") => {
    setToast({ msg, color });
    setTimeout(() => setToast(null), 2800);
  };

  const handleDownload    = (note) => { setDownloads(d => [...d, note.id]); showToast(`Downloaded: ${note.topic}`, "#10b981"); };
  const handleStatusChange = (id, status) => { setAssignments(a => a.map(x => x.id === id ? { ...x, status } : x)); showToast(`Marked as ${status}`, "#06b6d4"); };
  const handleAttendance  = (type) => {
    setAttendance(a => ({ present: type==="present" ? a.present+1 : a.present, total: a.total+1 }));
    showToast(type==="present" ? "✓ Marked Present" : "✗ Marked Absent", type==="present" ? "#10b981" : "#ec4899");
  };

  const filteredAssign = assignments
    .filter(a => filterStatus==="all" || a.status===filterStatus)
    .filter(a => a.title.toLowerCase().includes(searchQ.toLowerCase()) || a.sub.toLowerCase().includes(searchQ.toLowerCase()));

  const stats = [
    {
      label:"Attendance", value:`${attendPct}%`, bar:attendPct,
      badge: attendPct >= 75 ? "On track" : "Low!",
      grad:"linear-gradient(90deg,#a855f7,#ec4899)", bg:"rgba(168,85,247,0.15)",
      badgeBg:"rgba(168,85,247,0.15)", badgeColor:"#c084fc",
      icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    },
    {
      label:"Subjects", value:"12", bar:72, badge:"8 completed",
      grad:"linear-gradient(90deg,#06b6d4,#3b82f6)", bg:"rgba(6,182,212,0.15)",
      badgeBg:"rgba(6,182,212,0.15)", badgeColor:"#22d3ee",
      icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
    },
    {
      label:"CGPA", value:"8.4", bar:84, badge:"Excellent",
      grad:"linear-gradient(90deg,#10b981,#06b6d4)", bg:"rgba(16,185,129,0.15)",
      badgeBg:"rgba(16,185,129,0.15)", badgeColor:"#34d399",
      icon:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    },
  ];

  const tabs = [
    { id:"home",        label:"Home" },
    { id:"timetable",   label:"Timetable" },
    { id:"notes",       label:"Notes" },
    { id:"assignments", label:"Assignments" },
    { id:"attendance",  label:"Attendance" },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(135deg,#0f0c29,#1a1040,#0d2b45)",
      fontFamily:"'DM Sans',sans-serif", boxSizing:"border-box" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing:border-box; }
        ::-webkit-scrollbar { width:4px; }
        ::-webkit-scrollbar-track { background:transparent; }
        ::-webkit-scrollbar-thumb { background:rgba(168,85,247,0.4); border-radius:4px; }
        input[type=date]::-webkit-calendar-picker-indicator { filter:invert(1) opacity(0.5); }
        input::placeholder { color:rgba(255,255,255,0.25); }
      `}</style>

      {/* ── Header ── */}
      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between",
        padding:"20px 24px 0", marginBottom:20 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:36, height:36, background:"linear-gradient(135deg,#a855f7,#06b6d4)",
            borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L15.5 5.75V12.25L9 16L2.5 12.25V5.75L9 2Z" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <div>
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:17, fontWeight:700, color:"#fff" }}>Smart College</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)" }}>Student Portal — 2nd Year CSc</div>
          </div>
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontSize:13, color:"#fff", fontWeight:500 }}>{displayName}</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)" }}>Gobi Arts & Science</div>
          </div>
          {/* Avatar — click to logout */}
          <motion.div whileHover={{ scale:1.08 }} whileTap={{ scale:0.95 }}
            onClick={onLogout} title="Click to logout"
            style={{ width:38, height:38, borderRadius:"50%",
              background:"linear-gradient(135deg,#a855f7,#ec4899)",
              display:"flex", alignItems:"center", justifyContent:"center",
              fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:700,
              color:"#fff", cursor:"pointer", userSelect:"none" }}>
            {initials}
          </motion.div>
        </div>
      </div>

      {/* ── Nav ── */}
      <div style={{ display:"flex", gap:6, padding:"0 24px", marginBottom:24, overflowX:"auto" }}>
        {tabs.map(t => (
          <motion.button key={t.id} whileTap={{ scale:0.95 }} onClick={() => setActiveTab(t.id)}
            style={{ padding:"8px 18px", borderRadius:20, border:"none", cursor:"pointer",
              fontSize:13, fontFamily:"'DM Sans',sans-serif", whiteSpace:"nowrap", fontWeight:500,
              background: activeTab===t.id ? "linear-gradient(135deg,#a855f7,#06b6d4)" : "rgba(255,255,255,0.07)",
              color: activeTab===t.id ? "#fff" : "rgba(255,255,255,0.55)",
              transition:"all .2s" }}>
            {t.label}
          </motion.button>
        ))}
      </div>

      {/* ── Content ── */}
      <div style={{ padding:"0 24px 60px" }}>
        <AnimatePresence mode="wait">

          {/* ══ HOME ══ */}
          {activeTab === "home" && (
            <motion.div key="home" initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
              transition={{ duration:0.35 }}>
              <motion.div variants={stagger} initial="hidden" animate="show"
                style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:20 }}>
                {stats.map((s,i) => <StatCard key={s.label} {...s} delay={i*0.1}/>)}
              </motion.div>

              <motion.div variants={stagger} initial="hidden" animate="show"
                style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14, marginBottom:20 }}>
                {[
                  { name:"Timetable",   desc:"4 classes today",                              tab:"timetable",   color:"#a855f7", bg:"rgba(168,85,247,0.15)" },
                  { name:"Study Notes", desc:`${NOTES.length} PDFs available`,               tab:"notes",       color:"#06b6d4", bg:"rgba(6,182,212,0.15)"  },
                  { name:"Assignments", desc:`${assignments.filter(a=>a.status==="pending").length} pending`, tab:"assignments", color:"#f59e0b", bg:"rgba(245,158,11,0.15)" },
                ].map(c => (
                  <motion.div key={c.name} variants={fade} whileHover={{ y:-4 }}
                    onClick={() => setActiveTab(c.tab)}
                    style={{ ...glass, padding:"20px 18px", cursor:"pointer" }}>
                    <div style={{ width:44, height:44, borderRadius:12, background:c.bg,
                      display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
                      <div style={{ width:20, height:20, borderRadius:"50%", background:c.color }}/>
                    </div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontSize:14, fontWeight:700, color:"#fff", marginBottom:4 }}>{c.name}</div>
                    <div style={{ fontSize:12, color:"rgba(255,255,255,0.45)", marginBottom:12 }}>{c.desc}</div>
                    <div style={{ fontSize:12, color:"rgba(255,255,255,0.5)", display:"flex", alignItems:"center", gap:4 }}>Open →</div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
                style={{ ...glass, padding:"20px 18px" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:700, color:"#fff", marginBottom:14 }}>Notices</div>
                {NOTICES.map((n,i) => (
                  <div key={n.id} style={{ display:"flex", gap:10, padding:"8px 0",
                    borderBottom: i<NOTICES.length-1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                    <div style={{ width:6, height:6, borderRadius:"50%", background:n.dot, marginTop:5, flexShrink:0 }}/>
                    <div>
                      <div style={{ fontSize:13, color:"rgba(255,255,255,0.75)", lineHeight:1.5 }}>{n.text}</div>
                      <div style={{ fontSize:11, color:"rgba(255,255,255,0.3)", marginTop:2 }}>{n.time}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ══ TIMETABLE ══ */}
          {activeTab === "timetable" && (
            <motion.div key="timetable" initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
              transition={{ duration:0.35 }}>
              <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap" }}>
                {days.map(d => (
                  <motion.button key={d} whileTap={{ scale:0.95 }} onClick={() => setSelectedDay(d)}
                    style={{ padding:"8px 16px", borderRadius:20, border:"none", cursor:"pointer",
                      fontSize:12, fontFamily:"'DM Sans',sans-serif", fontWeight:500,
                      background: selectedDay===d ? "linear-gradient(135deg,#a855f7,#06b6d4)" : "rgba(255,255,255,0.07)",
                      color: selectedDay===d ? "#fff" : "rgba(255,255,255,0.55)" }}>
                    {d}
                  </motion.button>
                ))}
              </div>

              <motion.div variants={stagger} initial="hidden" animate="show"
                style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {TIMETABLE[selectedDay].map((cls,i) => (
                  <motion.div key={i} variants={fade} whileHover={{ x:4 }}
                    style={{ ...glass, padding:"16px 20px", display:"flex", alignItems:"center", gap:14 }}>
                    <div style={{ width:4, height:48, borderRadius:4, background:cls.dot, flexShrink:0 }}/>
                    <div style={{ flex:1 }}>
                      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:14, fontWeight:700, color:"#fff" }}>{cls.sub}</div>
                      <div style={{ fontSize:12, color:"rgba(255,255,255,0.45)", marginTop:3 }}>{cls.room}</div>
                    </div>
                    <div style={{ ...glass2, padding:"6px 14px", fontSize:12, color:"rgba(255,255,255,0.7)" }}>{cls.time}</div>
                  </motion.div>
                ))}
              </motion.div>

              <div style={{ ...glass, padding:"16px 20px", marginTop:16,
                display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                <span style={{ fontSize:13, color:"rgba(255,255,255,0.5)" }}>
                  {TIMETABLE[selectedDay].length} classes on {selectedDay}
                </span>
                <motion.button whileTap={{ scale:0.95 }}
                  onClick={() => showToast(`${selectedDay}'s schedule exported!`, "#a855f7")}
                  style={{ padding:"8px 18px", borderRadius:10, border:"none", cursor:"pointer",
                    background:"linear-gradient(135deg,#a855f7,#06b6d4)", color:"#fff",
                    fontSize:12, fontFamily:"'DM Sans',sans-serif" }}>
                  Export Schedule
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* ══ NOTES ══ */}
          {activeTab === "notes" && (
            <motion.div key="notes" initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
              transition={{ duration:0.35 }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:18 }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontSize:15, fontWeight:700, color:"#fff" }}>Study Materials</span>
                <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>{downloads.length} downloaded</div>
              </div>

              <motion.div variants={stagger} initial="hidden" animate="show"
                style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:14 }}>
                {NOTES.map(n => (
                  <motion.div key={n.id} variants={fade} whileHover={{ y:-3 }}
                    style={{ ...glass, padding:"18px 16px" }}>
                    <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", marginBottom:12 }}>
                      <div style={{ width:40, height:40, borderRadius:10, background:`${n.color}22`,
                        display:"flex", alignItems:"center", justifyContent:"center" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={n.color} strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                          <polyline points="14 2 14 8 20 8"/>
                        </svg>
                      </div>
                      <span style={{ fontSize:10, padding:"2px 8px", borderRadius:12,
                        background:`${n.color}22`, color:n.color }}>{n.type}</span>
                    </div>
                    <div style={{ fontSize:13, fontWeight:500, color:"#fff", marginBottom:3 }}>{n.topic}</div>
                    <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", marginBottom:14 }}>
                      {n.sub} · {n.size} · {n.date}
                    </div>
                    <motion.button whileTap={{ scale:0.96 }} onClick={() => handleDownload(n)}
                      style={{ width:"100%", padding:"8px", borderRadius:8, border:"none", cursor:"pointer",
                        background: downloads.includes(n.id) ? "rgba(16,185,129,0.2)" : `${n.color}22`,
                        color: downloads.includes(n.id) ? "#34d399" : n.color,
                        fontSize:12, fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
                      {downloads.includes(n.id) ? "✓ Downloaded" : "Download PDF"}
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ══ ASSIGNMENTS ══ */}
          {activeTab === "assignments" && (
            <motion.div key="assignments" initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
              transition={{ duration:0.35 }}>
              <div style={{ display:"flex", gap:10, marginBottom:18, flexWrap:"wrap", alignItems:"center" }}>
                <input value={searchQ} onChange={e => setSearchQ(e.target.value)}
                  placeholder="Search assignments..."
                  style={{ flex:1, minWidth:160, padding:"8px 14px", borderRadius:10,
                    background:"rgba(255,255,255,0.07)", border:"1px solid rgba(255,255,255,0.1)",
                    color:"#fff", fontSize:13, fontFamily:"'DM Sans',sans-serif", outline:"none" }}/>
                {["all","pending","ongoing","submitted"].map(s => (
                  <motion.button key={s} whileTap={{ scale:0.95 }} onClick={() => setFilterStatus(s)}
                    style={{ padding:"7px 14px", borderRadius:20, border:"none", cursor:"pointer",
                      fontSize:12, fontFamily:"'DM Sans',sans-serif",
                      background: filterStatus===s ? "linear-gradient(135deg,#a855f7,#06b6d4)" : "rgba(255,255,255,0.07)",
                      color: filterStatus===s ? "#fff" : "rgba(255,255,255,0.5)" }}>
                    {s.charAt(0).toUpperCase()+s.slice(1)}
                  </motion.button>
                ))}
              </div>

              <motion.div variants={stagger} initial="hidden" animate="show"
                style={{ display:"flex", flexDirection:"column", gap:12 }}>
                {filteredAssign.length === 0 && (
                  <div style={{ textAlign:"center", padding:"40px 0", color:"rgba(255,255,255,0.3)", fontSize:14 }}>
                    No assignments found
                  </div>
                )}
                {filteredAssign.map(a => (
                  <motion.div key={a.id} variants={fade}
                    style={{ ...glass, padding:"18px 20px" }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                      <div>
                        <div style={{ fontFamily:"'Syne',sans-serif", fontSize:14, fontWeight:700, color:"#fff", marginBottom:3 }}>{a.title}</div>
                        <div style={{ fontSize:12, color:"rgba(255,255,255,0.4)" }}>{a.sub}</div>
                      </div>
                      <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:6 }}>
                        <span style={{ fontSize:10, padding:"2px 8px", borderRadius:12,
                          background: a.priority==="high" ? "rgba(236,72,153,0.2)" : a.priority==="medium" ? "rgba(245,158,11,0.2)" : "rgba(16,185,129,0.2)",
                          color:       a.priority==="high" ? "#ec4899"              : a.priority==="medium" ? "#f59e0b"              : "#34d399" }}>
                          {a.priority}
                        </span>
                        <span style={{ fontSize:11, color:"rgba(255,255,255,0.35)" }}>Due {a.due}</span>
                      </div>
                    </div>
                    <div style={{ display:"flex", gap:8, marginTop:12 }}>
                      {["pending","ongoing","submitted"].map(s => (
                        <motion.button key={s} whileTap={{ scale:0.95 }}
                          onClick={() => handleStatusChange(a.id, s)}
                          style={{ flex:1, padding:"7px", borderRadius:8, border:"none", cursor:"pointer",
                            fontSize:11, fontFamily:"'DM Sans',sans-serif",
                            background: a.status===s ? (s==="submitted"?"rgba(16,185,129,0.25)":s==="ongoing"?"rgba(6,182,212,0.25)":"rgba(168,85,247,0.25)") : "rgba(255,255,255,0.05)",
                            color:       a.status===s ? (s==="submitted"?"#34d399"              :s==="ongoing"?"#22d3ee"              :"#c084fc"              ) : "rgba(255,255,255,0.4)",
                            fontWeight:  a.status===s ? 500 : 400 }}>
                          {s.charAt(0).toUpperCase()+s.slice(1)}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* ══ ATTENDANCE ══ */}
          {activeTab === "attendance" && (
            <motion.div key="attendance" initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-16 }}
              transition={{ duration:0.35 }}>

              {/* Circle */}
              <div style={{ display:"flex", justifyContent:"center", marginBottom:24 }}>
                <div style={{ ...glass, padding:32, textAlign:"center" }}>
                  <svg width="140" height="140" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r="58" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10"/>
                    <motion.circle cx="70" cy="70" r="58" fill="none"
                      stroke="url(#attGrad)" strokeWidth="10" strokeLinecap="round"
                      strokeDasharray={`${2*Math.PI*58}`}
                      initial={{ strokeDashoffset: 2*Math.PI*58 }}
                      animate={{ strokeDashoffset: 2*Math.PI*58*(1 - attendPct/100) }}
                      transition={{ duration:1.2, ease:"easeOut" }}
                      style={{ transformOrigin:"center", transform:"rotate(-90deg)" }}/>
                    <defs>
                      <linearGradient id="attGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#a855f7"/><stop offset="100%" stopColor="#06b6d4"/>
                      </linearGradient>
                    </defs>
                    <text x="70" y="65" textAnchor="middle" fill="#fff"
                      style={{ fontFamily:"'Syne',sans-serif", fontSize:28, fontWeight:700 }}>{attendPct}%</text>
                    <text x="70" y="85" textAnchor="middle" fill="rgba(255,255,255,0.4)"
                      style={{ fontSize:11 }}>Attendance</text>
                  </svg>
                  <div style={{ fontSize:13, color:"rgba(255,255,255,0.5)", marginTop:8 }}>
                    {attendance.present} / {attendance.total} classes
                  </div>
                  <div style={{ marginTop:8, padding:"4px 12px", borderRadius:20, display:"inline-block",
                    background: attendPct>=75 ? "rgba(16,185,129,0.2)" : "rgba(236,72,153,0.2)",
                    color:      attendPct>=75 ? "#34d399"               : "#ec4899", fontSize:12 }}>
                    {attendPct>=75 ? "✓ Eligible" : "⚠ Low attendance"}
                  </div>
                </div>
              </div>

              {/* Mark */}
              <div style={{ ...glass, padding:"20px", marginBottom:16 }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:700, color:"#fff", marginBottom:14 }}>
                  Mark Today's Attendance
                </div>
                <div style={{ display:"flex", gap:10 }}>
                  <motion.button whileTap={{ scale:0.95 }} onClick={() => handleAttendance("present")}
                    style={{ flex:1, padding:"11px", borderRadius:10, border:"none", cursor:"pointer",
                      background:"rgba(16,185,129,0.2)", color:"#34d399",
                      fontSize:13, fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
                    ✓ Present
                  </motion.button>
                  <motion.button whileTap={{ scale:0.95 }} onClick={() => handleAttendance("absent")}
                    style={{ flex:1, padding:"11px", borderRadius:10, border:"none", cursor:"pointer",
                      background:"rgba(236,72,153,0.2)", color:"#ec4899",
                      fontSize:13, fontFamily:"'DM Sans',sans-serif", fontWeight:500 }}>
                    ✗ Absent
                  </motion.button>
                </div>
              </div>

              {/* Subject-wise */}
              <div style={{ ...glass, padding:"20px" }}>
                <div style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:700, color:"#fff", marginBottom:14 }}>
                  Subject-wise Attendance
                </div>
                {SUBJECT_ATTENDANCE.map((s,i) => (
                  <div key={i} style={{ marginBottom:14 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                      <span style={{ fontSize:13, color:"rgba(255,255,255,0.75)" }}>{s.sub}</span>
                      <span style={{ fontSize:12, color: s.pct>=75 ? "#34d399" : "#ec4899", fontWeight:500 }}>{s.pct}%</span>
                    </div>
                    <div style={{ height:6, background:"rgba(255,255,255,0.08)", borderRadius:6, overflow:"hidden" }}>
                      <motion.div initial={{ width:0 }} animate={{ width:`${s.pct}%` }}
                        transition={{ duration:0.9, delay:i*0.1, ease:"easeOut" }}
                        style={{ height:"100%", background:s.color, borderRadius:6 }}/>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* ── Toast ── */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity:0, y:20, x:"-50%" }} animate={{ opacity:1, y:0, x:"-50%" }}
            exit={{ opacity:0, y:20, x:"-50%" }}
            style={{ position:"fixed", bottom:28, left:"50%", zIndex:99,
              background:`${toast.color}22`, border:`1px solid ${toast.color}55`,
              backdropFilter:"blur(12px)", color:"#fff",
              padding:"10px 22px", borderRadius:20, fontSize:13, fontWeight:500,
              whiteSpace:"nowrap" }}>
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}