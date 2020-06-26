import React from 'react';
import styled from 'styled-components';
import './RecentData.scss';

const RecentDataContainer = styled.div`
    width: 20rem;
    padding: 1rem;
    border: 1px solid;
    flex: 1;
    margin: 0.5rem;
    h5 {
        font-weight: 700;
        margin-bottom: 1rem;
    }
`;
const RecentDataItem = styled.div`
    padding: 1rem 0 1.5rem 0;
    border-bottom: 1px solid #a3a39f;
    p {
        font-size: 0.9rem;
        margin-bottom: 0;
    }
    p.recent-item-name {
        font-weight: 700;
        text-decoration: underline;
    }
    &:last-child {  
        padding-bottom: 0;
        border-bottom: none;
    }
`;

const RecentData = (props) => {
    return (
        <RecentDataContainer>
            <h5>{props.title}</h5>
            {props.itemList.map((item) => {
                return (
                    <RecentDataItem key={item.itemId}>
                        <p className="recent-item-name">{item.itemTitle}</p>
                        <p>{item.itemDescription}</p>
                    </RecentDataItem>
                );
            })}
        </RecentDataContainer>
    );
}

export default RecentData;