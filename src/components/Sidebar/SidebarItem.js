import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Sidebar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SidebarItem = (props) => {
  const [isExpanded, setIsEcpanded] = useState(props.isExpanded);
  const label = props.name;
  const items = props.children;
  const to = props.to;
  const depthStep = 10;
  const depth = 0;
  return (
    <>
      <li>
        <div
          className="sidebar__item"
          style={{ paddingLeft: depth * depthStep }}
        >
          <Link to={to}>
            <span>{label}</span>
          </Link>
          {Array.isArray(items) && (
            <div
              className="sidebar__expand-btn"
              onClick={() => setIsEcpanded(!isExpanded)}
            >
              <FontAwesomeIcon
                icon={isExpanded ? faAngleUp : faAngleDown}
                className={isExpanded ? "active" : ""}
              />
            </div>
          )}
        </div>
        {isExpanded && (
          <>
            {Array.isArray(items) ? (
              <ul>
                {items.map((subItem) => {
                  return (
                    <SidebarItem
                      key={subItem.name}
                      depth={depth + 1}
                      depthStep={depthStep}
                      isExpanded={subItem.is_expanded}
                      {...subItem}
                    />
                  );
                })}
              </ul>
            ) : null}
          </>
        )}
      </li>
    </>
  );
};

SidebarItem.propTypes = {
  isExpanded: PropTypes.bool,
  name: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
};

SidebarItem.defaultProps = {
  isExpanded: false,
  name: "",
  to: "/",
  children: [],
};

export default SidebarItem;
