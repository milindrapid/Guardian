import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const TopicCardContainer = styled.div`
    width: 16rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: .75rem;
    border: 1px solid gray;
    background-color: white;
    padding: 1.5rem 1rem 1.5rem 1rem;

    img{
        width: 4.7rem;
        height: 4.7rem;
        background-color: silver;
        border-radius: 5rem;
        align-self: center;
    }
    h1{
        font-weight: bold;
        font-size: 18px;
        color: black;
        text-align: center;
        margin-top: 1rem;
        padding: .5rem;
    }

    span{
        font-weight: normal;
        font-size: 15px;
        color: black;
        text-align: center;
        padding-left: .5rem;
        padding-right: .5rem;
    }
`;

const TopicCard = (props) => {
    const { data } = props;
    return (
        <TopicCardContainer>
            <img src="" alt="" />
            <h1>{data.title}</h1>
            <span>{data.desc.length > 110 ? data.desc.substring(0, 110) : data.desc}</span>
        </TopicCardContainer>
    )
}

TopicCard.propTypes = {
    data: PropTypes.arrayOf(Object).isRequired
}

export default TopicCard; 