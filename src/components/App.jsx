import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Header from './Header';
import WorkoutPlanner from './WorkoutPlanner';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout-planner" element={<WorkoutPlanner />} />
      </Routes>
    </Router>
  );
}

export default App;
