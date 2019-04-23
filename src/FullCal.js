import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import listPlugin from '@fullcalendar/list'
// import moment from 'moment'
import './main.scss'

const ai = '#0366d6';
const hci = '#28a745';
const capstone = '#6f42c1';
const ethics ='#ffd33d';
const diffeq = '#d73a49';
const black = '#000000';

class FullCal extends Component {
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
          { title: 'ENGR 482: Essay Revision 1 Due', date: '2019-04-22', color: ethics, textColor: black },
          { title: 'MATH 308: Exam', date: '2019-04-22', color: diffeq },
          { title: 'CSCE 436: Demo', date: '2019-04-23', color: hci },
          { title: 'CSCE 420: Homework Due', date: '2019-04-23', color: ai },
          { title: 'ENGR 482: Exam 3', date: '2019-04-63', color: ethics, textColor: black },
          { title: 'CSCE 482: Team Update', date: '2019-04-26', color: capstone },
          { title: 'CSCE 420: Assignment', date: '2019-04-26', color: ai },
        ]}
      />
    )
  }
}

export default FullCal;
