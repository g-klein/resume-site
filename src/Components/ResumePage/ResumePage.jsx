import React, { Component } from 'react';
import { ResumeSection } from './ResumeSection.jsx';
import { ResumeSkills } from './ResumeSkills.jsx';
import { PastExperienceItem } from './PastExperienceItem.jsx';
import './Styles/Resume.css';

export class ResumePage extends Component {
    render() {
        return(
            <div id="resume">
                <section>
                    <h1>Greg Klein</h1>
                    <h2>Full Stack Engineer</h2>
                    <h3>67 Farragut Avenue, Somerville, MA 02144</h3>
                    <ul className="links">
                        <li><i className="fa fa-external-link" /><a href="//TODO: find the link to put here" target="_blank" rel="noopener noreferrer">TODO: find the link to put here</a></li>
                        <li><i className="fa fa-envelope-o left-space" /><a href="mailto:gregmklein@gmail.com">gregmklein@gmail.com</a></li>
                    </ul>
                </section>
                <ResumeSection header="SKILLS">
                    <ResumeSkills skills={["C#", "React", "HTML 5", "CSS/SCSS", "SQL", "MongoDB", "Docker", "NGINX", "AWS", "Selenium"]}/>
                </ResumeSection>
                <ResumeSection header="WORK EXPERIENCE">
                    <PastExperienceItem title="Senior Automation Engineer" company="Go Ahead Tours, Cambridge, MA" times="Oct 2013 - Oct 2016" collapsible>
                        <ul>
                            <li>Develop and maintain all automated web tests using SpecFlow and Selenium for user facing website and internal CRM tool.</li>
                            <li>Develop and maintain API level tests written with FrisbyJS for various REST microservices</li>
                            <li>Coordinate with developers across several teams to ensure that QA automation needs are fulfilled and new features are being fully tested.</li>
                        </ul>
                    </PastExperienceItem>
                    <PastExperienceItem title="QA Engineer" company="Vistaprint, Lexington, MA" times="Oct 2011 - Oct 2013" collapsible>
                        <ul>
                            <li>Developed domain expertise for several aspects of the code base</li>
                            <li>QA support for project execution
                                <ul>
                                    <li>Develop test plans to support development projects</li>
                                    <li>Coordinate with other QA teams to ensure other domain experts have adequate testing</li>
                                </ul>
                            </li>
                            <li>QA Automation
                                <ul>
                                    <li>Helped to build out QA Automation framework for testing complex code components, such as upload processing, dynamic image rendering, and content platform.</li>
                                    <li>Developed automation for testing areas of ownership. Gained experience with writing system tests, integration tests, web service testing, UI automation and User Acceptance Tests.</li>
                                    <li>Acted as the primary automation resource for my team</li>
                                </ul>
                            </li>
                        </ul>
                    </PastExperienceItem>
                    <PastExperienceItem 
                        title="Content Management Specialist" 
                        company="Journal of Visualized Experiments, Somerville, MA" 
                        times="Feb - Oct, 2011"
                        collapsible>
                        <ul>
                            <li>Coordinated to manage online content, including images and text to be used on the website</li>
                            <li>Developed and tested small applications used on the website</li>
                        </ul>
                    </PastExperienceItem>
                    <PastExperienceItem title="IT Coodrinator" company="Exploration Summer Programs, Southborough, MA" times="Summer 2010" collapsible>
                        <ul>
                            <li>Set up computers for use in classrooms and provided technical support throughout the summer.</li>
                            <li>Taught a computer programming course for 6th and 7th graders.</li>
                        </ul>
                    </PastExperienceItem>
                </ResumeSection>
                <ResumeSection header="EDUCATION">
                    <PastExperienceItem title="Colby College" company="Waterville, ME" times="2006 - 2010">
                        <div className="education">
                            <p className="education-item"><strong>Major:</strong> Chemistry</p>
                            <p className="education-item"><strong>Minor:</strong> Computer Science</p>
                        </div>
                    </PastExperienceItem>
                </ResumeSection>
                <ResumeSection header="COURSEWORK">
                    <p className="courses">Introduction to Computer Science; Data Structures and Algorithms; Web Design; Computer Graphics and Advanced Computer Graphics; Computer Music; Game Design; Computer Organization.</p>
                </ResumeSection>
                <ResumeSection header="HOBBIES">
                    <p className="hobbies">Hiking, Game Dev, Outdoor Photography</p>
                </ResumeSection>
            </div>
        )
    }
}