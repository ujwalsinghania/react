import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardHome from './pages/DashboardHome';

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {!isLoggedIn ? (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <DashboardHome onLogout={() => setIsLoggedIn(false)} />
      )}
    </div>
  );
}

export default App;
