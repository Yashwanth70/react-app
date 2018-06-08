import React, { Component } from 'react';
import '../App.css';

class Stats extends Component {
  render() {
    return (
      <div className="profileWidth">
        <div className="statsCard">
	        <p>$35,000</p>
	        <p>Returned</p>
        </div>
        <div className="statsCard">
	        <p>$35,000</p>
	        <p>Paid</p>
        </div>
        <div className="statsCard">
	        <p>$35,000</p>
	        <p>Received</p>
        </div>
      </div>
    );
  }
}

export default Stats;
