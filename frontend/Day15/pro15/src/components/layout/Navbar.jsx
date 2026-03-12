import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "../ui/Button";

export default function Navbar() {
  return (
    <nav className="h-20 bg-white border-b flex items-center px-10 justify-between sticky top-0 z-50">
      <Link to="/" className="text-2xl font-black text-blue-600">JobPortal</Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="font-bold text-slate-500">Home</Link>
        <Link to="/ui-demo" className="font-bold text-slate-500">UI Kit</Link>
        <Link to="/login"><Button variant="outline" size="sm">Login</Button></Link>
      </div>
    </nav>
  );
}