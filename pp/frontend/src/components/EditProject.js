import React from 'react';

const EditProject = () => {
    return (
        <form>
            <h2>Edit Project</h2>
            <input type="text" placeholder="New Project Name" />
            <textarea placeholder="New Project Description"></textarea>
            <button type="submit">Save Changes</button>
        </form>
    );
};

export default EditProject;
