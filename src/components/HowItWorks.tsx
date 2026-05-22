const steps = [
  { n:"1", icon:"📲", title:"Download the App", desc:"Get Paid Surveys to Mpesa free from Google Play. Takes under 30 seconds to install." },
  { n:"2", icon:"✍️", title:"Create Your Profile", desc:"Sign up with your phone number and link your Mpesa. No bank account needed — just your SIM." },
  { n:"3", icon:"✅", title:"Complete Tasks", desc:"Pick surveys and AI tasks from your dashboard. Work anytime — morning, lunch, or late at night." },
  { n:"4", icon:"💚", title:"Receive Mpesa Instantly", desc:"Your earnings are sent directly to your Mpesa the moment you finish. No minimum withdrawal." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-dark divider-green-top">
      <div className="container-xl">
        <div className="section-header text-center">
          <div className="badge mb-4" style={{ marginBottom:14 }}>Simple Process</div>
          <h2 className="section-h2">
            From Download to{" "}
            <span className="text-gradient-green">Mpesa in Minutes</span>
          </h2>
          <p className="section-sub">No complicated onboarding. No approval wait. Start earning the same day you download.</p>
        </div>

        <div className="grid-4">
          {steps.map(s => (
            <div key={s.n} style={{ textAlign:"center" }}>
              <div style={{ position:"relative", display:"inline-flex", alignItems:"center", justifyContent:"center", width:80, height:80, marginBottom:20 }}>
                <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:"rgba(0,166,81,0.1)", border:"1px solid rgba(0,166,81,0.28)" }} />
                <span style={{ fontSize:30, position:"relative", zIndex:1 }}>{s.icon}</span>
                <div style={{ position:"absolute", top:-4, right:-4, width:22, height:22, borderRadius:"50%", background:"#00A651", color:"#fff", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:11, display:"flex", alignItems:"center", justifyContent:"center" }}>{s.n}</div>
              </div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:16, color:"#fff", marginBottom:8 }}>{s.title}</div>
              <p style={{ color:"rgba(255,255,255,0.52)", fontSize:13, lineHeight:1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
