import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../ui/Button";

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="p-10 max-w-7xl mx-auto">
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black">My Dashboard</h1>
        <Button variant="outline" onClick={() => { localStorage.removeItem("isAuthenticated"); navigate("/login"); }}>Logout</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-600 p-8 rounded-3xl text-white shadow-lg">
          <h3 className="font-bold opacity-70">Jobs Applied</h3>
          <p className="text-5xl font-black mt-2">12</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="font-bold text-slate-400">Interviews</h3>
          <p className="text-5xl font-black mt-2">03</p>
        </div>
      </div>
    </div>
  );
}