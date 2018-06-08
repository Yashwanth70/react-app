import React, { Component } from 'react';
import Profile from './Profile'
import Posts from './Posts'
import Stats from './Stats'
import '../App.css';

class FullComponent extends Component {
  render() {
    return (
      <div className="flexColumn">
        <Profile />
        <Posts />
        <Stats />
      </div>
    );
  }
}

export default FullComponent;
