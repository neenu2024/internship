import React from 'react';

// 1. ADD 'export default' HERE
export default function JobGrid() {
  const JOBS = [
    { id: 1, title: "Frontend Developer", company: "Google", type: "Full-time" },
    { id: 2, title: "UI Designer", company: "Figma", type: "Remote" },
    { id: 3, title: "Backend Engineer", company: "Amazon", type: "Contract" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-black mb-8 text-slate-900">Featured Jobs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {JOBS.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {job.type}
            </span>
            <h3 className="text-xl font-bold mt-4">{job.title}</h3>
            <p className="text-slate-500 mb-4">{job.company}</p>
            <button className="text-blue-600 font-bold text-sm">Apply Now →</button>
          </div>
        ))}
      </div>
    </section>
  );
}