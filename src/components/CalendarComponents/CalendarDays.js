import React, { useEffect } from "react";

function CalendarDays(props) {
  function setDayList() {
    const firstDayOfMonth = new Date(props.Date.Year, props.Date.Month - 1, 1);
    const lastDayOfMonth = new Date(props.Date.Year, props.Date.Month, 0);
    const daylist = document.getElementById("daylist");
    console.log(firstDayOfMonth);
    for (let i = firstDayOfMonth.getDay(); i > 0; i--) {
      const li = document.createElement("li");
      const label = document.createElement("label");
      label.classList.add("notthisMonth");
      label.innerText = new Date(firstDayOfMonth - 86400000 * i).getDate();
      li.appendChild(label);
      daylist.appendChild(li);
    }
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.innerText = i.toString();
      li.appendChild(a);
      daylist.appendChild(li);
    }
    console.log(lastDayOfMonth.getDay());
    for (let i = 1; i < 7 - lastDayOfMonth.getDay(); i++) {
      const li = document.createElement("li");
      const label = document.createElement("label");
      label.classList.add("notthisMonth");
      label.innerText = i.toString();
      li.appendChild(label);
      daylist.appendChild(li);
    }
  }

  useEffect(() => {
    setDayList();
  }, []);

  return (
    <div>
      <ul id="daylist" className="days"></ul>
    </div>
  );
}

export default CalendarDays;
