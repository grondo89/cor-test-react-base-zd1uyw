import React from "react";
import Block from "./Block";

const Row = ({ gridRow }) => {
  // console.log(this.props)
  return (
    gridRow && (
      <div className={"row"}>
        {gridRow.map(block => (
          <div>
            <Block gridBlock={block} />
          </div>
        ))}
      </div>
    )
  );
};

export default Row;
