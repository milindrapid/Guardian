import React from "react";
import PropTypes from "prop-types";
import "./ToolCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../images/logo.png";

const ToolCard = ({
  isFavorite,
  title,
  description,
  callToAction,
  callToMore,
}) => (
  <div className="tool-card">
    <div className="card-header">
      <div>
        <img className="card-logo" src={logo} alt="__" />
      </div>
      <div className={`card-favorite ${isFavorite ? "active" : "disabled"}`}>
        <FontAwesomeIcon icon="star" />
      </div>
    </div>
    <div className="card-content">
      <div className="card-title">
        <span>{title}&nbsp;&nbsp;</span>
        <a href={callToAction}>
          <FontAwesomeIcon icon="external-link-alt" />
        </a>
      </div>
      <div className="card-description">{description}</div>
    </div>
    <div className="card-footer">
      <a href={callToMore} className="card-link">
        Learn More
      </a>
    </div>
  </div>
);

ToolCard.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  callToMore: PropTypes.string.isRequired,
};

export default ToolCard;
