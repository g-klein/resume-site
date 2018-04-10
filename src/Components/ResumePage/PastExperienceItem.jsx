import React, { Component } from 'react';

export class PastExperienceItem extends Component {
    constructor(){
        super();
        this.state = {collapsed: false};
        this.onCaretClick = this.onCaretClick.bind(this);
    }

    onCaretClick(){
        this.setState({collapsed: !this.state.collapsed});
    }

    render() {
        const caretName = this.state.collapsed ? "fa fa-caret-right" : "fa fa-caret-down";
        const itemClass = "past-experience-item" + (this.state.collapsed ? " collapsed" : "");
        const caret = this.props.collapsible ? <i onClick={this.onCaretClick} className={caretName} /> : null;

        return(
            <div className={itemClass}>
                <div className="past-experience-header">
                    <span className="title">{caret} {this.props.title}</span>
                    <span className="company">{this.props.company}</span>
                    <span className="times">{this.props.times}</span>
                </div>
                {this.props.children}
            </div>
        )
    }
}