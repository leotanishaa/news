
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './NewsItem';
import Spinner from './Spinner';



export default class App extends Component {

  render() {
    
    return (
      <div>
        <Navbar></Navbar>
        
        <News pageSize={5}></News>
        
      </div>
    )
  }
}



