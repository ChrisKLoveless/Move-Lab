import React from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import SignIn from '../Pages/Auth/SignInSignOut';

function App() {
  return (
    <div className="App">
      <Header />
      <SignIn />
    </div>
  );
}

export default App;
