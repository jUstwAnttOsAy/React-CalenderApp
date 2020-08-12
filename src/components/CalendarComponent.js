import React, { useState } from "react";
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
  const [selectedDate] = useState(nowData);

  return (
    <div className="col rightCol">
      <div className="content">
        <CalendarYear Year={selectedDate.Year} />
        <CalendarMonths Month={selectedDate.Month} />
        <div className="clearfix"></div>
        <CalendarWeek Day={selectedDate.Day} />
        <div className="clearfix"></div>
        <CalendarDays Date={selectedDate} />
        <div className="clearfix"></div>
      </div>
    </div>
  );
}

export default CalendarComponent;
