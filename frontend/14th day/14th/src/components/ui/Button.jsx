import React from 'react';

export const Button = ({ variant = 'primary', size = 'md', isLoading = false, className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100",
    secondary: "bg-emerald-500 text-white hover:bg-emerald-600",
    outline: "border-2 border-slate-200 text-slate-600 hover:bg-slate-50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" viewBox="0 0 24 24"></svg>
          Processing...
        </span>
      ) : props.children}
    </button>
  );
};