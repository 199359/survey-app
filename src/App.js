import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './views/MainPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

class App extends Component {
  state ={
    isSideBarShowed: false
  }

  handleToggleButton = () => {
    this.setState({
      isSideBarShowed: !this.state.isSideBarShowed
    })
  }

  render() {
    return (
      <div className="App">
        <Sidebar
        handleToggleButton={this.handleToggleButton}
        isSideBarShowed={this.state.isSideBarShowed}
        />
        <Navbar
        isSideBarShowed={this.state.isSideBarShowed}
        handleToggleButton={this.handleToggleButton}
        />
        <MainPage/>
      </div>
    );
  }
}

export default App;
