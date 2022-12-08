import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import { BrowserRouter } from "react-router-dom";
import { FlowerProvider } from "./Components/FlowerContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <FlowerProvider>
        <App />
      </FlowerProvider>
     </BrowserRouter>
  </React.StrictMode>
);
