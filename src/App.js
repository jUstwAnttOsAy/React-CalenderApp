import React, { useState, useEffect } from "react";
import "./App.css";
import CalendarComponent from "./components/CalendarComponent";
import NoteComponent from "./components/NoteComponent";

function App() {
  const [selectedDate, setSelectedDate] = useState(() => {
    // Default is Today
    const date = new Date();
    return date;
  });

  useEffect(() => {
    console.log(
      `Now Date is ${selectedDate.getFullYear()}-${
        selectedDate.getMonth() + 1
      }-${selectedDate.getDate()}`
    );
    // Go to Change NoteList
  }, [selectedDate]);

  return (
    <div className="calendar">
      <div className="col leftCol">
        <NoteComponent date={selectedDate} />
      </div>
      <CalendarComponent date={selectedDate} changeDate={setSelectedDate} />
      <div className="clearfix"></div>
    </div>
  );
}

export default App;
