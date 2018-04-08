import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LinkCard } from './LinkCard.jsx';
import './Styles/LinkCards.css';

export class LinkCards extends Component {
    render() {
        return(
            <div className="link-card-container-outer">
                <Row id="link-card-container">
                    <Col xs={12} sm={4}><LinkCard icon={"fa fa-file-code-o"} description={"RESUME"} href={"/resume"} /></Col>                
                    <Col xs={12} sm={4}><LinkCard icon={"fa fa-github"} description={"GITHUB"} href={"https://github.com/g-klein"} /></Col>
                    <Col xs={12} sm={4}><LinkCard icon={"fa fa-file-code-o"} description={"BLOG"} href={"https://medium.com/@gregmklein"} /></Col>            
                </Row>
            </div>
        );
    }
}