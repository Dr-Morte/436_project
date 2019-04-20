import React, { Component } from "react";
import './main.scss';

class ClassBox extends Component {
  render() {

    var styles = {
      backgroundColor: this.props.color
    };

    return (
      <div className="hover-grow">
        <div className="classheader">
          <span className="dot" style={styles}></span>
          <a href="#">{this.props.code}</a>
          <span title="Notifications" id="badge" className="State State--red">{this.props.events}</span>

        </div>
        <span className="coursename">{this.props.name}</span>
      </div>
    );
  }
}

export default ClassBox;
