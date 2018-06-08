import React, { Component } from 'react';
import profie from '../assests/profile.jpg'
import '../App.css';

class Profile extends Component {
  render() {
    return (
      <div className="profileWidth">
        <div className="profileImage">
	        <img src={profie} className="profile-logo" alt="logo" />
	        <p>Yashwanth</p>
        </div>
        <div className='profileLinks'>
        	<ul>
        		<li>
        			<i className="fas fa-home"></i>
        			<p>Home</p>
        		</li>
        		<li>
        			<i className="fas fa-home"></i>
        			<p>Community</p>
        		</li>
        		<li>
        			<i className="fas fa-home"></i>
        			<p>Chat</p>
        		</li>
        		<li>
        			<i className="fas fa-home"></i>
        			<p>Members</p>
        		</li>
        		<li>
        			<i className="fas fa-home"></i>
        			<p>Exit</p>
        		</li>
        	</ul>
        </div>
      </div>
    );
  }
}

export default Profile;
