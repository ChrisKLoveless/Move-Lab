import React, { useEffect, useState } from "react";
import { Div, CardSection } from "./StyledComponents";
import { fetchData, ExerciseDBOptions } from "../utils/fetchData";




function Home() {

  const [ exercises, setExercises ] = useState([]);

  useEffect(() => {
    fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseDBOptions)
      .then((data) => {
        console.log(data);
        setExercises(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  const slicedArray = exercises.slice(0, 15);

  return (
    <Div>
      <p>Welcome to Move Lab, the ultimate fitness app designed to help you achieve your fitness goals and lead a healthier lifestyle! Whether you're a beginner or a fitness enthusiast, our app offers a variety of workouts and programs to cater to your needs.

With Move Lab, you can customize your workout by searching for the exercise that is right for you. Our app also features animations and instructions, which will help you stay motivated and accountable on your fitness journey.

Whether you're looking to build muscle, burn fat, improve your flexibility, or simply maintain your fitness level, Move Lab has what you need to reach your goals. Download the app today and start your journey towards a healthier, happier you!</p>

    <h2>Sample exercises:</h2>
<CardSection>
{slicedArray.map((exercise, index) => (
          <div key={index} className="block max-w-sm bg-zinc-900 p-3 m-2 rounded-lg text-slate-300 shadow hover:bg-gray-600">
            <span className="mb-2 text-xl font-bold tracking-tight">{exercise.name}</span>
            <hr />
            <span>Body Part: {exercise.bodyPart}</span>
            <hr />
            <span>Equipment: {exercise.equipment}</span>
            <hr />
            <span>Demo: <img src={exercise.gifUrl} alt="demo"/></span>
            <hr />
            <span>Target: {exercise.target}</span>
          </div>
        ))}

</CardSection>
    </Div>
  )
}



export default Home;