import React, { Component } from "react";
import './main.scss'

class ClassBox extends Component {
  render() {
    return (
      <div>
        <a href="#">{this.props.code}</a>
        <span class="coursename">{this.props.name}</span>
      </div>
    );
  }
}

export default ClassBox;
