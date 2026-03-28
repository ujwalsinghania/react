// react
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// components
import App from './App/App';

const root = createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
