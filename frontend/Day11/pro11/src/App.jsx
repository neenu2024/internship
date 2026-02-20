import React from 'react';
import Navbar from "./components/layout/Navbar";
import Hero from "./components/landing/Hero";
import Features from "./components/landing/Features";
import JobGrid from "./components/jobs/JobGrid";
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <JobGrid />
        <Features />
      </main>
      <footer className="bg-slate-900 text-white py-12 text-center mt-20">
        <p className="opacity-60 text-sm">© 2026 JobPortal Project</p>
      </footer>
    </div>
  );
}

export default App;