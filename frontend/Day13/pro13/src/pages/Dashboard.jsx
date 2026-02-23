import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/Button";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="p-6 lg:p-12 max-w-7xl mx-auto page-fade">
      {/* Header Widget */}
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
        <div className="flex items-center gap-6 text-center md:text-left">
          <div className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-emerald-400 rounded-full p-1 shadow-inner">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center overflow-hidden">
               <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Hello, Alex! 👋</h1>
            <p className="text-slate-500 font-medium">You have 3 new interview invitations.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" onClick={handleLogout} className="px-6 rounded-xl">Logout</Button>
          <Button className="px-6 rounded-xl shadow-md">Edit Profile</Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard title="Applications" value="48" icon="📁" color="bg-blue-50" textColor="text-blue-600" />
        <StatCard title="Shortlisted" value="12" icon="✨" color="bg-emerald-50" textColor="text-emerald-600" />
        <StatCard title="Profile Views" value="1.2k" icon="👁️" color="bg-purple-50" textColor="text-purple-600" />
        <StatCard title="Invitations" value="03" icon="💌" color="bg-amber-50" textColor="text-amber-600" />
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm">
        <h3 className="text-xl font-bold mb-6">Recent Applications</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl border border-transparent hover:border-slate-100 transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center font-bold text-slate-400">CO</div>
                <div>
                  <h4 className="font-bold text-slate-800">Senior React Developer</h4>
                  <p className="text-sm text-slate-500">Google • Applied 2 days ago</p>
                </div>
              </div>
              <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase">Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Reusable Stat Card Component
function StatCard({ title, value, icon, color, textColor }) {
  return (
    <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className={`${color} ${textColor} w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-4`}>
        {icon}
      </div>
      <h4 className="text-slate-500 text-sm font-bold uppercase tracking-wider">{title}</h4>
      <p className="text-3xl font-black text-slate-900 mt-1">{value}</p>
    </div>
  );
}