import React from "react";
import ProjectPreview from "./ProjectPreview";

const Projects = [{ name: 'Proj1', description: 'Desc1', contributors: ['User'] }, { name: 'Proj2', description: 'Desc2', contributors: ['User2'] }]

const Feed = () => {
    return (
        <main>
            <h2>Project Feed</h2>
            {Projects.map((proj, i) => <ProjectPreview key={i} project={proj} />)}
        </main>
    );
};

export default Feed;