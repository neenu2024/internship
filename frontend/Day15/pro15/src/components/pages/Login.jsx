import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formData.email.includes("@")) return setErrors({email: "Invalid email"});
    
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      setLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-black text-center mb-8">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <Input label="Email" placeholder="user@gmail.com" value={formData.email} error={errors.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} />
          <Input label="Password" type="password" placeholder="••••••••" value={formData.password} onChange={(e)=>setFormData({...formData, password: e.target.value})} />
          <Button type="submit" className="w-full" size="lg" isLoading={loading}>Login</Button>
        </form>
        <p className="mt-6 text-center text-sm">New? <Link to="/register" className="text-blue-600 font-bold">Register</Link></p>
      </div>
    </div>
  );
}