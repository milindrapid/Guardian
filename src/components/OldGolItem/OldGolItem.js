import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../fontawesome';

const OldGolItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    p {
        margin-left: 1.75rem;
        margin-top: 0.75rem;
        font-style: normal;
        font-weight: normal;
        font-size: 1rem;
        line-height: 1.375rem;
    }
`;

const OldGolItemHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.375rem;
        text-decoration: underline;
        color: #0D3F5E;
        cursor: pointer;
    }
`;

const OldGolItemIcon = styled.span`
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    text-align: center;
    font-style: normal;
    font-weight: 900;
    font-size: 1rem;
    line-height: 1.125rem;
    margin-right: 0.5rem;
`;

const OldGolItem = (props) => {
    const { className } = props;
    const { 
        itemName,
        itemDescription,
        iconName,
        redirectUrl
     } = props.oldGolItem;

     return (
         <OldGolItemContainer className={className}>
             <OldGolItemHeader>
                <OldGolItemIcon>
                    <FontAwesomeIcon icon={iconName} />
                </OldGolItemIcon>
                <a href={redirectUrl}>{itemName}</a>
             </OldGolItemHeader>
             <p>{itemDescription}</p>
         </OldGolItemContainer>
     )
};

OldGolItem.propTypes = {
    className: PropTypes.string,
    oldGolItem: PropTypes.shape({
        itemName: PropTypes.string.isRequired,
        itemDescription: PropTypes.string.isRequired,
        iconName: PropTypes.string.isRequired,
        redirectUrl: PropTypes.string
    })
};

OldGolItem.defaultProps = {
    oldGolItem: {
        redirectUrl: "/",
    }
};

export default OldGolItem;