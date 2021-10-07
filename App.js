import './App.css';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";


const locales = {
  "en-IN": require("date-fns/locale/en-IN")
  
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const events = [
  {
    title: "TechSurf2021",
    start: new Date(2021, 9, 7),
    end: new Date(2021, 9, 10),
},
 
];

function App() {
  const [newEvent, setNewEvent] = useState({title:"", start:"", end:""})
  const [allEvents, setAllEvents] = useState(events)

  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
  }

  return (
    <div className="App">
      <h1>Calendar</h1>
            
      <Calendar
       localizer={localizer} 
       events={allEvents} 
       startAccessor="start" 
       endAccessor="end"
       style={{height:500,margin:"auto",width:500}}
       className="container"/>  

       
    </div>
  );
}

export default App;
