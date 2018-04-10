import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Nav.css';
import {Row, Col} from 'react-bootstrap';

export class Navigation extends Component {
    constructor(props) {
        super(props)
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {};
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let doc = document.documentElement;
        let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        
        if(top > 0 && !this.state.scrolled){
            this.setState({scrolled: true});
        } else if (top <= 0 && this.state.scrolled) {
            this.setState({scrolled: false});
        }
    }

    render() {
        let navClassName = this.state.scrolled ? "scrolled" : "";
        return(            
            <Row id="nav-row" className={navClassName}>
                <Col xs={12}>
                    <nav>
                        <span id="home-link"><Link to="/">#HOME</Link></span>
                        <ul id="nav-links">
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </nav>
                </Col>
            </Row>
        );
    }
}