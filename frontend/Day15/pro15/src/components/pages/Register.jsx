import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.includes("@")) tempErrors.email = "Valid email required";
    if (formData.password.length < 6) tempErrors.password = "Min. 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-slate-50">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-slate-100">
        <h2 className="text-3xl font-black text-center mb-8 text-slate-900">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input label="Full Name" placeholder="Alex John" error={errors.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
          <Input label="Email" type="email" placeholder="alex@gmail.com" error={errors.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
          <Input label="Password" type="password" placeholder="••••••••" error={errors.password} onChange={(e) => setFormData({...formData, password: e.target.value})} />
          <Button type="submit" className="w-full" size="lg" isLoading={loading}>Join JobPortal</Button>
        </form>
        <p className="text-center mt-6 text-sm text-slate-500">
          Already a member? <Link to="/login" className="text-blue-600 font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
}