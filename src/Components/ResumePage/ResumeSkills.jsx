import React, { Component } from 'react';

export class ResumeSkills extends Component {
    render() {
        const skills = this.props.skills && 
            this.props.skills.map((skill, idx) =>{
                    return <li key={idx}>{skill}</li>;
                }
            );


        return(
            <ul className="skills">
                {skills}
            </ul>
        )
    }
}