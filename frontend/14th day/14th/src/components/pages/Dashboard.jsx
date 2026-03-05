import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="p-8 lg:p-16 max-w-7xl mx-auto">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-black text-slate-900">User Dashboard</h1>
          <p className="text-slate-500 font-medium">Manage your profile and applications here.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleLogout} className="px-6 rounded-xl">
            Logout
          </Button>
          <Button className="px-6 rounded-xl shadow-md">
            Settings
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-lg">
          <h3 className="opacity-80 font-bold uppercase text-xs">Jobs Applied</h3>
          <p className="text-5xl font-black mt-2">12</p>
        </div>
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h3 className="text-slate-400 font-bold uppercase text-xs">Shortlisted</h3>
          <p className="text-5xl font-black text-slate-900 mt-2">04</p>
        </div>
        <div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
          <h3 className="text-slate-400 font-bold uppercase text-xs">Profile Views</h3>
          <p className="text-5xl font-black text-slate-900 mt-2">148</p>
        </div>
      </div>
    </div>
  );
}