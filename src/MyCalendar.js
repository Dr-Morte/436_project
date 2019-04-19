import React, { Component } from "react";
import Calendar from "react-big-calendar";
import moment from "moment";

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = Calendar.momentLocalizer(moment);

class MyCalendar extends Component {
  state = {
    events: [
      {
        start: new Date(moment().add(1, "days")),
        end: new Date(moment().add(1, "days")),
        title: "Assignment 1 due"
      },
      {
        start: new Date(moment().add(5, "days")),
        end: new Date(moment().add(5, "days")),
        title: "Assignment 2 due, very long title to see what happens"
      },
      {
        start: new Date(moment().add(7, "days")),
        end: new Date(moment().add(7, "days")),
        title: "Assignment 3 due"
      },
      {
        start: new Date(moment().add(7, "days")),
        end: new Date(moment().add(7, "days")),
        title: "Assignment 4 due"
      },
      {
        start: new Date(moment().add(8, "days")),
        end: new Date(moment().add(8, "days")),
        title: "Exam"
      }
    ]
  };

  render() {
    return (
      <div className="calendar">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="agenda"
          events={this.state.events}
          style={{ height: "100vh", width: "50vw" }}
        />
      </div>
    );
  }
}

export default MyCalendar;
