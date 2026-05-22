const faqs = [
  { q:"Is this app free to download?", a:"Yes, 100% free. No subscription fees, no hidden charges. You earn and we take a small platform commission only when you complete paid tasks." },
  { q:"How fast do I receive my Mpesa payment?", a:"Payments are processed instantly the moment you complete and submit a task. You should receive your Mpesa message within 30 seconds." },
  { q:"Is there a minimum withdrawal amount?", a:"No minimum at all. Even KES 50 can be sent straight to your Mpesa — no need to accumulate a large balance first." },
  { q:"Do I need any special skills?", a:"Most tasks require zero experience. Surveys just need your honest opinion. AI tasks come with clear instructions and take 5–20 minutes." },
  { q:"How many tasks are available daily?", a:"New tasks are added every hour. Most users find 10–30 tasks available at any given time depending on their profile and location." },
  { q:"Is my personal data safe?", a:"We follow strict data privacy standards. Your personal information is never sold. Survey responses are aggregated and anonymized." },
];

export default function TrustAndFAQ() {
  return (
    <section className="section-pad bg-dark divider-top">
      <div className="container-xl" style={{ maxWidth:740 }}>
        <div className="section-header text-center">
          <div className="badge mb-4" style={{ marginBottom:14 }}>Your Questions, Answered</div>
          <h2 className="section-h2">
            Frequently Asked{" "}
            <span className="text-gradient-green">Questions</span>
          </h2>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
          {faqs.map((f, i) => (
            <div key={i} className="faq-card">
              <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:15, color:"#fff", marginBottom:8 }}>{f.q}</div>
              <p style={{ color:"rgba(255,255,255,0.56)", fontSize:14, lineHeight:1.65 }}>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
