import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import Login from './login.js';
import UserHome from './user_home.js';
import ProfileWrapper from './profile_wrapper.js';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class Home extends Component{

render(){
	return(
		<div>

 <Switch>
      <Route exact path='/' component={Login}/>
      <Route exact strict path='/userhome' component={UserHome}/>      
       <Route path='/userhome/' component={ProfileWrapper}/> 
    </Switch>
</div>
     )
}
}

function mapStateToProps(state) {
  return { posts: state.getdata };
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(Home));