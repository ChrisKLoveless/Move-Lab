import React, { useState } from "react";
import { SearchBar, CardSection, SearchWords } from "./StyledComponents";
import { fetchData, ApiNinjaOptions } from "../utils/fetchData";

function SearchType() {

  const [exercises, setExercises] = useState([]);
  const [type, setType] = useState('');

  function submitType(e) {
    e.preventDefault();
    // console.log(search);

    fetchData(('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=' + type), ApiNinjaOptions)
      .then((data) => {
        console.log(data);
        setExercises(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const slicedArray = exercises.slice(0, 9);
  return (
    <div>
      <SearchWords>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Possible Searches:</h1>
          <em className="text-lg">
            cardio |
            olympic_weightlifting |
            plyometrics |
            powerlifting |
            strength |
            stretching |
            strongman |
          </em>
        </div>
      </SearchWords>
      <SearchBar>
        <form onSubmit={submitType}>
          <div className="relative">
            <input
              type="text"
              value={type}
              onChange={(e) => {
                setType(e.target.value);
              }}
              class="block w-full p-3 px-5 pl-10 mr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search by Category" required />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm px-2 p-2  dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800">Search</button>
          </div>
        </form>
      </SearchBar>


      <CardSection>
        {slicedArray.map((exercise, index) => (

          <div key={index} className="block max-w-sm bg-zinc-900 p-3 m-2 rounded-lg text-slate-300 shadow hover:bg-gray-600">
            <span className="text-xl font-bold tracking-tight">{exercise.name}</span>
            <hr />
            <span className="text-lg pr-4">Type:</span> <em>{exercise.type}</em> 
            <hr />
            <span className="text-lg pr-4">Body Part:</span> <em>{exercise.muscle}</em>
            <hr />
            <span className="text-lg pr-4">Equipment:</span> <em>{exercise.equipment}</em>
            <hr />
            <span className="text-lg pr-4">Difficulty:</span> <em>{exercise.difficulty}</em>
            <hr />
            <span className="text-lg">Instructions: &#8595; <br />
              {exercise.instructions}</span>
          </div>
        ))}
      </CardSection >
    </div>
  )
}

export default SearchType;