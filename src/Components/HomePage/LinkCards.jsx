import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LinkCard } from './LinkCard.jsx';
import './Styles/LinkCards.css';
import Anime from 'react-anime';

export class LinkCards extends Component {
    render() {
        return(
            <div className="link-card-container-outer">
                <Row id="link-card-container">
                    <Anime
                        easing="easeInQuad"
                        delay={(el, index) => {
                            return 2500 + index * 400;
                        }}
                        opacity={[0, 1]}
                        duration={1500}
                    >
                        <div className="animated"><Col xs={12} sm={4}><LinkCard icon={"fa fa-file-code-o"} description={"RESUME"} href={"/resume"} /></Col></div>                
                        <div className="animated"><Col xs={12} sm={4}><LinkCard icon={"fa fa-github"} description={"GITHUB"} href={"https://github.com/g-klein"} /></Col></div>
                        <div className="animated"><Col xs={12} sm={4}><LinkCard icon={"fa fa-file-code-o"} description={"BLOG"} href={"https://medium.com/@gregmklein"} /></Col></div>
                    </Anime>
                </Row>
            </div>
        );
    }
}