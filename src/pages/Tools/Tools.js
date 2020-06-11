import React from "react";
import ToolCard from "../../components/Tools/ToolCard";
import ToolList from "../../components/Tools/ToolList";
import "./Tools.scss";
import toolsData from "../../mockData/toolsData";

const Tools = () => {
  return (
    <div className="event-container">
      <h2 className="main-title">Card View</h2>
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
      <h2 className="main-title">List View</h2>
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
    </div>
  );
};

export default Tools;
