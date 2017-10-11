import React, { Component } from "react";
import { connect } from "react-redux";
import ListContainer from './listcontainer.js';
import { fetchPosts ,fetchPosts } from '../action/index.js';

class Form extends Component{

render(){
	return(
		<div>

<button type="button" onClick = {() => this.props.fetchPosts()} className="btn btn-primary">Get Data</button>

<ListContainer/>

</div>
     )
}
}

function mapStateToProps(state) {
  return { posts: state.getdata };
}

export default connect(mapStateToProps, { fetchPosts })(Form);