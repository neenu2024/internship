import React, { useState, useEffect } from 'react';
import { fetchJobs } from './api'; // This matches the file you already have

// Sub-Component for Job Card
const JobCard = ({ job }) => (
  <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-full">
    <div>
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-lg text-gray-800 leading-tight">{job.title}</h3>
        <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-2 py-1 rounded">
          {job.remote ? "Remote" : "Office"}
        </span>
      </div>
      <p className="text-blue-600 font-medium text-sm mb-1">{job.company_name}</p>
      <p className="text-gray-500 text-sm">📍 {job.location}</p>
    </div>
    
    <div className="mt-6 flex items-center justify-between">
      <div className="text-xs text-gray-400">
        Posted recently
      </div>
      <a 
        href={job.url} 
        target="_blank" 
        rel="noreferrer"
        className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
      >
        View Job
      </a>
    </div>
  </div>
);

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchJobs();
      setJobs(data);
      setLoading(false);
    };
    loadData();
  }, []);

  // Search/Filter Logic
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 py-4 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">J</div>
            <h1 className="text-xl font-bold tracking-tight">JobAxios</h1>
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Day 10 Project</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-white border-b border-slate-100 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Find your next challenge.</h2>
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search by role, company, or keywords..." 
              className="w-full px-6 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm text-lg"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-500 font-medium">Loading opportunities...</p>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-slate-800">
                Latest Openings <span className="ml-2 text-sm font-normal text-slate-400">({filteredJobs.length})</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job, index) => (
                  <JobCard key={index} job={job} />
                ))
              ) : (
                <div className="col-span-full bg-white p-12 rounded-3xl border border-dashed border-slate-300 text-center">
                  <p className="text-slate-400 text-lg">No jobs found matching your search.</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>Built with React + Axios + Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;