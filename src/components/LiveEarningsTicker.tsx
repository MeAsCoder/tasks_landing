const payments = [
  { name:"John M.", amount:"KES 2,200", task:"Survey", time:"2m ago" },
  { name:"Grace W.", amount:"KES 2,850", task:"AI Task", time:"4m ago" },
  { name:"Brian O.", amount:"KES 2,100", task:"Annotation", time:"7m ago" },
  { name:"Amina K.", amount:"KES 1,650", task:"Survey", time:"9m ago" },
  { name:"Peter N.", amount:"KES 1,750", task:"AI Task", time:"11m ago" },
  { name:"Faith A.", amount:"KES 3,920", task:"Survey", time:"14m ago" },
  { name:"David M.", amount:"KES 4,200", task:"Annotation", time:"17m ago" },
  { name:"Lydia C.", amount:"KES 5,480", task:"Survey", time:"21m ago" },
];

export default function LiveEarningsTicker() {
  const doubled = [...payments, ...payments];
  return (
    <div className="ticker-bar">
      <div className="ticker-track">
        {doubled.map((p, i) => (
          <span key={i} className="ticker-item">
            <span style={{ width:8, height:8, borderRadius:"50%", background:"#00A651", flexShrink:0, display:"inline-block" }} />
            <span style={{ color:"rgba(255,255,255,0.58)" }}>
              <span style={{ color:"#fff", fontWeight:600 }}>{p.name}</span>{" "}just earned{" "}
              <span style={{ color:"#F5A623", fontWeight:700 }}>{p.amount}</span>{" "}via {p.task}
            </span>
            <span style={{ color:"rgba(255,255,255,0.3)" }}>{p.time}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
