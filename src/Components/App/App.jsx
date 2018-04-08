import React, { Component } from 'react';
import './Styles/App.css';
import { Switch, Route} from 'react-router-dom';
import { HomePage, ResumePage, PageNotFound } from '../';

export class App extends Component {
  render() {
    return (
        <div id="app">
          <Switch id="app">
            <Route exact path='/' component={HomePage} />
            <Route path='/resume' component={ResumePage} />
            <Route path='/' component={PageNotFound} />
          </Switch>
        </div>
    );
  }
}