import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchData } from "../utils/fetchData"


function SearchExercise(props) {

  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState('');

  function submitHandler(e) {
    e.preventDefault();
    // console.log(search);
    let SearchOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }
    };

    fetchData(('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=' +  search), SearchOptions)
      .then((data) => {
        console.log(data)
        setExercises(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const slicedArray = exercises.slice(0, 3);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={search}
          placeholder="Enter Body Part"
          onChange={(e) => {
            setSearch(e.target.value);
          }} />
        <button type="submit">Search</button>
      </form>
      <div>
        <div>

          {slicedArray.map((exercise, index) => (
            <div key={index} className="text-center">
              <h5>Name: {exercise.name}</h5>
              <h5>Type: {exercise.type}</h5>
              <h5>Body Part: {exercise.muscle}</h5>
              <h5>Equipment: {exercise.equipment}</h5>
              <h5>Difficulty: {exercise.difficulty}</h5>
              <h5>Instructions: {exercise.instructions}</h5>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default SearchExercise;