import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
/* Vi implementerar Router */
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/* Vi omsluter Browserrouter runt de komponenter som kommer utnyttja
        routing */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
