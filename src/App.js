
import './App.css';
import Navbar from './components/Navbar';

import Grid from './components/Grid';


import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Grid/></>
    )
  }
}

export default App;