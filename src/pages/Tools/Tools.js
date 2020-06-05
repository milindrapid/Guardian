import React from "react";
import ToolCard from "../../components/ToolCard/ToolCard";
import "./Tools.scss";

const Tools = () => {
  return (
    <div className="container">
      <div className="col">
        <ToolCard
          isFavorite
          title="Living Balance Sheet"
          description="Innovative thinking & advanced web technology to help you achieve financial balance"
          callToAction=""
          callToMore=""
        />
      </div>
      <div className="col">
        <ToolCard
          isFavorite={false}
          title="Living Balance Sheet"
          description="Innovative thinking & advanced web technology to help you achieve financial balance"
          callToAction=""
          callToMore=""
        />
      </div>
      <div className="col">
        <ToolCard
          isFavorite={false}
          title="Living Balance Sheet"
          description="Innovative thinking & advanced web technology to help you achieve financial balance"
          callToAction=""
          callToMore=""
        />
      </div>
    </div>
  );
};

export default Tools;
