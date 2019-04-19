import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
// import moment from 'moment'
import './main.scss'

class FullCal extends Component {

  // calendarRef = React.createRef()
  //
  // componentDidMount(){
  //   console.log(this.calendarRef);
  //   let calendarApi = this.calendarRef.current.getApi()
  //   calendarApi.updateSize()
  // }

  render() {
    return (
      <FullCalendar
        ref={this.calendarRef}
        defaultView="listYear"
        header={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,listYear'
        }}
        plugins={[ listPlugin, dayGridPlugin ]}
        events={[
          { title: 'MATH 140 - Homework Due', date: '2019-04-20' },
          { title: 'MATH 308 Exam', date: '2019-04-22' },
          { title: 'CSCE 436 Demo', date: '2019-04-23' },
          { title: 'CSCE 420 - Homework Due', date: '2019-04-23' },
          { title: 'MATH 140 Quiz', date: '2019-04-23' },
          { title: 'PHYS 108 Online Quiz', date: '2019-04-26' },
          { title: 'CSCE 420 Assignment', date: '2019-04-26' },

        ]}
      />
    )
  }
}

export default FullCal;
