import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import CuratedWorkouts from '../Pages/CuratedWorkouts/CuratedWorkouts';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/"></Route>
          <Route path="/curated-workouts" element={<CuratedWorkouts />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
