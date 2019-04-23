import React, { Component } from "react";
import ClassList from './ClassList';
import FullCal from './FullCal';
import Navbar from './Navbar';
import './main.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: 0
    }
  }

  getNotifications = (num) => {
    this.setState({notifications: num});
  }

  render () {
    return (
      <React.Fragment>
        <Navbar notifications={this.state.notifications}/>
        <div class="container">
          <div id="classlist">
            <ClassList getNotifications={this.getNotifications} />
          </div>
          <div id="fullcal">
            <FullCal />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
