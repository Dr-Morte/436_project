import React, { Component } from "react";
import Alerts from './Alerts';
import './main.scss';

class ClassBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlerts: false
    }
  }

  removeAlert = (code, alert) => {
    this.props.removeAlert.call(this, code, alert);
  }

  toggleAlerts = () => {
    let toggle = !this.state.showAlerts;
    this.setState({ showAlerts: toggle });
  }

  renderAlerts = () => {
    if (this.state.showAlerts && this.props.data.alerts.length > 0) {
      return <Alerts alerts={this.props.data.alerts} code={this.props.data.code} removeAlert={this.removeAlert} />
    } else {
      return null
    }
  }

  render() {
    const data = this.props.data;
    var styles = {
      backgroundColor: data.color
    };

    return (
      <div className="classbox">
        <div className="class-header hover-grow" onClick={this.toggleAlerts}>
          <span className="dot" style={styles}></span>
          <a className="class-header-name" href="#">{data.code}</a>
          <span
            title="Notifications"
            id="badge"
            className="State State--red">
            {data.alerts.length}
          </span>

        </div>
        <span className="coursename" onClick={this.toggleAlerts}>{data.name}</span>
        { this.renderAlerts() }
      </div>
    );
  }
}

export default ClassBox;
