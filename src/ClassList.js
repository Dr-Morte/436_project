import React, { Component } from "react";
import ClassBox from './ClassBox';
import './main.scss';

class ClassList extends Component {
  render() {
    return (
      <ul>
        <li><ClassBox code="CSCE 420" name="Artificial Intelligence"/></li>
        <li><ClassBox code="CSCE 436" name="Human Computer Interaction"/></li>
        <li><ClassBox code="CSCE 482" name="Senior Capstone Design"/></li>
        <li><ClassBox code="MATH 140" name="Mathematics for Business and Social Sciences"/></li>
        <li><ClassBox code="MATH 308" name="Differential Equations"/></li>
      </ul>
    );
  }
}

export default ClassList;
