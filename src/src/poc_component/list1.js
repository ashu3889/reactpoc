import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import { Switch, Route ,Link } from 'react-router-dom';
import Demo from './demo.js';
import Presentation from './presentation.js';

export default class List extends Component{

render(){
	return(
		<div>
<Switch>
      <Route exact path='/userhome/presentation' component={Presentation}/>
      <Route path='/userhome/demo' component={Demo}/>      
 </Switch>

</div>
     )
}
}


