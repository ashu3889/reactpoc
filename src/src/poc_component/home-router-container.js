import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import HomeList from './home_list.js';
import List1 from './list1.js';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class ParentDetail extends Component{

render(){
	return(
		<div>
 
      <Route exact strict path='/userhome' component={HomeList}/>
      <Route path='/userhome/' component={List1}/>      
   
</div>
     )
}
}

function mapStateToProps(state) {
  return { posts: state.getdata };
}

export default withRouter(connect(mapStateToProps, { fetchPosts })(ParentDetail));