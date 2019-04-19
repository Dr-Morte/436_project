import React, { Component } from "react";
import ClassBox from './ClassBox';
import './main.scss';

class ClassList extends Component {
  render() {
    return (
      <ul>
        <li><ClassBox name="CSCE 420" /></li>
        <li><ClassBox name="CSCE 436" /></li>
        <li><ClassBox name="MATH 140" /></li>
        <li><ClassBox name="MATH 308" /></li>
        <li><ClassBox name="PHYS 108" /></li>
      </ul>
    );
  }
}

export default ClassList;
