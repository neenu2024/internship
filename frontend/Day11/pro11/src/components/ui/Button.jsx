import React from 'react';

export const Button = ({ variant = 'primary', size = 'md', className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all cursor-pointer";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props} 
    />
  );
};