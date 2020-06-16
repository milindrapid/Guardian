import React from 'react';
import './FolderComponent.scss';

const FolderComponent = (props) => {
    return (
        <div className="folder-item">
            <p className="folder-name">{props.folderDetails.name}</p>
            <p className="folder-content">{props.folderDetails.count} resources</p>
        </div>
    );
}

export default FolderComponent;