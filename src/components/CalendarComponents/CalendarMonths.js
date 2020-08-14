import React from "react";

function CalendarMonths(props) {
  const monthTitle = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const minusMonthClick = (event) => {
    props.handleClick((prevState) => {
      let month = prevState.Month - 1,
        year = prevState.Year;
      if (month <= 0) {
        month = 12;
        year--;
      }
      return {
        ...prevState,
        Month: month,
        Year: year,
      };
    });
  };
  const addMonthClick = (event) => {
    // consider Add Month will affect Year
    props.handleClick((prevState) => {
      let month = prevState.Month + 1,
        year = prevState.Year;
      if (month > 12) {
        month = 1;
        year++;
      }

      return {
        ...prevState,
        Month: month,
        Year: year,
      };
    });
  };

  const monthList = monthTitle.map((elem, index) => {
    return (
      <li>
        <label
          title={elem}
          className={props.Month - 1 === index ? "selected" : ""}
        >
          {elem}
        </label>
      </li>
    );
  });

  return (
    <div>
      <button onClick={minusMonthClick}>Prev Month</button>
      <button onClick={addMonthClick}>Next Month</button>
      <ul className="months">{monthList}</ul>
    </div>
  );
}

export default CalendarMonths;
