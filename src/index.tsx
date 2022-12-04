import React from "react";
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';

const container = document.getElementById('root') as Element;
const root = createRoot(container);
root.render(<App />);