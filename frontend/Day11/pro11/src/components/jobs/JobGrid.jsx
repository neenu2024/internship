import React from 'react';

const JOBS = [
  { id: 1, title: "Frontend Dev", co: "Google", type: "Full-time" },
  { id: 2, title: "UI Designer", co: "Figma", type: "Remote" },
  { id: 3, title: "Backend Dev", co: "Amazon", type: "Contract" },
];

export default function JobGrid() {
  return (
    <section className="py-16 px-6 bg-blue-100 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Latest Openings</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {JOBS.map((job) => (
          <div key={job.id} className="bg-blue-150 p-6 rounded-2xl border border-slate-400 hover:shadow-lg transition-all">
            <span className="text-xs font-bold text-blue-600 bg-yellow-200 px-2 py-1 rounded">{job.type}</span>
            <h3 className="text-xl font-bold mt-4">{job.title}</h3>
            <p className="text-slate-500 mb-4">{job.co}</p>
            <button className="text-blue-600 font-bold text-sm">Apply Now →</button>
          </div>
        ))}
      </div>
    </section>
  );
}