import React, { Component } from 'react';
import './Styles/Hero.css';

export class Hero extends Component {
    render() {
        return <div id="hero">
            <div id="banner">
                <h1>GREG KLEIN</h1>
                <h2>Full Stack Engineer</h2>
                <hr />
                <p className="skills">C#, React, HTML 5, CSS/SCSS, Docker, Nginx, AWS, SQL, MongoDB</p>
            </div>
        </div>
    }
}