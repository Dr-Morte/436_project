import React, { Component } from "react";
import ClassBox from './ClassBox';
import './main.scss';

class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [
        {
          code: "CSCE 420",
          name: "Artificial Intelligence",
          color: "#0366d6",
          alerts: [
            "New Announcement: Class Cancelled",
            "New Grade: Homework 3"
          ]
        },
        {
          code: "CSCE 436",
          name: "Human Computer Interaction",
          color: "#28a745",
          alerts: [
            "New Announcement: Due Date Changed",
            "New Grade: Test 2"
          ]
        },
        {
          code: "CSCE 482",
          name: "Senior Capstone Design",
          color: "#6f42c1",
          alerts: [
            "New Grade: Individual Update Week 14",
            "New Announcement: Final Presentation Schedule",
            "New Announcement: Engineering Project Showcase"
          ]
        },
        {
          code: "ENGR 482",
          name: "Ethics in Engineering",
          color: "#ffd33d",
          alerts: [
            "New Grade: Essay",
            "New Announcement: Week 14 - International Engineering"
          ]
        },
        {
          code: "MATH 308",
          name: "Differential Equations",
          color: "#d73a49",
          alerts: [
            "New Announcement: Homework 6 Posted",
            "New Grade: Quiz 4",
            "New Grade: Exam 2"
          ]
        }
      ]
    }
  }

  getNotifications = (num) => {
    var total = 0
    this.state.classes.map( (c, index) => (
      c.alerts.length > 0 ? total += c.alerts.length : total += 0
    ))
    this.props.getNotifications.call(this, total);
  }

  removeAlert = (code, alert) => {
    var classes = this.state.classes;
    var found = classes.find(function(element) {
      return element["code"] === code;
    });
    var index = classes.indexOf(found);
    found["alerts"].splice( found["alerts"].indexOf(alert), 1 );

    if (index !== -1) {
      classes[index] = found;
    }
    console.log(classes);
    this.setState({classes: classes})
    this.getNotifications();
  }

  componentDidMount() {
    this.getNotifications();
  }

  render() {
    return (
      <div>
        {this.state.classes.map( ( c, index ) => (
          <ClassBox
            key={index}
            data={c}
            removeAlert={this.removeAlert}
          />
        ))}
      </div>
    );
  }
}

export default ClassList;
