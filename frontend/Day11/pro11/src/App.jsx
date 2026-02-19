import React from 'react';
import Hero from "./components/landing/Hero"; 
import Features from "./components/landing/Features";
import { Button } from "./components/ui/Button";

function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <nav className="h-20 border-b flex items-center justify-between px-10 bg-white sticky top-0 z-50">
        <div className="text-2xl font-bold text-blue-600">Job Openings Available</div>
        <div className="flex gap-4">
          <Button variant="outline" size="sm">Login</Button>
          <Button size="sm">Join Now</Button>
        </div>
      </nav>
      <Hero />
      <Features />
    </main>
  );
}

export default App;