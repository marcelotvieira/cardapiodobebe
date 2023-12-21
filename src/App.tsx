import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CardapioDobebe from './pages/CardapioDoBebe';


export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/cardapiodobebe" element={<CardapioDobebe />} />
          <Route path="/" element={<CardapioDobebe />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}
