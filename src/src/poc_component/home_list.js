import React, { Component } from "react";
import { connect } from "react-redux";
import { changeProfileHeader} from '../action/index.js';
import { Switch, Route ,Link } from 'react-router-dom';
import accountsIcon from "../images/MyAccounts.png";
import transferIcon from "../images/Transfer.png";
import paymentsIcon from "../images/Savemoney.png";
import sendMoneyIcon from "../images/Sendmoney.png";
import helpIcon from "../images/Help.png";
import settingsIcon from "../images/Settings.png";
import statementsIcon from "../images/docs.png";





const accountsIcon1 = require("../images/MyAccounts.png");

class UserHomeList extends Component{
static contextTypes = {
      router: React.PropTypes.object
    };
 


render(){
   const data =[
   {"id" : 1,"name":"My Accounts" , "link" :"presentation" , "src" :accountsIcon ,"url":'myaccount'},
   {"id" : 2,"name":"Transfers", "link" :"demo" , "src" :transferIcon,"url":'transfer'},
   {"id" : 3,"name":"Payments", "link" :"demo" , "src" :paymentsIcon ,"url":'payments'},
   {"id" : 4,"name":"Send Money", "link" :"demo" , "src" :sendMoneyIcon ,"url":'sendmoney'},
   {"id" : 5,"name":"Help", "link" :"demo" , "src" :helpIcon ,"url":'help'},
   {"id" : 6,"name":"Settings", "link" :"demo" , "src" :settingsIcon ,"url":'settings'},
   {"id" : 7,"name":"Statements Docs", "link" :"demo" , "src" :statementsIcon ,"url":'statements'},

   ];


    const listItems = data.map((d) =>
     //<li key={d.name}><Link to={`/userhome/${ d.link }`} >{d.name}</Link></li>
     
       <div className="row col-md-8 col-xs-8 col-xs-push-2" key={d.id} style={sliderOptions}>
        <div className='col-xs-1'>
        <img       
          src={d.src}
          alt={d.src}
          style={sliderIcon}
         

        //resizeMode="contain"s
        />
        </div>
        <div className='col-xs-8'>
        <Link onClick = {() => this.props.changeProfileHeader(d.name)} to= {`userhome/${d.url}`}  style={item}>{d.name}</Link>
        </div>
      </div>
     );

    return (
      <div className="container" style= {menu}>
      {listItems }
      </div>
    );
}
}


function mapStateToProps(state) {
  return { posts: state.headerdata };
}

export default connect(mapStateToProps, { changeProfileHeader })(UserHomeList);

var  menu = {   
    backgroundColor: '#084891',
   
  };

var  sliderOptions = {   
    borderBottomWidth: .25,
    height: 50,
    alignItems: "center",
    marginLeft: 10,
    borderColor: '#ccc',
    borderWidth: .5,
    borderBottomStyle: 'solid',
    marginTop : 15,
  };

var  item = {
    fontSize: 14,
    fontWeight: 'normal',
    color: "#FFF",
    float: 'left',
   
  };

  var sliderIcon = {
    width: 20,
    height: 20,
  };

