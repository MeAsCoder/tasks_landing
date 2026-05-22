export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:30, height:30, borderRadius:8, background:"linear-gradient(135deg,#00A651,#007A3D)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:11, color:"#fff" }}>PS</span>
        </div>
        <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:14, color:"#fff" }}>
          Paid Surveys <span style={{ color:"#F5A623" }}>to Mpesa</span>
        </span>
      </div>
      <p style={{ color:"rgba(255,255,255,0.3)", fontSize:13 }}>© {new Date().getFullYear()} Paid Surveys to Mpesa. Designed for Kenyan earners.</p>
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}
