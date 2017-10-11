import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import { Switch, Route ,Link } from 'react-router-dom';
import logo from '../images/Logo_i7.png';
import circleIcon from '../images/circle.png';
import lockIcon from '../images/security_64px.png';
import arrowIcon from '../images/arrow.png';
import questionIcon from "../images/question.png";
import locatorIcon from "../images/locator.png";

export default class Login extends Component{

static contextTypes = {
      router: React.PropTypes.object
    };

     navigateToHome(){

     	
    	 this.context.router.history.push('/userhome');
  };


render(){
   
	return(
	

<div className="container" style={headerStyle}>

 <div className="page-header" >
    <img src={logo} alt={"logo"}/>   
  </div>

    <div className="row">
        <div className="col-sm-12"> 
         <img src={circleIcon} alt={"circleIcon"} />
       </div> 

       <div className="col-sm-12" style={helloTextContainer}>
         <p style={helloText}>Hello</p>
        </div>

        <div className="col-sm-12 col-xs-12">       

         <div  className="input-group col-md-3 col-md-push-5 col-xs-push-1 " >
          <img className="col-md-2 col-xs-2" style={iconheight} src={lockIcon} alt={"circleIcon"} />
          <input style={iconheight} className="col-md-8 col-xs-6" type="text" placeholder="Search1" id="inputGroup"/>
           <img 
           className="col-md-2 col-xs-2"
           style={arrowIconheight}
            src={arrowIcon}
            alt={"arrowIcon"}
            onClick={() => this.navigateToHome()}
             />
         </div>

<div style={idwrapper} className="col-sm-12 col-xs-12" >
         <p style={idinput}>Forgot ID?     |      New User?</p>
 </div>


    <div className="col-xs-12 " style={locationwrapper}>
                    <div className="col-xs-4 col-xs-push-3" style={iconwrapLoc}>
                     <img style={locatoriconwrapper} src={locatorIcon} alt={"locatorIcon"} />
                    </div>
                    <div className="col-xs-4"  style={iconwrapQues}>
                     <img style={locatoriconwrapper} src={questionIcon} alt={"questionIcon"} />
                  </div>
     </div>

     <div STYLE={marginBtnView} className="col-xs-12">
      <button style={btnBtm} type="button" className="btn btn-primary"> Authenticate with Touch ID</button>
    </div>

     <div className="col-xs-12 " style={bottomview}>
                <p style={textinput}>Online Privacy and Security | Legal Disclosures</p>
                <p style={textinput}>@2017 U.S Bank Member FDIC</p>
      </div>

    </div>


    </div>
</div>


     )
}
}


var headerStyle = {
 backgroundColor: '#084891',
};

var circlewrap = {
        paddingTop: 30,
        alignItems: "center"
    };

  var  content = {
         alignItems:'center',
    };

    var  helloTextContainer = {
                alignItems:"center"
    };

   var helloText = {
        fontSize: 25,
        fontWeight: 'bold',
        color:'#fff'
    };

   var  lockiconwrap = {
        paddingHorizontal: 7,
        padding:30,
        marginLeft: 5,
        justifyContent: "center"
    };

     var inputwrap = { 
        height: 40, 
        backgroundColor: '#84A6CB',
    };

    var iconheight = { 
        height: 40, 
        backgroundColor: '#84A6CB',       
     };
    var arrowIconheight = { 
        height: 40, 
        marginLeft : -12,
     };
     

     var  idinput = {
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white',
        //marginTop: -70
    };

    var idwrapper = {
       // justifyContent: "center",
      marginTop: 40,       
    };

     var locationwrapper = {
        height: 40,
        justifyContent: "center",        
    };

     var iconwrapLoc = {  
       
        paddingRight:30
    };

     var locatoriconwrapper = {
        width: 40,
        height: 40,        
    };
    
    var iconwrapQues= {
        paddingHorizontal: 7,
       // marginLeft: 48,
        paddingLeft:75
    };

   var btnBtm = {
        borderRadius: 3,
        marginTop:20,
        paddingTop: 15,
        width:250,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#0391D7',
        alignItems:"center", 

  };

  var bottomview={
        marginTop:30
    };

  var marginBtnView ={
  	marginBottom: 30,
  };  

  var textinput = {
        fontWeight: 'bold',
        textAlign: "center",
        fontSize: 10,
        color: 'white',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#FFF",
    }; 
    





