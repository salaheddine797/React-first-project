import React from "react";

function ListNav() {
  const list = ["Features", "About", "Contact"];

  return (
    <div className="listItems">
      <span>{list[0]}</span>
      <span className="separateMiddle">{list[1]}</span>
      <span>{list[2]}</span>
    </div>
  );
}

export default ListNav;
