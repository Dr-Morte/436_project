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
          alerts: ["New Announcement -- Class Cancelled", "New Grade -- Homework 3"]
        },
        {
          code: "CSCE 436",
          name: "Human Computer Interaction",
          color: "#28a745",
          alerts: ["New Announcement -- Due Date Changed", "New Grade -- Test 2"]
        },
        {
          code: "CSCE 482",
          name: "Senior Capstone Design",
          color: "#6f42c1",
          alerts: ["New Grade -- Individual Update Week 14", "New Announcement -- Final Presentation Schedule"]
        },
        {
          code: "MATH 140",
          name: "Mathematics for Business and Social Sciences",
          color: "#ffd33d",
          alerts: []
        },
        {
          code: "MATH 308",
          name: "Differential Equations",
          color: "#d73a49",
          alerts: []
        }
      ]
    }
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
