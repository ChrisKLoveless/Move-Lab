import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import CuratedWorkouts from '../Pages/CuratedWorkouts/CuratedWorkouts';
import CreateWorkoutForm from '../Pages/CreateWorkout/CreateWorkoutForm';
import StartWorkout from '../Pages/StartWorkout/StartWorkout';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/"></Route>
          <Route path="/curated-workouts" element={<CuratedWorkouts />}></Route>
          <Route path="/create-workout" element={<CreateWorkoutForm />}></Route>
          <Route path="/start-workout" element={<StartWorkout />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
