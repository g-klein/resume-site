import React, { Component } from 'react';
import './Styles/HomePage.css';
import { Navigation } from './Navigation.jsx';
import { Hero } from './Hero.jsx';

export class HomePage extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <Hero />
            </div>
        );
    }
}