import React from "react";

function CalendarWeek() {
  return (
    <ul className="weekday">
      <li>
        <a href="#" title="Mon" data-value="1">
          Mon
        </a>
      </li>
      <li>
        <a href="#" title="Tue" data-value="2">
          Tue
        </a>
      </li>
      <li>
        <a href="#" title="Wed" data-value="3">
          Wed
        </a>
      </li>
      <li>
        <a href="#" title="Thu" data-value="4">
          Thu
        </a>
      </li>
      <li>
        <a href="#" title="Fri" data-value="5">
          Fri
        </a>
      </li>
      <li>
        <a href="#" title="Say" data-value="6">
          Sat
        </a>
      </li>
      <li>
        <a href="#" title="Sun" data-value="7">
          Sun
        </a>
      </li>
    </ul>
  );
}

export default CalendarWeek;
