import React, { useState } from "react";
import { SearchBar, SearchWords, CardSection } from "./StyledComponents";
import { fetchData, ExerciseDBOptions } from "../utils/fetchData";


function SearchDemo() {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState('');

  function handleDemo(e) {
    e.preventDefault();
    console.log(search);

    fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseDBOptions)
      .then((data) => {
        console.log(data)
        setExercises(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const filterExercises = exercises.filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(search) ||
      exercise.target.toLowerCase().includes(search) ||
      exercise.equipment.toLowerCase().includes(search) ||
      exercise.bodyPart.toLowerCase().includes(search)
  );
  const slicedArray = filterExercises.slice(0, 6);

  return (
    <div>
      <SearchWords>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Search for Exercises:</h1>
          <em>(Use a Name, Body Part, Muscle Group, or Equipment)</em>
        </div>
      </SearchWords>
      <SearchBar>
        <form onSubmit={handleDemo}>
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="block w-full p-3 px-5 pl-10 mr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search with Demo" required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-lime-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 p-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </SearchBar>


      <CardSection>
        {slicedArray.map((exercise, index) => (
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
      </CardSection >
    </div>
  )
}


export default SearchDemo;