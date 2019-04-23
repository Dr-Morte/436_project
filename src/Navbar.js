import React, { Component } from "react";
import './main.scss';

class Navbar extends Component {
  render () {
    return (
      <div className="navbar">
        <a className="nav">Home</a>
        <a className="nav">
          Notifications
          <span
            title="Notifications"
            id="badge"
            className="State State--red">
            {this.props.notifications}
          </span>
        </a>
      </div>
    )
  }
}

export default Navbar
