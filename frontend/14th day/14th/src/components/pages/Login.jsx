import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.email.includes("@")) tempErrors.email = "Please enter a valid email";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-50">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-black text-center mb-2 text-slate-900">Sign In</h2>
        <p className="text-slate-500 text-center mb-8 font-medium">Welcome back to JobPortal</p>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <Input 
            label="Email Address" 
            placeholder="name@gmail.com" 
            error={errors.email}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="••••••••" 
            error={errors.password}
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <Button type="submit" className="w-full" size="lg" isLoading={loading}>
            Sign In
          </Button>
        </form>
        <p className="text-center mt-6 text-sm text-slate-500 font-medium">
          Don't have an account? <Link to="/register" className="text-blue-600 font-bold hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}