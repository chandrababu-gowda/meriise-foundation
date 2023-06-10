import React from "react";

function OtherSector(props) {
  return (
    <div className="other-sector__sector">
      <div className="sector--image">
        <img src="" alt="" />
      </div>
      <div className="sector--name">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default OtherSector;
