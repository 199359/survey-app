import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './views/MainPage'
import Navigation from './views/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateNewReseatch from './views/CreateNewResearch'
import GroupOfUsers from './views/GroupOfUsers'
import MySurveys from './views/MySurveys'


class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation/>
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
