import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchExercise from "./SearchExercise"
import Header from './Header';
import WorkoutControl from './WorkoutControl';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<WorkoutControl />} />
        <Route path="/exercise-search" element={<SearchExercise />} />
      </Routes>
    </Router>
  );
}

export default App;
