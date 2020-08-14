import React from "react";

function CalendarDays(props) {
  const dayClick = (event) => {
    const { year, month, date } = event.target.attributes;
    const newDate = new Date(year.value, month.value, date.value);
    props.handleClick({
      Year: newDate.getFullYear(),
      Month: newDate.getMonth() + 1,
      Day: newDate.getDay(),
      Date: newDate.getDate(),
    });
  };

  const selectedYear = props.Date.Year;
  const selectedMonth = props.Date.Month - 1;
  const firstDayOfMonth = new Date(selectedYear, selectedMonth, 1);
  const lastDayOfMonth = new Date(selectedYear, selectedMonth + 1, 0);
  console.log(selectedYear);
  console.log(selectedMonth);
  console.log(firstDayOfMonth);
  console.log(lastDayOfMonth);

  console.log(firstDayOfMonth.getDay());
  const preDayCount =
    firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;
  const prevDays = Array.from(new Array(preDayCount), (elem, index) =>
    new Date(firstDayOfMonth - 86400000 * (preDayCount - index)).getDate()
  );
  console.log(prevDays);

  const prevDayList = prevDays.map((elem) => {
    return (
      <li>
        <button className="notthisMonth">{elem}</button>
      </li>
    );
  });

  const thisDays = Array.from(
    new Array(lastDayOfMonth.getDate()),
    (elem, index) => index + 1
  );

  const thisDayList = thisDays.map((elem) => {
    return (
      <li>
        <button
          className={elem === props.Date.Date ? "selected" : ""}
          onClick={dayClick}
          Year={selectedYear}
          Month={selectedMonth}
          Date={elem}
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

  const nextDayList = nextDays.map((elem) => {
    return (
      <li>
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
