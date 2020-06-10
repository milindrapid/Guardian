import React from "react";
import PropTypes from "prop-types";
import "./ToolList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ToolList = ({
  isFavorite,
  title,
  description,
  callToAction,
  callToMore,
}) => (
  <div className="tool-list">
    <div className={`list-favorite ${isFavorite ? "active" : "disabled"}`}>
      <FontAwesomeIcon icon="star" />
    </div>
    <div className="list-call-to">
      <a href={callToAction}>
        <FontAwesomeIcon icon="external-link-alt" />
      </a>
    </div>
    <div className="list-title">
      <span>{title}</span>
    </div>
    <div className="list-description">{description}</div>
    <div className="list-link">
      <a href={callToMore}>Learn More</a>
    </div>
  </div>
);

ToolList.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  callToAction: PropTypes.string.isRequired,
  callToMore: PropTypes.string.isRequired,
};

export default ToolList;
