import React, { Component } from 'react';
import './Styles/HomePage.css';
import { Navigation } from './Navigation.jsx';
import { Hero } from './Hero.jsx';
import { LinkCards } from './LinkCards.jsx';
import { Summary } from './Summary.jsx';

export class HomePage extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <Hero />
                <LinkCards />
                <Summary />
            </div>
        );
    }
}