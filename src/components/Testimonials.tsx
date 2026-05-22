"use client";
import { useState, useEffect } from "react";

const testimonials = [
  { initials:"CM", name:"Caroline M.", role:"Stay-at-home mom", loc:"Nairobi", quote:"I complete surveys during my lunch break and after the kids sleep. Made KES 14,000 last month without leaving home!", amount:"KES 14,000", period:"last month" },
  { initials:"JO", name:"James O.", role:"University student", loc:"Mombasa", quote:"The AI annotation tasks pay really well. I fit them between classes and earn more than my part-time job ever paid.", amount:"KES 8,500", period:"this week" },
  { initials:"BW", name:"Beatrice W.", role:"Freelancer", loc:"Kisumu", quote:"Payments hit my Mpesa in seconds. No waiting days or reaching a minimum — I cashout KES 100 if I want to!", amount:"KES 22,000", period:"last month" },
  { initials:"SK", name:"Samuel K.", role:"Boda boda rider", loc:"Nakuru", quote:"During slow hours I just open the app and do surveys. Made KES 6,200 extra this week on top of my riding income.", amount:"KES 6,200", period:"this week" },
  { initials:"AN", name:"Aisha N.", role:"Teacher", loc:"Eldoret", quote:"I do AI annotation tasks after school. The instructions are clear and pay is fair. Best side income I have found in Kenya.", amount:"KES 11,500", period:"last month" },
  { initials:"RO", name:"Robert O.", role:"Shop owner", loc:"Kisumu", quote:"Between customers I complete quick surveys. KES 500 here, KES 300 there — it adds up to serious money by month end.", amount:"KES 9,800", period:"last month" },
  { initials:"FM", name:"Fatuma M.", role:"Nurse", loc:"Nairobi", quote:"Night shifts are quiet so I annotate data between rounds. Made KES 18,000 last month — pays my daughter's school fees!", amount:"KES 18,000", period:"last month" },
  { initials:"DW", name:"Daniel W.", role:"Recent graduate", loc:"Thika", quote:"Still job hunting but earning KES 12,000 a month from AI tasks keeps me afloat. The payout to Mpesa is genuinely instant.", amount:"KES 12,000", period:"last month" },
  { initials:"GN", name:"Grace N.", role:"Hair salon owner", loc:"Nairobi", quote:"I recommend it to all my clients while they are under the dryer! Some earn more from surveys than they spend on hair.", amount:"KES 7,400", period:"last month" },
  { initials:"PM", name:"Patrick M.", role:"Security guard", loc:"Mombasa", quote:"Night shifts used to be boring. Now I earn an extra KES 4,000–5,000 every week doing surveys and tasks on my phone.", amount:"KES 5,000", period:"this week" },
];

const VISIBLE = 3;
const INTERVAL = 4000;

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const totalPages = Math.ceil(testimonials.length / VISIBLE);

  const goToPage = (i: number) => {
    setAnimating(true);
    setTimeout(() => { setPage(i); setAnimating(false); }, 350);
  };

  useEffect(() => {
    const timer = setInterval(() => goToPage((page + 1) % totalPages), INTERVAL);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, totalPages]);

  const visible = testimonials.slice(page * VISIBLE, page * VISIBLE + VISIBLE);

  return (
    <section className="section-pad bg-dark-2 divider-top">
      <div className="container-xl">
        <div className="section-header text-center">
          <div className="badge badge-gold mb-4" style={{ marginBottom:14 }}>Real Earners</div>
          <h2 className="section-h2">
            Kenyans Earning{" "}
            <span className="text-gradient-gold">Every Day</span>
          </h2>
          <p className="section-sub">Join 100,000+ Kenyans who are supplementing their income one task at a time.</p>
        </div>

        <div
          className="grid-3"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(14px)" : "translateY(0)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          {visible.map(t => (
            <div key={t.name} className="testi-card">
              <div style={{ color:"#F5A623", fontSize:15, letterSpacing:2 }}>★★★★★</div>
              <p style={{ color:"rgba(255,255,255,0.72)", fontSize:14, lineHeight:1.7, fontStyle:"italic", flex:1 }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display:"flex", alignItems:"center", gap:12, borderTop:"1px solid rgba(255,255,255,0.07)", paddingTop:16 }}>
                <div style={{ width:40, height:40, borderRadius:"50%", background:"rgba(0,166,81,0.18)", border:"1px solid rgba(0,166,81,0.32)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:13, color:"#00A651", flexShrink:0 }}>
                  {t.initials}
                </div>
                <div style={{ flex:1 }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:14, color:"#fff" }}>{t.name}</div>
                  <div style={{ fontSize:12, color:"rgba(255,255,255,0.38)", marginTop:2 }}>{t.role} · {t.loc}</div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:14, color:"#F5A623" }}>{t.amount}</div>
                  <div style={{ fontSize:11, color:"rgba(255,255,255,0.35)" }}>{t.period}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div style={{ display:"flex", justifyContent:"center", gap:8, marginTop:36 }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              style={{
                width: i === page ? 24 : 8, height: 8, borderRadius: 999,
                background: i === page ? "#00A651" : "rgba(255,255,255,0.2)",
                border: "none", cursor: "pointer", padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>

        <p style={{ textAlign:"center", marginTop:12, fontSize:12, color:"rgba(255,255,255,0.28)", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          {page * VISIBLE + 1}–{Math.min(page * VISIBLE + VISIBLE, testimonials.length)} of {testimonials.length} earners
        </p>
      </div>
    </section>
  );
}