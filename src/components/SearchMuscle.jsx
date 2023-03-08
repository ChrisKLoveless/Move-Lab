import React, { useState } from "react";
import { SearchBar, CardSection, SearchWords } from "./StyledComponents";
import { fetchData } from "../utils/fetchData";
import { ApiNinjaOptions } from "../utils/fetchData";

function SearchMuscle(props) {

  const [exercises, setExercises] = useState([]);
  const [muscle, setMuscle] = useState('');

  function submitMuscle(e) {
    e.preventDefault();
    // console.log(search);

    fetchData(('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=' + muscle), ApiNinjaOptions)
      .then((data) => {
        console.log(data)
        setExercises(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const slicedArray = exercises.slice(0, 6);
  return (
    <div>
      <SearchWords>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Possible Searches:</h1>
          abdominals |
          adductors |
          abductors |
          biceps |
          calves |
          chest |
          forearms |
          glutes |
          hamstrings |
          lats |
          lower_back |
          middle_back |
          neck |
          quadriceps |
          traps |
          triceps
        </div>
      </SearchWords>
      <SearchBar>
        <form onSubmit={submitMuscle}>
          <div className="relative">
            <input
              type="text"
              value={muscle}
              onChange={(e) => {
                setMuscle(e.target.value);
              }}
              class="block w-full p-3 px-5 mr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Muscle Group" required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 p-2  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </SearchBar>


      <CardSection>
        {slicedArray.map((exercise, index) => (
          <div key={index} className="block max-w-sm p-6 text-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <span className="mb-2 text-xl font-bold tracking-tight">{exercise.name}</span>
            <hr />
            <span>Type: {exercise.type}</span>
            <hr />
            <span>Body Part: {exercise.muscle}</span>
            <hr />
            <span>Equipment: {exercise.equipment}</span>
            <hr />
            <span>Difficulty: {exercise.difficulty}</span>
            <hr />
            <span>Instructions: <br />
              {exercise.instructions}</span>
          </div>
        ))}
      </CardSection >
    </div>
  )
}

export default SearchMuscle;