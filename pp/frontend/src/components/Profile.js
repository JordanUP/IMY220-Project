import React from "react";

const Profile = ({ user }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
        </div>
    );
};

export default Profile;
