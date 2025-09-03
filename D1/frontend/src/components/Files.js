import React from 'react';

const dummyFiles = ['File1.txt', 'File2.txt', 'File3.txt'];

const Files = () => {
    return (
        <div>
            <h2>Files</h2>
            <ul>
                {dummyFiles.map((file, index) => (
                    <li key={index}>{file}</li>
                ))}
            </ul>
        </div>
    );
};

export default Files;
