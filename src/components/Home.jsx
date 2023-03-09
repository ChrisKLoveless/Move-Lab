import React from "react";
import { Div, CardSection } from "./StyledComponents";
import { allExercises } from "./AllExercises";




function Home() {
  return (
    <Div>
      <p>Welcome to Move Lab, the ultimate fitness app designed to help you achieve your fitness goals and lead a healthier lifestyle! Whether you're a beginner or a fitness enthusiast, our app offers a variety of workouts and programs to cater to your needs.

With Move Lab, you can customize your workout by searching for the exercise that is right for you. Our app also features animations and instructions, which will help you stay motivated and accountable on your fitness journey.

Whether you're looking to build muscle, burn fat, improve your flexibility, or simply maintain your fitness level, Move Lab has what you need to reach your goals. Download the app today and start your journey towards a healthier, happier you!</p>

<CardSection>
{allExercises.map((exercise, index) => (
          <div key={index} className="block max-w-sm p-6 text-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
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