import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
import moment from 'moment'
import './main.scss'

class FullCal extends Component {

  render() {
    return (
      <FullCalendar
        defaultView="listYear"
        header={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,listYear'
        }}
        plugins={[ listPlugin, dayGridPlugin ]}
        events={[
          { title: 'event 1', date: '2019-04-20' },
          { title: 'event 2', date: '2019-04-22' },
          { title: 'event 3', date: '2019-04-23' },
          { title: 'event 4', date: '2019-04-23' },
          { title: 'event 5', date: '2019-04-23' },
          { title: 'event 6', date: '2019-04-26' },
          { title: 'event 7', date: '2019-04-26' },

        ]}
      />
    )
  }
}

export default FullCal;
