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
import CreateNewSetOfQuestions from './views/MySurveys/CreateNewSetOfQuestions'
import PreviewMySetOfQuestions from './views/MySurveys/PreviewMySetOfQuestions'


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
            <Route path={'/create-new-set-of-questions/'} exact component={CreateNewSetOfQuestions} />
            <Route path={'/preview-my-set-of-questions/'} exact component={PreviewMySetOfQuestions} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
