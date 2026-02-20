import React, { useState } from 'react';
import { Button } from "../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-100 border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-2xl font-bold text-blue-600">JobPortal</div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-blue-600">Find Jobs</a>
            <Button variant="outline" size="sm">Login</Button>
            <Button size="sm">Join Now</Button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} /> : <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-yellow border-b px-4 py-4 space-y-4">
          <a href="#" className="block text-slate-600">Find Jobs</a>
          <Button className="w-full">Join Now</Button>
        </div>
      )}
    </nav>
  );
}