import React, { useState } from 'react';

export const Input = ({ label, error, type = "text", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full space-y-1.5 text-left">
      <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
      <div className="relative">
        <input 
          type={isPassword && showPassword ? "text" : type}
          className={`w-full p-3.5 bg-slate-50 border ${error ? 'border-red-500' : 'border-slate-200'} rounded-xl outline-none focus:ring-2 focus:ring-blue-500 transition-all`}
          {...props}
        />
        {isPassword && (
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 font-bold text-xs uppercase cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs font-bold ml-1">{error}</p>}
    </div>
  );
};