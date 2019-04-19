import React, { Component } from "react";
import './main.scss';

class ClassBox extends Component {
  render() {
    var styles = {
      backgroundColor: this.props.color
    };

    return (
      <div>
        <div class="classheader">
          <span class="dot" style={styles}></span>
          <a href="#">{this.props.code}</a>
        </div>
        <span class="coursename">{this.props.name}</span>
      </div>
    );
  }
}

export default ClassBox;
