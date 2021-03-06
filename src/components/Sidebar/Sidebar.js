import React from "react";
import PropTypes from "prop-types";
import SidebarItem from "./SidebarItem";
import "./Sidebar.scss";

const Sidebar = ({ items, depthStep, depth }) => {
  return (
    <div className="sidebar">
      <ul>
        {items.map((sidebarItem, index) => (
          <SidebarItem
            key={`${sidebarItem.id}${index}`}
            depthStep={depthStep}
            depth={depth}
            isExpanded={sidebarItem.is_expanded}
            to={sidebarItem.url_string}
            {...sidebarItem}
          />
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  depthStep: PropTypes.number,
  depth: PropTypes.number,
};

Sidebar.defaultProps = {
  depthStep: 10,
  depth: 0,
};

export default Sidebar;
