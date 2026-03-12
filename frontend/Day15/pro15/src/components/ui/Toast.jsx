import React, { useEffect } from 'react';

const Toast = ({ message, type = 'success', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const styles = {
    success: "bg-green-600",
    error: "bg-red-600",
    info: "bg-blue-600",
  };

  return (
    <div className={`fixed bottom-5 right-5 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 animate-bounce ${styles[type]}`}>
      <span>{message}</span>
      <button onClick={onClose} className="font-bold">&times;</button>
    </div>
  );
};

export default Toast;