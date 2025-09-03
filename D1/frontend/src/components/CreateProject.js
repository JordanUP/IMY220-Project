import React from "react";

const CreateProject = () => {
    return (
        <form>
            <input type="text" placeholder="Project Name" />
            <textarea placeholder="Project Description"></textarea>
            <button type="submit">Create Project</button>
        </form>
    );
};

export default CreateProject;
