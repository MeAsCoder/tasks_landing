import DownloadButton from "./DownloadButton";

export default function FinalCTA() {
  return (
    <section className="section-pad bg-dark-2 divider-top" style={{ textAlign:"center", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:500, height:300, background:"rgba(0,166,81,0.08)", filter:"blur(60px)", borderRadius:"50%", pointerEvents:"none" }} />
      <div className="container-xl" style={{ position:"relative" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:12, background:"rgba(0,166,81,0.1)", border:"1px solid rgba(0,166,81,0.28)", borderRadius:16, padding:"12px 20px", marginBottom:28 }}>
          <div className="mpesa-badge" style={{ width:36, height:36, borderRadius:10, flexShrink:0 }}>
            <span style={{ fontWeight:800, fontSize:14, color:"#fff" }}>M</span>
          </div>
          <span style={{ color:"rgba(255,255,255,0.8)", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500, fontSize:15 }}>
            Pays directly to{" "}
            <strong style={{ color:"#00A651" }}>your Mpesa</strong>
          </span>
        </div>

        <h2 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"clamp(28px,4vw,46px)", color:"#fff", lineHeight:1.15, marginBottom:16 }}>
          Your phone is a{" "}
          <span className="shimmer-text">money machine.</span>
          <br />
          Start using it.
        </h2>

        <p style={{ color:"rgba(255,255,255,0.58)", fontSize:17, maxWidth:460, margin:"0 auto 36px", lineHeight:1.65 }}>
          100,000+ Kenyans are already earning from surveys and AI tasks. There are tasks waiting for you right now.
        </p>

        <DownloadButton size="lg" />

        <div className="trust-row">
          <span>✓ Free to download</span>
          <span>✓ No minimum payout</span>
          <span>✓ Instant Mpesa</span>
          <span>✓ 4.7★ on Play Store</span>
        </div>
      </div>
    </section>
  );
}
