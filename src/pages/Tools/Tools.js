import React, { useState } from "react";
import ToolCard from "../../components/Tools/ToolCard";
import ToolList from "../../components/Tools/ToolList";
import "./Tools.scss";
import toolsData from "../../mockData/toolsData";
import GridIcon from "../../images/grid.svg";
import ListIcon from "../../images/list-icon.svg";

const Tools = () => {
  const [gridView, setGridView] = useState(true);
  const [listView, setListView] = useState(false);

  const handleList = () => {
    setGridView(false);
    setListView(true);
  };

  const handleGrid = () => {
    setGridView(true);
    setListView(false);
  };
  console.log(gridView, listView);

  const getToolItem = () => {
    if (gridView) {
      console.log("Yes");
      return (
        <div className="event-data-container">
          {toolsData.map((tools, index) => {
            return (
              <div className="col" key={index}>
                <ToolCard
                  isFavorite={tools.isFavorite}
                  title={tools.title}
                  description={tools.description}
                  callToAction={tools.callToAction}
                  callToMore={tools.callToMore}
                />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          {toolsData.map((tools, index) => {
            return (
              <ToolList
                key={index}
                isFavorite={tools.isFavorite}
                title={tools.title}
                description={tools.description}
                callToAction={tools.callToAction}
                callToMore={tools.callToMore}
              />
            );
          })}
        </div>
      );
    }
  };

  return (
    <div className="event-container">
      <div>
        <h2 className="main-title">All Tools</h2>
        <div style={{ float: "right", paddingRight: "30px" }}>
          <img
            className="event-menu-icon"
            src={GridIcon}
            onClick={() => handleGrid()}
            alt="grid"
          />
          <img
            className="event-menu-icon"
            src={ListIcon}
            onClick={() => handleList()}
            alt="list"
          />
        </div>
      </div>
      <div className="event-data-container">{getToolItem()}</div>
    </div>
  );
};

export default Tools;
