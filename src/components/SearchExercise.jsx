import React from "react";
import PropTypes from "prop-types";
import { fetchData } from "../utils/fetchData";



function SearchExercise(props) {
  function formSubmissionHandler(e) {
    e.preventDefault();

    fetchData()
  }
  return(
    <div>
      <form onSubmit={props.formSubmissionHandler}>
          <input 
          type="text"
          name="body-part"
          placeholder="Enter Body Part" />
          <button type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchExercise;