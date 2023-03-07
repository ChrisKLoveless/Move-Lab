import React from "react";
import PropTypes from "prop-types";

function Exercise(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

Exercise.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  muscle: PropTypes.string,
  equipment: PropTypes.string,
  difficulty: PropTypes.string,
  instructions: PropTypes.string,
  whenExerciseClicked: PropTypes.func
}

export default Exercise;