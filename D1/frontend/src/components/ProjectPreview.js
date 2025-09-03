import React from "react";

const ProjectPreview = ({ project }) => {
    return (
        <article>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>Contributors: {project.contributors.join(', ')}</p>
        </article>
    );
};

export default ProjectPreview;
