import React from 'react';
import { useParams } from 'react-router-dom';
import Project from '../components/Project';
import Files from '../components/Files';
import Messages from '../components/Messages';
import EditProject from '../components/EditProject';

const dummyProject = { name: 'Project Name', description: 'Project Desc' };

const ProjectPage = () => {
  const { id } = useParams();  // Dynamic ID
  console.log(`Project ID: ${id}`);

  return (
    <main>
      <Project project={dummyProject} />
      <Files />
      <Messages />
      <EditProject />
    </main>
  );
};

export default ProjectPage;