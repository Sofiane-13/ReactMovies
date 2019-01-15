import React from "react";

const Like = ({ onClick, liked }) => {
  let classCss = "fa fa-heart";
  if (!liked) classCss = classCss + "-o";

  return (
    <i
      style={{ cursor: "pointer" }}
      onClick={onClick}
      className={classCss}
      aria-hidden="true"
    />
  );
};

export default Like;
