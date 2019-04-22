import React, { Component } from "react";
import Alert from './Alert';
import './main.scss';

class Alerts extends Component {

  removeAlert = (code, alert) => {
    this.props.removeAlert.call(this, code, alert);
  }

  render() {
    return (
      <div className="alert-container">
        {this.props.alerts.map( ( a, index ) => (
          <React.Fragment key={index}>
          <Alert
            key={index}
            code={this.props.code}
            data={a}
            removeAlert={this.props.removeAlert}
          />
          <br />
          </React.Fragment>
        ))}
      </div>
    )
  }
}

export default Alerts;
