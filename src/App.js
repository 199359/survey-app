import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './views/MainPage'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateNewReseatch from './views/CreateNewResearch'
import GroupOfUsers from './views/GroupOfUsers'
import MySurveys from './views/MySurveys'


class App extends Component {
  state = {
    isSideBarShowed: false
  }

  handleToggleButton = () => {
    this.setState({
      isSideBarShowed: !this.state.isSideBarShowed
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar
            handleToggleButton={this.handleToggleButton}
            isSideBarShowed={this.state.isSideBarShowed}
          />
          <Navbar
            isSideBarShowed={this.state.isSideBarShowed}
            handleToggleButton={this.handleToggleButton}
          />
          <Route path={'/'} exact component={MainPage} />
          <Route path={'/create-new-research/'} exact component={CreateNewReseatch} />
          <Route path={'/group-of-users/'} exact component={GroupOfUsers} />
          <Route path={'/my-surveys/'} exact component={MySurveys} />
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
