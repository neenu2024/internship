import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/Button";

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 page-fade">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-50 to-transparent -z-10"></div>
      
      <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white w-full max-w-md relative overflow-hidden">
        {/* Decorative Circle */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 mx-auto">
            <span className="text-white text-2xl font-bold">J</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-2">Welcome Back</h2>
          <p className="text-slate-500 text-center mb-8">Ready for your next career move?</p>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
              <input type="email" placeholder="name@company.com" className="w-full mt-1.5 p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" required />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
              <input type="password" placeholder="••••••••" className="w-full mt-1.5 p-3.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all" required />
            </div>
            <Button type="submit" className="w-full shadow-lg shadow-blue-200 py-4 text-lg font-bold" size="lg">Sign In</Button>
          </form>
          
          <p className="mt-8 text-center text-slate-500 text-sm">
            Don't have an account? <span className="text-blue-600 font-bold cursor-pointer hover:underline">Join free</span>
          </p>
        </div>
      </div>
    </div>
  );
}