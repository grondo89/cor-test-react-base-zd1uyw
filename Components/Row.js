import React from "react";
import Block from "./Block";
import shortid from "shortid"

const Row = ({ gridRow }) => {
  // console.log(this.props)
  return (
    gridRow && (
      <div className={"row"}>
        {gridRow.map(block => (
          <div >
            <Block key={shortid.generate()} gridBlock={block} />
          </div>
        ))}
      </div>
    )
  );
};

export default Row;
