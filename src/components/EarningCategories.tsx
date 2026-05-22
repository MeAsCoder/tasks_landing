const categories = [
  { icon:"📋", title:"Paid Surveys", desc:"Share your opinion on products & brands. Each survey takes 3–10 minutes and pays well.", pay:"$10–$50", per:"per survey", featured:false, accent:"rgba(99,102,241,0.18)", border:"rgba(99,102,241,0.25)" },
  { icon:"🤖", title:"AI Training Tasks", desc:"Help train AI models by labeling data, reviewing AI outputs, and rating responses.", pay:"$20–$80", per:"per task", featured:true, accent:"rgba(0,166,81,0.15)", border:"rgba(0,166,81,0.35)" },
  { icon:"🏷️", title:"Data Annotation", desc:"Tag images, transcribe audio, classify text and more. Perfect for earning consistently.", pay:"$15–$60", per:"per job", featured:false, accent:"rgba(245,166,35,0.12)", border:"rgba(245,166,35,0.25)" },
  { icon:"🎯", title:"Product Testing", desc:"Test new apps and websites. Give structured feedback and get rewarded generously.", pay:"$100–$120", per:"per test", featured:false, accent:"rgba(168,85,247,0.12)", border:"rgba(168,85,247,0.22)" },
];

export default function EarningCategories() {
  return (
    <section className="section-pad bg-dark-2">
      <div className="container-xl">
        <div className="section-header text-center">
          <div className="badge badge-gold mb-4" style={{ marginBottom:14 }}>Ways to Earn</div>
          <h2 className="section-h2">
            Multiple Income Streams,{" "}
            <span className="text-gradient-gold">One App</span>
          </h2>
          <p className="section-sub">Choose tasks that match your schedule and skills. New jobs are added every hour so you&apos;re never stuck waiting.</p>
        </div>

        <div className="grid-4">
          {categories.map(cat => (
            <div key={cat.title} className="glass-card" style={{ padding:24, background:`rgba(255,255,255,0.04)`, borderColor:cat.border, position:"relative" }}>
              {cat.featured && (
                <div style={{ position:"absolute", top:-12, left:"50%", transform:"translateX(-50%)", background:"#00A651", color:"#fff", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:11, padding:"4px 12px", borderRadius:999, whiteSpace:"nowrap" }}>
                  🔥 Most Popular
                </div>
              )}
              <div style={{ fontSize:32, marginBottom:14 }}>{cat.icon}</div>
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:17, color:"#fff", marginBottom:8 }}>{cat.title}</div>
              <p style={{ color:"rgba(255,255,255,0.52)", fontSize:13, lineHeight:1.6, marginBottom:16 }}>{cat.desc}</p>
              <div style={{ borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:14 }}>
                <span style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:20, color:"#F5A623" }}>{cat.pay}</span>
                <span style={{ color:"rgba(255,255,255,0.38)", fontSize:12, marginLeft:6 }}>{cat.per}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
