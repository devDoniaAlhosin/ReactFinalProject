import React from "react";

export const Collapse = ({ collapseIndex, id, text, setCollapseIndex }) => {
  return (
    <div
      className={`collapse  ${collapseIndex == id ? "active" : ""}`}
      onClick={() => setCollapseIndex(id)}
    >
      {text}
    </div>
  );
};
