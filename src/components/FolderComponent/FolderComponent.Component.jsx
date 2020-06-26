import React from 'react';
import styled from 'styled-components';

const FolderItem = styled.div`
    padding: 1.5rem 3.5rem;
    background-color: #E9E9E7;
    text-align: center;
    margin: 0.5rem 0;
`;
const FolderName = styled.p`
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1rem;
    text-decoration: underline;
`;

const FolderComponent = (props) => {
    return (
        <FolderItem>
            <FolderName>{props.folderDetails.name}</FolderName>
            <p>{props.folderDetails.count} resources</p>
        </FolderItem>
    );
}

export default FolderComponent;