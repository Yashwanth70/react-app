import React, { Component } from 'react';
import profile from '../assests/profile.jpg'
import '../App.css';

class Posts extends Component {
	constructor(props){
		super(props)
		this.state = {
			selectedFile: null
		}
	}

	fileChangedHandler = (event) => {
	  this.setState({selectedFile: event.target.files[0]})
	}

	uploadHandler = () => { 
	  console.log(this.state.selectedFile)
	}

  render() {
    return (
      <div style={{width: 70+'%'}}>
        <div className='createPost'>
        	<div>
	        	<img src={profile} className="postCreate-logo" alt="logo" />
	        	<textarea rows="4" cols="50" placeholder="What's on your mind?"></textarea>
        	</div>
        	<div>
        		<input type="file" onChange={this.fileChangedHandler.bind(this)} />
				{/*<button onClick={this.uploadHandler.bind(this)}>Upload Photo</button>*/}
        	</div>
        </div>

      </div>
    );
  }
}

export default Posts;
