import React from "react";

function CalendarMonths(props) {
  return (
    <ul className="months">
      <li>
        <label title="Jan" className={props.Month === 1 ? "selected" : ""}>
          Jan
        </label>
      </li>
      <li>
        <label title="Feb" className={props.Month === 2 ? "selected" : ""}>
          Feb
        </label>
      </li>
      <li>
        <label title="Mar" className={props.Month === 3 ? "selected" : ""}>
          Mar
        </label>
      </li>
      <li>
        <label title="Apr" className={props.Month === 4 ? "selected" : ""}>
          Apr
        </label>
      </li>
      <li>
        <label title="May" className={props.Month === 5 ? "selected" : ""}>
          May
        </label>
      </li>
      <li>
        <label title="Jun" className={props.Month === 6 ? "selected" : ""}>
          Jun
        </label>
      </li>
      <li>
        <label title="Jul" className={props.Month === 7 ? "selected" : ""}>
          Jul
        </label>
      </li>
      <li>
        <label title="Aug" className={props.Month === 8 ? "selected" : ""}>
          Aug
        </label>
      </li>
      <li>
        <label title="Sep" className={props.Month === 9 ? "selected" : ""}>
          Sep
        </label>
      </li>
      <li>
        <label title="Oct" className={props.Month === 10 ? "selected" : ""}>
          Oct
        </label>
      </li>
      <li>
        <label title="Nov" className={props.Month === 11 ? "selected" : ""}>
          Nov
        </label>
      </li>
      <li>
        <label title="Dec" className={props.Month === 12 ? "selected" : ""}>
          Dec
        </label>
      </li>
    </ul>
  );
}

export default CalendarMonths;
