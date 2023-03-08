import React, { useState, useEffect } from 'react';
import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchMuscle from "./SearchMuscle";
import Header from './Header';
import Home from './Home';
import SearchType from './SearchType';
import SearchDemo from './SearchDemo';
import Banner from './Banner';
import Loader from './Loader';

function App() {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(false), 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Router>
      {loaded ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Banner />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/muscle" element={<SearchMuscle />} />
            <Route path="/category" element={<SearchType />} />
            <Route path="/demo" element={<SearchDemo />} />
          </Routes>
        </div>
      )}
    </Router>
  );
};

export default App;
