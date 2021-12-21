import React from "react";
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';

import { Sidebar } from "./components/Sidebar";
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}
