import React, { useState, useEffect } from "react";
import CalendarYear from "./CalendarComponents/CalendarYear";
import CalendarMonths from "./CalendarComponents/CalendarMonths";
import CalendarWeek from "./CalendarComponents/CalendarWeek";
import CalendarDays from "./CalendarComponents/CalendarDays";

function CalendarComponent() {
  const now = new Date();
  const nowData = {
    Year: now.getFullYear(),
    Month: now.getMonth() + 1,
    Day: now.getDay(),
    Date: now.getDate(),
  };
  const [selectedDate, setDate] = useState(nowData);

  useEffect(() => {
    console.log(
      `selected change! ${selectedDate.Year}-${selectedDate.Month}-${selectedDate.Date}`
    );
  }, [selectedDate]);

  return (
    <div className="col rightCol">
      <div className="content">
        <CalendarYear Year={selectedDate.Year} handleClick={setDate} />
        <CalendarMonths Month={selectedDate.Month} handleClick={setDate} />
        <div className="clearfix"></div>
        <CalendarWeek Day={selectedDate.Day} />
        <div className="clearfix"></div>
        <CalendarDays Date={selectedDate} handleClick={setDate} />
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default CalendarComponent;
