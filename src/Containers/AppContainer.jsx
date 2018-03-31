import React, { Component } from 'react';
import '../App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import { HomePageContainer } from './';

export class AppContainer extends Component {
  render() {
    return (
      <Router>
          <HomePageContainer />
      </Router>
    );
  }
}