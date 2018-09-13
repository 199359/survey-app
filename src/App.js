import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './views/MainPage'
import Navigation from './views/Navigation'
import { BrowserRouter, Route } from 'react-router-dom'
import CreateNewReseatch from './views/CreateNewResearch'
import GroupOfUsers from './views/GroupOfUsers'
import MySurveys from './views/MySurveys'
import { Provider } from 'react-redux'
import { store } from './store'


class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Navigation />
            <Route path={'/'} exact component={MainPage} />
            <Route path={'/create-new-research/'} exact component={CreateNewReseatch} />
            <Route path={'/group-of-users/'} exact component={GroupOfUsers} />
            <Route path={'/my-surveys/'} exact component={MySurveys} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
