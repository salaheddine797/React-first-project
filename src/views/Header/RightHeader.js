import React from "react";

function RightHeader() {
  const objet = {
    title: "A Simple Bookmark Manager",
    description:
      "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
    btns: ["Get it on Chrome", "Get it on Firefox"],
  };

  return (
    <div className="rightHeader">
      <h1>{objet.title}</h1>
      <p>{objet.description}</p>
      <div className="buttons">
        <div>
          <button className="btn1">{objet.btns[0]}</button>
        </div>

        <div>
          <button className="btn2">{objet.btns[1]}</button>
        </div>
        
      </div>
    </div>
  );
}

export default RightHeader;
