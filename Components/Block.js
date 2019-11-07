import React from "react";
import styles from "../style.css";

const Block = ({ gridBlock }) => {
  return gridBlock && gridBlock.length > 0 ? (
    <div className={"block"}>
      <h4>{gridBlock}</h4>
    </div>
  ) : null;
};

export default Block;
