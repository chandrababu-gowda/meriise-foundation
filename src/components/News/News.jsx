import React from "react";

function News(props) {
  return (
    <div className="news-section__news">
      <div className="news--number">{props.num}</div>
      <div className="news--content">
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default News;
