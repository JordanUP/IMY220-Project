import React from 'react';
import ProfilePreview from './ProfilePreview';

const dummyFriends = [
    { name: 'Friend1', bio: 'Bio1' },
    { name: 'Friend2', bio: 'Bio2' },
    { name: 'Friend3', bio: 'Bio3' },
];

const Friends = () => (
  <aside>
    <h3>Friends</h3>
    {dummyFriends.map((profile, index) => (
      <ProfilePreview key={index} profile={profile} />
    ))}
  </aside>
);

export default Friends;