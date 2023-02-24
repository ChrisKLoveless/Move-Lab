import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
