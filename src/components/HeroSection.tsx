import DownloadButton from "./DownloadButton";

const stats = [
  { value:"100K+", label:"Active Earners" },
  { value:"KES 2M+", label:"Paid This Month" },
  { value:"4.7★", label:"Play Store Rating" },
];

export default function HeroSection() {
  return (
    <section className="hero bg-mesh grid-lines">
      <div style={{ position:"absolute", top:"30%", left:"50%", transform:"translate(-50%,-50%)", width:600, height:600, borderRadius:"50%", background:"rgba(0,166,81,0.05)", filter:"blur(60px)", pointerEvents:"none" }} />
      <div className="container-xl">
        <div className="hero-grid">
          {/* LEFT */}
          <div>
            <div className="badge mb-5">
              <span className="badge-dot" />
              Now paying instantly to Mpesa
            </div>
            <h1 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(34px,5vw,58px)", lineHeight:1.1, marginBottom:16, color:"#fff" }}>
              Turn Your{" "}
              <span className="shimmer-text">Spare Time</span>
              <br />
              Into Real{" "}
              <span className="text-gradient-green">Mpesa Money</span>
            </h1>
            <p style={{ color:"rgba(255,255,255,0.62)", fontSize:17, lineHeight:1.7, marginBottom:32, maxWidth:480 }}>
              Complete paid surveys, AI training tasks & data annotation jobs from your phone.
              Earnings hit your Mpesa within seconds — no waiting, no cashout delays.
            </p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:16, marginBottom:32 }}>
              <DownloadButton size="lg" />
              <a href="#how-it-works" className="btn-ghost">
                How it works
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </a>
            </div>
            <div className="stats-row">
              {stats.map(s => (
                <div key={s.label}>
                  <div className="stat-val">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT - Phone */}
          <div style={{ display:"flex", justifyContent:"center" }}>
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div style={{ position:"relative", width:260 }}>
      <div className="phone-glow" />
      <div className="phone-outer">
        {/* Status bar */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 16px 4px", color:"rgba(255,255,255,0.35)", fontSize:11 }}>
          <span>9:41</span>
          <div style={{ width:80, height:14, background:"rgba(255,255,255,0.08)", borderRadius:8 }} />
          <span style={{ fontSize:10 }}>●●●</span>
        </div>
        {/* Screen */}
        <div className="phone-screen">
          {/* Header */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
            <div>
              <div style={{ fontSize:11, color:"rgba(255,255,255,0.42)" }}>Welcome back,</div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:14, color:"#fff", marginTop:2 }}>Brian 👋</div>
            </div>
            <div className="mpesa-badge" style={{ width:34, height:34, borderRadius:"50%" }}>
              <span style={{ fontWeight:800, fontSize:13, color:"#fff" }}>M</span>
            </div>
          </div>
          {/* Balance */}
          <div style={{ background:"linear-gradient(135deg,#00A651,#007A3D)", borderRadius:16, padding:"14px 16px", marginBottom:14 }}>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.65)", marginBottom:2 }}>Total Earned Today</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:28, color:"#fff" }}>KES 2,140</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,0.55)", marginTop:2 }}>+KES 850 in last hour ↑</div>
          </div>
          {/* Tasks */}
          <div style={{ fontSize:11, color:"rgba(255,255,255,0.4)", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:8 }}>Available Tasks</div>
          {[
            { name:"Samsung Survey", pay:"KES 2,120", meta:"5 min · Survey" },
            { name:"Image Annotation", pay:"KES 3,340", meta:"12 min · AI Task" },
            { name:"Voice Recording", pay:"KES 5,200", meta:"8 min · AI Task" },
          ].map(t => (
            <div key={t.name} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:12, padding:"10px 12px", marginBottom:6 }}>
              <div>
                <div style={{ fontSize:11, fontWeight:600, color:"#fff" }}>{t.name}</div>
                <div style={{ fontSize:10, color:"rgba(255,255,255,0.38)", marginTop:2 }}>{t.meta}</div>
              </div>
              <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:12, color:"#F5A623" }}>{t.pay}</span>
            </div>
          ))}
          {/* Notification */}
          <div className="notif-pop" style={{ marginTop:12, background:"rgba(0,166,81,0.15)", border:"1px solid rgba(0,166,81,0.32)", borderRadius:12, padding:"10px 12px", display:"flex", alignItems:"center", gap:10 }}>
            <div className="mpesa-badge" style={{ width:32, height:32, borderRadius:8, flexShrink:0 }}>
              <span style={{ fontWeight:800, fontSize:11, color:"#fff" }}>M</span>
            </div>
            <div>
              <div style={{ fontSize:11, fontWeight:700, color:"#fff" }}>Mpesa Received! 💸</div>
              <div style={{ fontSize:11, fontWeight:800, color:"#F5A623" }}>KES 10,850 sent to your phone</div>
            </div>
          </div>
        </div>
      </div>
      <div className="phone-float-badge">Instant Payout ⚡</div>
    </div>
  );
}
