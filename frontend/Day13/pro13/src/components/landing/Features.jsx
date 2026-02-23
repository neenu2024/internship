const features = [
  { title: "AI Job Matching", desc: "Get recommended roles based on your tech stack.", icon: "🤖" },
  { title: "Direct Chat", desc: "Talk directly to hiring managers.", icon: "💬" },
  { title: "Instant Alerts", desc: "Never miss an opportunity.", icon: "🔔" },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why use our platform?</h2>
          <p className="text-slate-600">Built by developers, for developers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-green p-8 rounded-xl shadow-sm">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}