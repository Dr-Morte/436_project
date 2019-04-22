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
          events: "2",
          color: "#0366d6"
        },
        {
          code: "CSCE 436",
          name: "Human Computer Interaction",
          events: "1",
          color: "#28a745"
        },
        {
          code: "CSCE 482",
          name: "Senior Capstone Design",
          events: "1",
          color: "#6f42c1",
        },
        {
          code: "MATH 140",
          name: "Mathematics for Business and Social Sciences",
          events: "2",
          color: "#ffd33d"
        },
        {
          code: "MATH 308",
          name: "Differential Equations",
          events: "1",
          color: "#d73a49"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.classes.map( ( c, index ) => (
          <ClassBox
            key={index}
            data={c}
          />
        ))}
      </div>
    );
  }
}

export default ClassList;
