import React, { useState, useEffect } from 'react';
import './AllSavedResources.scss';
import FolderComponent from '../FolderComponent/FolderComponent.Component';

const AllSavedResources = (props) => {
    const [folderList, setFolderList] = useState([]);

    useEffect(() => {
        setFolderList([
            {
                name: 'Folder1',
                count: 12
            }, {
                name: 'Folder2',
                count: 2
            }, {
                name: 'Folder3',
                count: 4
            }, {
                name: 'Folder4',
                count: 11
            }, {
                name: 'Folder5',
                count: 8
            }, {
                name: 'Folder1',
                count: 12
            }, {
                name: 'Folder2',
                count: 2
            }, {
                name: 'Folder3',
                count: 4
            }, {
                name: 'Folder4',
                count: 11
            }, {
                name: 'Folder5',
                count: 8
            }, {
                name: 'Folder1',
                count: 12
            }, {
                name: 'Folder2',
                count: 2
            }, {
                name: 'Folder3',
                count: 4
            }, {
                name: 'Folder4',
                count: 11
            }, {
                name: 'Folder5',
                count: 8
            }
        ]);
    }, [])

    return (
        <div className="all-saved-resource-container">
            <div className="all-saved-resource-header">
                <h3>Saved resources</h3>
                <div className="all-saved-resource-options">
                    
                </div>
            </div>
            <div className="folder-container">
                {folderList && folderList.length ?
                    folderList.map((item) => {
                        return <FolderComponent folderDetails={item} />
                    })
                    : ''}
            </div>
        </div>
    );
}

export default AllSavedResources;