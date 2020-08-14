import React from "react";

function CalendarYear(props) {
  const addYearClick = (event) => {
    props.handleClick((prevState) => {
      return {
        ...prevState,
        Year: prevState.Year + 1,
      };
    });
  };

  const minusYearClick = (event) => {
    props.handleClick((prevState) => {
      return {
        ...prevState,
        Year: prevState.Year - 1,
      };
    });
  };

  return (
    <div>
      <button onClick={minusYearClick}>Prev Year</button>
      <button onClick={addYearClick}>Next Year</button>
      <h2 className={"year"}>{props.Year}</h2>
    </div>
  );
}

export default CalendarYear;
