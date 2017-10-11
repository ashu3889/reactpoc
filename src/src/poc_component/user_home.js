import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import UserHomeHeader from './user_home_header.js';
import UserHomeList from './home-router-container.js';

export default class UserHome extends Component{

render(){
	return(
		<div>

<UserHomeHeader/>
<UserHomeList/>

</div>
     )
}
}


