import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import { Switch, Route ,Link } from 'react-router-dom';
import Demo from './demo.js';
import Presentation from './presentation.js';
import MenuIcon from "../images/menu.png";

class ProfileHeader extends Component{

static contextTypes = {
      router: React.PropTypes.object
    };
    

  navigateToHome(){     	
    	 this.context.router.history.push('/userhome');
  };

render(){

	if(this.props.headerdata.length >0){
		return (
			<div className ="container" style={container}>

			<div  className ="row">
			<div className ="col-xs-2" style={menucontainer}>
<img       
          src={MenuIcon}
          alt={MenuIcon}
          style={menustyle}
           onClick={() => this.navigateToHome()}
           />
</div>
<div className ="col-xs-10" style={logocontainer}><p style={Prferencetxt}>{this.props.headerdata}</p></div>
</div>
</div>
)

		
	}

	else{
		return <p>Profile header</p>;
	}     
}
}

function mapStateToProps(state) {

  return { headerdata: state.headerdata };
}

export default connect(mapStateToProps, {})(ProfileHeader);


var menustyle ={

	 height : 50
};

var  Prferencetxt = {
        fontSize: 24,
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",
        color: '#fff',

    };

    var menucontainer ={
backgroundColor: '#0D427E',

    };

    var  logocontainer = {
        
        backgroundColor: '#0D427E',
        justifyContent: "center",
        alignItems: "center",
        height : 50

    };

    var  container = {
       
        backgroundColor: '#e0e0d1',
       height : 50
    };





