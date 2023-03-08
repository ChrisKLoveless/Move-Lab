import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchMuscle from "./SearchMuscle";
import Header from './Header';
import Home from './Home';
import SearchType from './SearchType';
import SearchDemo from './SearchDemo';
import Banner from './Banner';

function App() {
  return (
    <Router>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/muscle" element={<SearchMuscle />} />
        <Route path="/category" element={<SearchType />} />
        <Route path="/demo" element={<SearchDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
