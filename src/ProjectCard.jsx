import React from "react";

const ProjectCard = ({ project }) => {
    return(
      <>
        <div class="ui card">
            <div class="image">
                <img src={project.image} />
            </div>
            <div class="content">
                <h3 class="ui header">{project.name}</h3>

                <div class="description">{project.description}</div>
                <div class="link"> 
                    <a href={project.link}>
                    {project.linkText}
                    </a>    
                </div>
            </div>
        </div>
    </>
    );
};

export default ProjectCard;