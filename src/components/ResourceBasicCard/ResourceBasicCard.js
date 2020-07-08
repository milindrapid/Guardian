import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ResourceBasicCard.fa';

const ResourceCardContainer = styled.div`
    dispaly: flex;
    flex-direction: column;
    padding: 1rem;
    border: 1px solid #E9E9E7;
`;

const ResourceCardHeader = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 0.5rem;
    span {
        display: block;
        width: 1rem;
        height: 1rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 900;
        line-height: 1.125rem;
        color: #0D3F5E
    }
`;

const ResourceCardBody = styled.div`
    padding-top: 0.5rem;
    p {
        font-style: normal;
        font-weight: bold;
        font-size: 1rem;
        line-height: 1.5rem;
        color: #2B2B2B;
    }
`;

const ResourceBasicCard = (props) => {
    const { className, onItemClick } = props;
    const {
        resourceCardTypeIcon,
        resourceCardTitle,
    } = props.resourceCardDetails;
    return (
        <ResourceCardContainer className={className} onClick={onItemClick}>
            <ResourceCardHeader>
                <span><FontAwesomeIcon icon={['fa', resourceCardTypeIcon]} /></span>
                <span><FontAwesomeIcon icon={['fa', 'ellipsis-h']} /></span>
            </ResourceCardHeader>
            <ResourceCardBody>
                <p>{resourceCardTitle}</p>
            </ResourceCardBody>
        </ResourceCardContainer>
    );
}

ResourceBasicCard.propTypes = {
    className: PropTypes.string,
    resourceCardDetails: PropTypes.shape({
        resourceCardTypeIcon: PropTypes.string.isRequired,
        resourceCardTitle: PropTypes.string.isRequired
    }).isRequired,
    onItemClick: PropTypes.func
};

ResourceBasicCard.defaultProps = {
    className: '',
    onItemClick: () => { }
};

export default ResourceBasicCard;