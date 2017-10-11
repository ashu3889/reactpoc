import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route ,Link } from 'react-router-dom';
import CircleIcon from "./images/circle.png";
import ToggleIcon from "./images/toggle.jpg";

export default class Preference extends Component{

render(){
	return(

<div>

<div className="col-xs-12" style={rowstyle}>
<div className="col-xs-2">
<img       
          src={CircleIcon}
          alt={CircleIcon}
          style={personaliseImg} />


</div>
<div className="col-xs-10" style={pText}>
<p style={PersonaliseTxt} >Personalize</p>
<p style={addPhoto}>Add a photo or name</p>
</div>
</div>

<div className="col-xs-12"  style={rowstyle}>

<div className="col-xs-10" style={subchild}>
<p  style={commontext} >update my profile</p>
<p  style={editContact} >Edit contact and login info</p>
</div>
</div>



<div className="col-xs-12" style={rowstyle1} >
<div className="col-xs-10" style={child2} >
<p style={ctext1}>Remember my Profile ID</p>
</div>
<div className="col-xs-2">
<img       
          src={ToggleIcon}
          alt={ToggleIcon}
          style={toggleiconstyle}
         />
</div>
</div>


<div className="col-xs-12" style={rowstyle1} >
<div className="col-xs-10" style={child2} >
<p style={ctext1}>Log in with Touch ID</p>
</div>
<div className="col-xs-2">
<img       
          src={ToggleIcon}
          alt={ToggleIcon}
          style={toggleiconstyle}
         />

</div>
</div>




</div>
     )
}
}

var toggleiconstyle = {

height : 50,

};
var rowstyle1 ={
  borderColor: '#ccc',
    borderWidth: .5,
    borderBottomStyle: 'solid',
};

var  rowstyle = {
         borderColor: '#ccc',
    borderWidth: .5,
    borderBottomStyle: 'solid',
        marginLeft: 5,
        marginTop: 30
    };

   var  child2 = {
        flexDirection: 'row',       
        flex: 1,
        alignItems: 'center',
       
        marginLeft: -7,
        padding: 10,
    };

var    child3 = {
        flexDirection: 'column',
        height: 60,
        //  borderBottomWidth: .25,
        //borderColor: 'black',
        marginTop: 10,
        marginLeft: -20,
        padding: 24
    };

    var   subchild ={
        flexDirection: 'row',
      
        flex: 1,
        alignItems: 'center',
        marginTop: -2,
        marginLeft: -90
    };


var   commontext ={
        fontSize: 14,
        fontWeight: 'normal',
             
    };


    var   ctext ={
      
        float : 'left',
    marginLeft: 8,
       
    };

     var   ctext1 ={
      
        float : 'left',
        marginLeft: 20,
       
    };


    var editContact = {
        marginTop: -10,
        fontSize: 10
    };

var addPhoto = {
        fontSize: 10,
         marginLeft : -188,
    };

   var  PersonaliseTxt = {
        fontSize: 14,
        fontWeight: 'normal',
        marginLeft : -190

    };


    var  pText = {
        flexDirection: 'column',
        paddingLeft: 7
    };

    var  personaliseImg = {
        width: 70,
        height: 70,
        marginTop: -20,      

    };
    