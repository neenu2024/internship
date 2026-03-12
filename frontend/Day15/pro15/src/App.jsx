import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import your Demo page which contains all the UI components
import Demo from "./components/pages/Demo";

// Optional: If you created a Navbar, import it here
// import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        {/* Navigation could go here if required by your internship mentor */}
        {/* <Navbar /> */}

        <main>
          <Routes>
            {/* 
               Day 15 Task: UI Component Library 
               We set the Demo page as the default home route 
            */}
            <Route path="/" element={<Demo />} />

            {/* 
               Example of other routes if you have them. 
               If a user goes to a page that doesn't exist, redirect to home.
            */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="py-6 text-center text-sm text-slate-500 border-t mt-10">
          <p>Internship Day 15: Reusable UI Component System</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;