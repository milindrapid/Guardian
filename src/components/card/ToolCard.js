import React from 'react';
import './Tools.scss';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import FavoriteIcon from '../../images/favorite-icon.svg';
import UnselectedFavoriteIcon from '../../images/unselected-favorite.svg';
import PopupIcon from '../../images/popup.svg';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

const ToolCard = (props) => {
    return (
        <MDBCard className="card-container">
            <img
                className="image-favIcon"
                src={props.isFavorite ? FavoriteIcon : UnselectedFavoriteIcon}
                alt="favorite icon"
                onClick={() => props.favIconClickHandle(props.id)} />

            <MDBCardImage
                className="image-banner"
                src={props.imageUrl}
                waves />

            <ColoredLine color="grey" />

            <MDBCardBody className="data-container">
                <div className="title-container">
                    <MDBCardTitle className="tool-title" >{props.title}</MDBCardTitle>
                    <img className="popup-icon" src={PopupIcon} alt="popup" />
                </div>

                <MDBBtn className="learn-more-link" href="#">Learn More</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}

export default ToolCard;