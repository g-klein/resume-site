import React, { Component } from 'react';
import './Styles/Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div id="footer">
                &copy; Greg Klein 2018. <a href="https://github.com/g-klein/resume-site" target="_blank" rel="noopener noreferrer">Source</a>
            </div>
        )
    }
}