// react
import { useState } from 'react';

export const useLogin = (onLogin: () => void) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin();
    }, 1000);
  };

  return { loading, handleLogin };
};
