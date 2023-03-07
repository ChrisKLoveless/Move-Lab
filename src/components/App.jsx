import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchMuscle from "./SearchMuscle";
import Header from './Header';
import WorkoutControl from './WorkoutControl';
import SearchType from './SearchType';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WorkoutControl />} />
        <Route path="/muscle" element={<SearchMuscle />} />
        <Route path="/category" element={<SearchType />} />
      </Routes>
    </Router>
  );
}

export default App;
