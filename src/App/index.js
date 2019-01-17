import React, { Component } from 'react';


import AppBar from './AppBar';
import './App.css';
import AppLayout from './AppLayout';
import WelcomeMessage from './WelcomeMessage';



class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar />
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;
