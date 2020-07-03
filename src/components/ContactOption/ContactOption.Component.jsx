import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContactItem = styled.div`
    flex: 1;
    text-align: center;
    padding: 0 1rem;
    h5 {
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-weight: 700;
    }
    p {
        font-size: 1rem;
    }
`;

const ContactImage = styled.div`  
    height: 5rem;
    width: 100%;
    margin-top: 1rem;
    img {
        height: 5rem;
        width: 6rem;
    }
`;

const ContactOption = (props) => {
    const { name, imageUrl, description } = props.contactItem;

    return (
        <ContactItem>
            <ContactImage>
                <img src={imageUrl} />
            </ContactImage>
            <h5>{name}</h5>
            <p>{description}</p>
        </ContactItem>
    );
}

ContactOption.propTypes = {
    contactItem: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }),
    onItemClick: PropTypes.func
};

ContactOption.defaultProps = {
    onItemClick: () => { }
};

export default ContactOption;