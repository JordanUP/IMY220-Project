import React from 'react';
import { useParams } from 'react-router-dom';
import Profile from '../components/Profile';
import EditProfile from '../components/EditProfile';
import ProjectList from '../components/ProjectList';
import Friends from '../components/FriendsList';
import CreateProject from '../components/CreateProject';

const dummyUser = { name: 'User Name', bio: 'User Bio' };

const ProfilePage = () => {
  const { id } = useParams();  // Dynamic ID (dummy for now)
  console.log(`Profile ID: ${id}`);  // For testing

  return (
    <main>
      <Profile user={dummyUser} />
      <EditProfile />
      <ProjectList />
      <Friends />
      <CreateProject />
    </main>
  );
};

export default ProfilePage;