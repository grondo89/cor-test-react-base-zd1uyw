import React from "react";
import styles from "../style.css";
import shortid from "shortid";

const Block = ({ gridBlock }) => {
  return gridBlock && gridBlock.length > 0 ? (
    <div key={shortid.generate()}>
      <h4>{gridBlock}</h4>
    </div>
  ) : null;
};

export default Block;
