import React, { Component } from "react";
import './main.scss'

class ClassBox extends Component {
  render() {
    return <a href="#">{this.props.name}</a>;
  }
}

export default ClassBox;
