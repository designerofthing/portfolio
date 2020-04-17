import React, { Component } from 'react';
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { UndrawDashboard } from 'react-undraw-illustrations';

class Projects extends Component {
    state = {
        projects: []
    };

    componentDidMount() {
        axios.get('./src/data/projects.json')
        .then(response => {
            this.setState({
                projects: response.data
            })
        })
    }
    render() {
        const projects = this.state.projects;
        let projectsList;

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return (
                    <div id={'project-' + project.id} key={project.id}>
                        <ProjectCard project={project} />
                    </div>
                );
            });
        }
    
        return(
            <div className='ui main container'>
                <div className="ui stackable two column grid">
                    <div class="column">
                        <UndrawDashboard primaryColor='#a34a28' height='200px' />
                    </div>
                    <div class="column">
                        <h1 className='ui header'>My Projects</h1>
                        <p>
                        As a junior web developer, I have begun the journey to master dark the art of coding.  Below is a small selection of my projects, but please visit my Github page for projects in Ruby, Javascript and React. 
                        </p><a href="https://github.com/designerofthing">github.com/designerofthing</a>
                    </div>
                </div>            
                <div className="ui stackable three column grid">{projectsList}</div>
            </div>
        );
    }
}

export default Projects;
