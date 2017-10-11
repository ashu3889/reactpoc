import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEmployee , fetchPosts} from '../action/index.js';

class ListContainer extends Component{

generateTable() {
    
    if(this.props.posts.length >0){



return (
this.props.posts.map((item) =>{
 return (
 	<tr key={item._id}>
<td>{item.name}</td>
<td>{item.address}</td>
<td>{item.age}</td>

 <td><button  onClick = {() => this.props.deleteEmployee(item._id,() => {
      this.props.fetchPosts();
    })} className="btn btn-danger">Delete Employee</button></td>
</tr>);

}))

    } 
};


render(){
console.log('ashutosh');
console.log(this.props.posts);
 
	return(
		<div>
	<table className="table" >
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Age</th>
</tr>
</thead>
<tbody>
{this.generateTable()}




</tbody>
</table>
</div>
     )

 }
}


function mapStateToProps(state) {
  return { posts: state.getdata };
}

export default connect(mapStateToProps, { deleteEmployee , fetchPosts})(ListContainer);