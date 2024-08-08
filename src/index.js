import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App';
import './index.css';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <Router>
        <GoogleOAuthProvider clientId={ process.env.REACT_APP_GOOGLE_API_TOKEN}>
            <App />
        </GoogleOAuthProvider>
    </Router>
);
