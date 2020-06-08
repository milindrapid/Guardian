import React from "react";
import ToolCard from "../../components/Tools/ToolCard";
import "./Tools.scss";
import toolsData from "../../mockData/toolsData";

const Tools = () => {
  return (
    <div className="container">
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
};

export default Tools;
