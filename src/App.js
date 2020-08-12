import React from "react";
import "./App.css";
import CalendarComponent from "./components/CalendarComponent";
import TodoComponent from "./components/TodoComponent";

function App() {
  return (
    <div className="calendar">
      <div className="col leftCol">
        <TodoComponent />
      </div>
      <CalendarComponent />
      <div className="clearfix"></div>
    </div>
  );
}

export default App;
