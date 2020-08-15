import React from "react";

function CalendarYear(props) {
  const addYearClick = (event) => {
    props.changeDate((prevState) => {
      return new Date(
        prevState.getFullYear() + 1,
        prevState.getMonth(),
        prevState.getDate()
      );
    });
  };

  const minusYearClick = (event) => {
    props.changeDate((prevState) => {
      return new Date(
        prevState.getFullYear() - 1,
        prevState.getMonth(),
        prevState.getDate()
      );
    });
  };

  return (
    <div>
      <button onClick={minusYearClick}>Prev Year</button>
      <button onClick={addYearClick}>Next Year</button>
      <h2 className="year">{props.year}</h2>
    </div>
  );
}

export default CalendarYear;
