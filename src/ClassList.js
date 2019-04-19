import React, { Component } from "react";
import ClassBox from './ClassBox';
import './main.scss';

class ClassList extends Component {
  render() {
    return (
      <ul>
        <li>
          <ClassBox
            code="CSCE 420"
            name="Artificial Intelligence"
            color="#0366d6"/>
        </li>
        <li>
          <ClassBox
            code="CSCE 436"
            name="Human Computer Interaction"
            color="#28a745"/>
        </li>
        <li>
          <ClassBox
            code="CSCE 482"
            name="Senior Capstone Design"
            color="#6f42c1"/>
        </li>
        <li>
          <ClassBox
            code="MATH 140"
            name="Mathematics for Business and Social Sciences"
            color="#ffd33d"/>
        </li>
        <li>
          <ClassBox
            code="MATH 308"
            name="Differential Equations"
            color="#d73a49"/>
        </li>
      </ul>
    );
  }
}

export default ClassList;
