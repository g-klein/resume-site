import React, { Component } from 'react';
import './Styles/App.css';
import { Switch, Route} from 'react-router-dom';
import { HomePage } from '../';

export class App extends Component {
  render() {
    return (
        <div id="app" className="container">
          <Switch id="app">
            <Route exact path='/' component={HomePage}/>
            <Route path='/roster' component={this.Roster}/>
            <Route path='/schedule' component={this.Schedule}/>
            <Route path='/' render={() => {return <div>404</div>}}/>
          </Switch>
        </div>
    );
  }
}