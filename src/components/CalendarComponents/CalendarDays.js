import React from "react";

function CalendarDays(props) {
  const dayClick = (event) => {
    const { year, month, date } = event.target.attributes;
    const newDate = new Date(year.value, month.value, date.value);
    props.changeDate(newDate);
  };

  const selectedYear = props.date.getFullYear();
  const selectedMonth = props.date.getMonth();
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
  const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);

  const preDayCount =
    firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
  const prevDays = Array.from(new Array(preDayCount), (elem, index) =>
    new Date(firstDayOfMonth - 86400000 * (preDayCount - index)).getDate()
  );

  const prevDayList = prevDays.map((elem, index) => {
    return (
      <li key={index}>
        <button className="notthisMonth">{elem}</button>
      </li>
    );
  });

  const thisDays = Array.from(
    new Array(lastDayOfMonth.getDate()),
    (elem, index) => index + 1
  );

  const thisDayList = thisDays.map((elem, index) => {
    return (
      <li key={index}>
        <button
          className={elem === props.date.getDate() ? "selected" : ""}
          onClick={dayClick}
          year={selectedYear}
          month={selectedMonth}
          date={elem}
        >
          {elem}
        </button>
      </li>
    );
  });

  const nextDays = Array.from(
    new Array(7 - lastDayOfMonth.getDay()),
    (elem, index) => index + 1
  );

  const nextDayList = nextDays.map((elem, index) => {
    return (
      <li key={index}>
        <button className="notthisMonth">{elem}</button>
      </li>
    );
  });

  return (
    <div>
      <ul id="daylist" className="days">
        {prevDayList}
        {thisDayList}
        {nextDayList}
      </ul>
    </div>
  );
}

export default CalendarDays;
