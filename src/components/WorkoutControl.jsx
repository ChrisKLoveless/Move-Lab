import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { SearchOptions, fetchData } from "../utils/fetchData";

function WorkoutControl() {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchData('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', SearchOptions)
      .then((data) => {
        console.log(data)
        setExercises(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])



  let currVisibleState = null;
  let buttonText = null;



  return (
    <Div>
      <div>
        {exercises.map(exercise => (
          <div className="text-center">
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
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default WorkoutControl;