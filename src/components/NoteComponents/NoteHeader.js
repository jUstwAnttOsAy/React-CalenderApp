import React from "react";

function NoteHeader(props) {
  const weekTitleList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const monthTitleList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const weekTitle = weekTitleList[props.date.getDay()];
  const monthTitle = monthTitleList[props.date.getMonth()];
  const dateTitle = props.date.getDate();

  return (
    <div>
      <h1 className="date">
        {weekTitle}
        <span>
          {monthTitle} {dateTitle}th
        </span>
      </h1>
    </div>
  );
}

export default NoteHeader;
