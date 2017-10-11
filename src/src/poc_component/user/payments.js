import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Route ,Link } from 'react-router-dom';



export default class Payment extends Component{

render(){
	return(
	<div className="container">

<div className="row" style={reminderContainer}> 

<label>Add Payee</label>

</div>



<div className="form-group row" style={container}>
      <label for="inputEmail3" className="col-sm-2 col-xs-4 col-form-label">Pay To</label>
      <div className="col-sm-10 col-xs-4">
        <input type="email" className="form-control" id="inputEmail3" placeholder="Add Contact"/>
      </div>
    </div>





<div className="form-group row" style={container}>
      <label for="inputEmail3" className="col-sm-2 col-xs-4 col-form-label">Account Number</label>
      <div className="col-sm-10 col-xs-4">
        <input type="email" className="form-control" id="inputEmail3" placeholder="Account Number"/>
      </div>
    </div>

<div className="row" style={reminderContainer}> 

<label style={calendarstyle}>Save</label>

</div>


</div>
     )
}
}

var calendarstyle ={

	color : 'blue',
};

var reminderContainer ={

	 height: 70,
};

 var  container = {
       height: 70,
         borderColor: '#ccc',
    borderWidth: .5,
    borderBottomStyle: 'solid',
    };