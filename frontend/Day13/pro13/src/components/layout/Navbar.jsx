import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // This hook only works because Navbar is inside <Router> in App.jsx

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-black text-blue-600">JobPortal</Link>

        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`font-bold ${location.pathname === '/' ? 'text-blue-600' : 'text-slate-500'}`}>Home</Link>
          <Link to="/dashboard" className={`font-bold ${location.pathname === '/dashboard' ? 'text-blue-600' : 'text-slate-500'}`}>Dashboard</Link>
          <Link to="/login">
            <Button variant="outline" size="sm">Login</Button>
          </Link>
        </div>
        
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white p-6 border-b flex flex-col gap-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </nav>
  );
}