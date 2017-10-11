import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import ProfileHeader from './profile_header.js';
import ProfileContent from './profile_content.js';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

export default class ProfileWrapper extends Component{

render(){
	return(
		<div>
 <ProfileHeader/>
 <ProfileContent/>
</div>
     )
}
}

