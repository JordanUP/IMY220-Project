import React from "react";

const ProfilePreview = ({ profile }) => {
    return (
        <aside>
            <h2>{profile.name}</h2>
            <p>Bio: {profile.bio}</p>
        </aside>
    );
};

export default ProfilePreview;
