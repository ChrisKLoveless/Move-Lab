import React, { useEffect, useState } from "react";
import styled from "styled-components";

function WorkoutPlanner() {

  const [result, setResult] = useState([]);
  const fetch = require('node-fetch');
  const url = 'https://workout-planner1.p.rapidapi.com/?time=60&muscle=legs&location=gym&equipment=kettle%20bell';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'workout-planner1.p.rapidapi.com'
    }
  };
  fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err))
  
  return (
    <Div>
      <h1>Plan your Workout</h1>
      <h1>Warm Up</h1>
      <h1>Exercises</h1>
      <h1>Cool Down</h1>
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default WorkoutPlanner;