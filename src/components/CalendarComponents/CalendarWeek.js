import React from "react";

function CalendarWeek() {
  const weekTitle = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const weekList = weekTitle.map((elem, index) => {
    return (
      <li>
        <label title={elem} data-value={index}>
          {elem}
        </label>
      </li>
    );
  });

  return <ul className="weekday">{weekList}</ul>;
}

export default CalendarWeek;
