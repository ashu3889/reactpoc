
import React, { Component } from "react";
import { connect } from "react-redux";

import { Switch, Route ,Link } from 'react-router-dom';
import PersonIcon from "./images/person.png";
import AlarmIcon from "./images/alarm.png";
import MoreIcon from "./images/more.png";



export default class MyAccount extends Component{

render(){


	 const data = [
            {
                id: 'Checking...1669',
                name: '$67.33',
            },
            {
                id: 'Retirement',
                name: '$1,418.66',
            },
            {
                id: 'Tax & Ins',
                name: '$1,418.66',
            },
            {
                id: 'Autumn',
                name: '$1,418.66',
            },
            {
                id: '123 Smiths',
                name: '$1,418.66',
            },
            {
                id: 'Reserve Line/Bu..1669',
                name: '$1,418.66',
            },
            {
                id: 'CreditLine..7427',
                name: '$1,418.66',
            },
            {
                id: 'Equity Line',
                name: '$1,418.66',
            }
        ];

           const listItems = data.map((d) =>
     //<li key={d.name}><Link to={`/userhome/${ d.link }`} >{d.name}</Link></li>
     <div className="col-xs-12" style={liststyle}>
<div className="col-xs-4"><span style={text}>{d.id}</span></div>
<div className="col-xs-8 pull-right">
<span style={rightText}>{d.name}</span>
<img       
          src={MoreIcon}
          alt={MoreIcon}
          style={icon1} />
</div>
</div>
      
     );

	return(
<div className="container" style={container}>

<div className="row">

<div className="col-xs-12" style={TextContainer}>
<p style={eveningText}>Good evening</p>
<p style={loggedText}>You last logged in 08/08/2017 7:32 AM CST</p>
</div>
</div>


<div className="row col-xs-12" style={wrapper}>

<div style={inputwrap}>
<div className="col-xs-2" style={lockiconwrap}>
<img       
          src={PersonIcon}
          alt={PersonIcon}
          style={icon} />

</div>
<div className="col-xs-6" style={RetailContainer}><p style={bankingText}>Retail Banking Product Offer</p> <p style={bankingText}>offer</p></div>
<div className="col-xs-1" ><button type="button" style={updatebutton} className="btn btn-warning">Update Now</button></div>

</div>
</div>


<div className="row col-xs-12" style={wrapper}>

<div style={inputwrap}>
<div className="col-xs-2" style={lockiconwrap}>
<img       
          src={PersonIcon}
          alt={PersonIcon}
          style={icon} />

</div>
<div className="col-xs-6" style={RetailContainer}><p style={bankingText}>Retail Banking Product</p> <p style={bankingText}>offer</p></div>
<div className="col-xs-1" ><button type="button" style={updatebutton} className="btn btn-warning">Update Now</button></div>

</div>
</div>

<div className="row">

<div className="col-xs-12" tyle={wrapperthree}>
<div className="col-xs-6"> <span style={accountsText}>My Accounts</span></div>

<div className="col-xs-4 pull-right" style={alarmwrap} >

<img       
          src={AlarmIcon}
          alt={AlarmIcon}
          style={arrowIcon} />
</div>
</div>


{listItems}





</div>


</div>
     )
}
}

 var text = {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 12,
        flex:1
    };
   var rightText = {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 12,
        alignItems:'flex-end',
        flex:.3

    };
    var icon1 = {
        width: 20,
        height: 20,
        float : 'right',

    };
   var liststyle ={
        flexDirection:'row',
        flex:1,
        padding: 10,
        marginTop: 3,
          borderColor: '#ccc',
    borderWidth: .5,
    borderBottomStyle: 'solid',
    };

var alarmwrap = {
    // paddingHorizontal: 211,
     //marginRight: 0,
    flex:0,
    margin:5,
    //marginTop: -32,
    justifyContent: "center",
  };

var  arrowIcon = {
    width: 25,
    height: 25,
    marginLeft: 50
  };

var  wrapperthree = {
    flexDirection:'row',
    borderBottomWidth:.5, 
    borderColor:'#ccc'
   };

var   accountsText = {
    fontSize: 20,
    color: '#fff',
    fontStyle: 'normal',
    flex:1,
    marginLeft:10
  };

var updatebutton ={
	marginTop : 20,
};

 var eveningText = {
    fontSize: 16,
    color: '#fff',
    marginLeft : -326,
  };

  var  TextContainer = {
    marginTop: 30,
    paddingBottom:40,
    marginLeft: 10,    
  };

  var loggedText = {
    fontSize: 12,
    color: '#fff',
    fontStyle: 'italic',
    marginLeft: -191,
  };

 var container = {
    flex: 1,
    backgroundColor: '#084891',
    margin: 0
  };

  var  wrapper= {
    marginVertical: 5,
    paddingHorizontal: 0,
    marginTop: 0,
    marginLeft: 3,
    marginRight: 3,
    borderWidth: 1,
    borderColor: 'white'
  };

var   inputwrap = {
    flexDirection: "row",
    height: 70,
    backgroundColor: '#2B3A51',
    width: 400,
    marginLeft: -18,
  };

var  lockiconwrap = {
    paddingHorizontal: -3,
    padding: 30,
    marginLeft: 5,
    justifyContent: "center"
  };

var  icon = { 
    width: 90,   
    marginTop: -17,
    marginLeft: -28,
    height : 50,
  };

var  RetailContainer ={
    paddingTop: 10,
    marginLeft: 2
  };

var bankingText = {
    fontSize: 12,
    color: '#fff',
    fontStyle: 'normal'
  };

var   updatewrap ={
    paddingHorizontal: -12,
    marginBottom: 20,
    marginLeft: 45,
    marginRight: 50,
    marginTop: 17,
    justifyContent: "center",
};
