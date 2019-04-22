import React, { Component } from "react";
import './main.scss';

class Alert extends Component {

  handleRemoveAlert = (code, alert) => {
    this.props.removeAlert.call(this, this.props.code, this.props.data);
  }

  render() {
    return (
      <a className="alert" onClick={this.handleRemoveAlert}>{this.props.data}</a>
    )
  }
}

export default Alert;
