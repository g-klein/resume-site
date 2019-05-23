import React, { Component } from 'react';

export class LinkCard extends Component {
    constructor(){
        super();
        this.state = {lit: false};
    }

    componentDidMount(){
        /*setInterval(() => {
            this.setState({lit: !this.state.lit});
        }, 1000);*/
    }

    render() {
        const cardClass = "link-card" + (this.state.lit ? " lit" : "");

        return (
            <a className={cardClass} href={this.props.href}>
                <i className={this.props.icon} aria-hidden="true"></i>
                <br />
                <span>{this.props.description}</span>
            </a>
        );
    }
}