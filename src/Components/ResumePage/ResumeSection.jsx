import React, { Component } from 'react';

export class ResumeSection extends Component {
    render() {
        return (
            <section>
                <header>{this.props.header}</header>
                {this.props.children}
            </section>
        );
    }
}