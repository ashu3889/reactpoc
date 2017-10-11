import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './src/poc_component/home.js';
import { Provider } from "react-redux";
import { createStore } from "redux";
import Store from './src/reducer/reducer.js';
import { BrowserRouter } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
     <BrowserRouter>
        <Provider store={Store}>
                <Home/>
        </Provider> 
        </BrowserRouter>    
      </div>
    );
  }
}

export default App;
