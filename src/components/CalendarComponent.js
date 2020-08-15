import React from "react";
import CalendarYear from "./CalendarComponents/CalendarYear";
import CalendarMonths from "./CalendarComponents/CalendarMonths";
import CalendarWeek from "./CalendarComponents/CalendarWeek";
import CalendarDays from "./CalendarComponents/CalendarDays";

function CalendarComponent(props) {
  const year = props.date.getFullYear();
  const month = props.date.getMonth();

  return (
    <div className="col rightCol">
      <div className="content">
        <CalendarYear year={year} changeDate={props.changeDate} />
        <CalendarMonths month={month} changeDate={props.changeDate} />
        <div className="clearfix"></div>
        <CalendarWeek />
        <div className="clearfix"></div>
        <CalendarDays date={props.date} changeDate={props.changeDate} />
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default CalendarComponent;
