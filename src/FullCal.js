import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
// import moment from 'moment'
import './main.scss'

const capstone = '#0000ff';
const hci = '#00ff00';
const ethics = '#ff0000';
const black = '#000000';

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
          { title: 'event 1', date: '2019-04-20', color: hci, textColor: black },
          { title: 'event 2', date: '2019-04-22', color: capstone },
          { title: 'event 3', start: '2019-04-23T15:55', color: hci, textColor: black },
          { title: 'event 4', date: '2019-04-23', color: hci, textColor: black },
          { title: 'event 5', date: '2019-04-23', color: ethics },
          { title: 'event 6', date: '2019-04-26', color: hci, textColor: black },
          { title: 'event 7', date: '2019-04-26', color: capstone }
        ]}
      />
    )
  }
}

export default FullCal;
