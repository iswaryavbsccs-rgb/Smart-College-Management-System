import React, { useState } from "react";
import { motion } from "framer-motion";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Extract name from email → "iswarya.v@gmail.com" → "Iswarya V"
      const rawName = email.split("@")[0];
      const formatted = rawName
        .split(/[._]/)
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      onLogin(formatted, email);
    }, 1200);
  };

  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #1a0533 0%, #0d1b4b 40%, #0a2e2b 100%)",
      position: "relative", overflow: "hidden",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        input:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 100px rgba(168,85,247,0.08) inset !important;
          -webkit-text-fill-color: #fff !important;
        }
        @keyframes shine { 0%{left:-100%} 40%,100%{left:150%} }
        @keyframes float {
          0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)}
        }
      `}</style>

      {/* Orbs */}
      {[
        { w:300, h:300, bg:"rgba(168,85,247,0.35)", top:-80, left:-80, delay:"0s" },
        { w:220, h:220, bg:"rgba(20,184,166,0.3)",  bottom:-50, right:-50, delay:"1s" },
        { w:160, h:160, bg:"rgba(245,158,11,0.2)",  top:"40%", right:80, delay:"2s" },
      ].map((o,i) => (
        <div key={i} style={{
          position:"absolute", width:o.w, height:o.h, borderRadius:"50%",
          background:o.bg, filter:"blur(60px)",
          top:o.top, left:o.left, bottom:o.bottom, right:o.right,
          animation:`float 6s ease-in-out ${o.delay} infinite`,
          pointerEvents:"none",
        }}/>
      ))}

      {/* Card */}
      <motion.div
        initial={{ opacity:0, y:30, scale:0.95 }}
        animate={{ opacity:1, y:0, scale:1 }}
        transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}
        style={{
          position:"relative", zIndex:1,
          background:"rgba(255,255,255,0.06)",
          border:"1px solid rgba(255,255,255,0.15)",
          backdropFilter:"blur(24px)", WebkitBackdropFilter:"blur(24px)",
          borderRadius:24, padding:"40px 36px", width:360,
          boxShadow:"0 8px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Brand */}
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:28 }}>
          <div style={{
            width:36, height:36,
            background:"linear-gradient(135deg,#a855f7,#14b8a6)",
            borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center",
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2L15.5 5.75V12.25L9 16L2.5 12.25V5.75L9 2Z" fill="white" opacity="0.9"/>
            </svg>
          </div>
          <span style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:700, color:"#fff" }}>
            Smart College
          </span>
        </div>

        <p style={{ fontFamily:"'Syne',sans-serif", fontSize:26, fontWeight:700, color:"#fff", margin:"0 0 4px", letterSpacing:-0.5 }}>
          Welcome back
        </p>
        <p style={{ fontSize:13, color:"rgba(255,255,255,0.45)", margin:"0 0 28px" }}>
          Sign in to your student account
        </p>

        {/* Error */}
        {error && (
          <motion.div initial={{ opacity:0, y:-6 }} animate={{ opacity:1, y:0 }}
            style={{ background:"rgba(236,72,153,0.15)", border:"1px solid rgba(236,72,153,0.3)",
              borderRadius:10, padding:"9px 14px", marginBottom:14,
              fontSize:12, color:"#f472b6" }}>
            {error}
          </motion.div>
        )}

        {/* Email */}
        <div style={{ marginBottom:14 }}>
          <label style={{ display:"block", fontSize:11, fontWeight:500, letterSpacing:"0.8px",
            textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:6 }}>Email</label>
          <div style={{ position:"relative" }}>
            <svg style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)",
              width:15, height:15, color:"rgba(255,255,255,0.3)", pointerEvents:"none" }}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <input type="email" placeholder="you@example.com" value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              style={{
                width:"100%", background:"rgba(255,255,255,0.07)",
                border:"1px solid rgba(255,255,255,0.12)", borderRadius:12,
                padding:"12px 14px 12px 40px", color:"#fff", fontSize:14,
                fontFamily:"'DM Sans',sans-serif", outline:"none",
              }}
              onFocus={e=>{ e.target.style.borderColor="rgba(168,85,247,0.6)"; e.target.style.background="rgba(168,85,247,0.08)"; }}
              onBlur={e=>{ e.target.style.borderColor="rgba(255,255,255,0.12)"; e.target.style.background="rgba(255,255,255,0.07)"; }}
            />
          </div>
        </div>

        {/* Password */}
        <div style={{ marginBottom:8 }}>
          <label style={{ display:"block", fontSize:11, fontWeight:500, letterSpacing:"0.8px",
            textTransform:"uppercase", color:"rgba(255,255,255,0.4)", marginBottom:6 }}>Password</label>
          <div style={{ position:"relative" }}>
            <svg style={{ position:"absolute", left:14, top:"50%", transform:"translateY(-50%)",
              width:15, height:15, color:"rgba(255,255,255,0.3)", pointerEvents:"none" }}
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <input type="password" placeholder="••••••••" value={password}
              onChange={e => setPassword(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleLogin()}
              style={{
                width:"100%", background:"rgba(255,255,255,0.07)",
                border:"1px solid rgba(255,255,255,0.12)", borderRadius:12,
                padding:"12px 14px 12px 40px", color:"#fff", fontSize:14,
                fontFamily:"'DM Sans',sans-serif", outline:"none",
              }}
              onFocus={e=>{ e.target.style.borderColor="rgba(168,85,247,0.6)"; e.target.style.background="rgba(168,85,247,0.08)"; }}
              onBlur={e=>{ e.target.style.borderColor="rgba(255,255,255,0.12)"; e.target.style.background="rgba(255,255,255,0.07)"; }}
            />
          </div>
        </div>

        <div style={{ textAlign:"right", marginBottom:22 }}>
          <span style={{ fontSize:12, color:"rgba(168,85,247,0.85)", cursor:"pointer" }}>
            Forgot password?
          </span>
        </div>

        {/* Button */}
        <motion.button whileHover={{ scale:1.02, y:-1 }} whileTap={{ scale:0.97 }}
          onClick={handleLogin} disabled={loading}
          style={{
            width:"100%", padding:"13px", borderRadius:12, border:"none",
            background:"linear-gradient(135deg,#a855f7 0%,#7c3aed 100%)",
            color:"#fff", fontFamily:"'Syne',sans-serif", fontSize:15, fontWeight:600,
            letterSpacing:"0.3px", cursor:"pointer", position:"relative", overflow:"hidden",
            boxShadow:"0 4px 20px rgba(168,85,247,0.4)", opacity:loading ? 0.8 : 1,
          }}>
          <span style={{
            position:"absolute", top:0, left:"-100%", width:"60%", height:"100%",
            background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)",
            animation:"shine 2.5s infinite",
          }}/>
          {loading ? "Signing in…" : "Login 🚀"}
        </motion.button>

        {/* Divider */}
        <div style={{ display:"flex", alignItems:"center", gap:10, margin:"18px 0" }}>
          <hr style={{ flex:1, border:"none", borderTop:"1px solid rgba(255,255,255,0.1)", margin:0 }}/>
          <span style={{ fontSize:11, color:"rgba(255,255,255,0.3)" }}>or continue with</span>
          <hr style={{ flex:1, border:"none", borderTop:"1px solid rgba(255,255,255,0.1)", margin:0 }}/>
        </div>

        {/* Social */}
        <div style={{ display:"flex", gap:10 }}>
          {[
            { label:"Google", icon:<svg width="14" height="14" viewBox="0 0 24 24"><path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg> },
            { label:"GitHub",  icon:<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg> },
          ].map(({ label, icon }) => (
            <motion.button key={label} whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }}
              style={{ flex:1, padding:"10px", borderRadius:10,
                border:"1px solid rgba(255,255,255,0.12)",
                background:"rgba(255,255,255,0.05)", color:"rgba(255,255,255,0.7)",
                fontSize:12, fontFamily:"'DM Sans',sans-serif", cursor:"pointer",
                display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
              {icon} {label}
            </motion.button>
          ))}
        </div>

        <p style={{ textAlign:"center", marginTop:18, fontSize:12, color:"rgba(255,255,255,0.35)" }}>
          Don't have an account?{" "}
          <span style={{ color:"#a855f7", cursor:"pointer" }}>Sign up</span>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;