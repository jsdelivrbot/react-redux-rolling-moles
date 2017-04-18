import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {

  render() {

    return (
      <div>
        Nave here
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calendar">Calendar</Link></li>
          <li><Link to="/schedule">Schedule</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
        </ul>
      </div>
    );

  }

}