import React from 'react';
import ProjectPreview from './ProjectPreview';

const dummyProjects = [
    { name: 'Proj1', description: 'Desc1', contributors: ['User'] },
    { name: 'Proj2', description: 'Desc2', contributors: ['User2'] },
    { name: 'Proj3', description: 'Desc3', contributors: ['User3'] },
];

const ProjectList = () => {
    return (
        <div>
            {dummyProjects.map((project, index) => (
                <ProjectPreview key={index} project={project} />
            ))}
        </div>
    );
};

export default ProjectList;
