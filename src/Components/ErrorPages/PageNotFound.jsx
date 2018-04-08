import React, { Component } from 'react';
import "./Styles/PageNotFound.css";
import { Link } from 'react-router-dom';

export class PageNotFound extends Component {
    render() {
        return(
            <div className="page-not-found">
                <i className="fa fa-exclamation-circle" />
                <p>Page not found.</p>
                <p><Link to="/">Return home</Link></p>
            </div>
        )
    }
}