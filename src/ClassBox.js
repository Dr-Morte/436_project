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

  toggleAlerts = () => {
    let toggle = !this.state.showAlerts;
    this.setState({ showAlerts: toggle });
  }

  render() {
    const data = this.props.data;
    var styles = {
      backgroundColor: data.color
    };

    return (
      <div className="classbox" onClick={this.toggleAlerts}>
        <div className="classheader hover-grow">
          <span className="dot" style={styles}></span>
          <a href="#">{data.code}</a>
          <span
            title="Notifications"
            id="badge"
            className="State State--red">
            {data.events}
          </span>

        </div>
        <span className="coursename">{data.name}</span>
        { this.state.showAlerts ? <Alerts /> : null }
      </div>
    );
  }
}

export default ClassBox;
