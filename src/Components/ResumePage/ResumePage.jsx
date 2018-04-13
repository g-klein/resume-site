import React, { Component } from 'react';
import { ResumeSection } from './ResumeSection.jsx';
import { ResumeSkills } from './ResumeSkills.jsx';
import { PastExperienceItem } from './PastExperienceItem.jsx';
import './Styles/Resume.css';
import Resume from "../../Static/Resume.pdf";

export class ResumePage extends Component {
    render() {
        return(
            <div id="resume">
                <section>
                    <h1>Greg Klein</h1>
                    <h2>Full Stack Engineer</h2>
                    <h3>67 Farragut Avenue, Somerville, MA 02144</h3>
                    <ul className="links">
                        <li><i className="fa fa-external-link" /><a href="http://www.gklein.online" target="_blank" rel="noopener noreferrer">http://www.gklein.online</a></li>
                        <li><i className="fa fa-envelope-o left-space" /><a href="mailto:gregmklein@gmail.com">gregmklein@gmail.com</a></li>
                        <br />
                        <li><i className="fa fa-download left-space" /><a href={Resume} target="_blank">Download as PDF</a></li>
                    </ul>
                </section>
                <ResumeSection header="SKILLS">
                    <ResumeSkills skills={["C#", "React", "Redux", "HTML 5", "CSS/SCSS", "SQL", "MongoDB", "Docker", "NGINX", "AWS", "Selenium"]}/>
                </ResumeSection>
                <ResumeSection header="WORK EXPERIENCE">
                    <PastExperienceItem title="Web Developer" company="Go Ahead Tours, Cambridge, MA" times="Oct 2016 - Present" collapsible>
                        <ul>
                            <li>Write and maintain full stack customer facing web applications in an agile environment</li>
                            <li>Build front-end applications using React
                                <ul>
                                    <li>Implement fully responsive designs with bootstrap and custom SCSS</li>
                                    <li>Interface with backend services</li>
                                    <li>Manage complex application state using Redux</li>
                                </ul>
                            </li>
                            <li>Implement and maintain backend microservices using .NET core
                                <ul>
                                    <li>Implement REST APIs consumed by multiple teams</li>
                                    <li>Modify existing APIs to support new features and requirements</li>
                                </ul>
                            </li>
                            <li>Build tools to assist with data migrations from legacy systems</li>
                        </ul>
                    </PastExperienceItem>
                    <PastExperienceItem title="Senior Automation Engineer" company="Go Ahead Tours, Cambridge, MA" times="Oct 2013 - Oct 2016" collapsible>
                        <ul>
                            <li>Implemented and maintained full suite of automated tests for web application and internal CRM
                                <ul>
                                    <li>Tests were written in C# using SpecFlow framework</li>
                                </ul>
                            </li>
                            <li>Integrated automated tests with C/I workflow
                                <ul>
                                    <li>Created a TeamCity configuration to run tests in AWS on demand</li>
                                    <li>Implemented a test results dashboard using .NET MVC framework for viewing recent test results</li>
                                </ul>
                            </li>
                            <li>Coordinated with developers across several teams to ensure that QA automation needs are fulfilled and new features are being fully tested</li>
                        </ul>
                    </PastExperienceItem>
                    <PastExperienceItem title="QA Engineer" company="Vistaprint, Lexington, MA" times="Oct 2011 - Oct 2013" collapsible>
                        <ul>
                            <li>QA support for project execution
                                <ul>
                                    <li>Develop test plans to support development projects</li>
                                    <li>Coordinate with other QA teams to ensure other domain experts have adequate testing</li>
                                </ul>
                            </li>
                            <li>QA Automation
                                <ul>
                                    <li>Gained experience with writing system tests, integration tests, web service testing, UI automation and User Acceptance Tests</li>
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
                            <li>Set up computers for use in classrooms and provided technical support throughout the summer</li>
                            <li>Taught a computer programming course for 6th and 7th graders</li>
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
                    <p className="hobbies">Hiking, Video Game Development, Outdoor Photography</p>
                </ResumeSection>
            </div>
        )
    }
}