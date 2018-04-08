import React, { Component } from 'react';
import './Styles/HomePage.css';
import { Navigation } from './Navigation.jsx';
import { Hero } from './Hero.jsx';
import { LinkCards } from './LinkCards.jsx';
import { Summary } from './Summary.jsx';
import { Footer } from './Footer.jsx';

export class HomePage extends Component {
    render() {
        return(
            <div id="home">
                <Navigation />
                <Hero />
                <LinkCards />
                <Summary />
                <Footer />
            </div>
        );
    }
}