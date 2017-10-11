import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts} from '../action/index.js';
import { Switch, Route ,Link } from 'react-router-dom';
import Demo from './demo.js';
import SendMoney from './user/send_money.js';
import MyAccount from './user/myaccount.js';
import Transfer from './user/transfer.js';
import Payments from './user/payments.js';
import Help from './user/help.js';
import Settings from './user/setting.js';
import Statements from './user/statement.js';
import Preference from './user/preference.js';

export default class ProfileContent extends Component{

render(){
	return(
		<div>     
		<Route path='/userhome/myaccount' component={MyAccount}/>
		<Route path='/userhome/transfer' component={Transfer}/>
		<Route path='/userhome/payments' component={Payments}/>
		<Route path='/userhome/sendmoney' component={SendMoney}/>
		<Route path='/userhome/help' component={Help}/>
		<Route path='/userhome/settings' component={Settings}/>
        <Route path='/userhome/statements' component={Statements}/> 
        <Route path='/userhome/preference' component={Preference}/>  
     </div>
     )
}
}


