// react
import { useState } from 'react';

// components
import LoginPage from './Pages/LoginPage';
import DashboardHome from './Pages/DashboardHome';

export const App = () => {
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
};

export default App;
