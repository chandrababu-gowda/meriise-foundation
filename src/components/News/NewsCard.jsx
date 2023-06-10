import React from "react";

function NewsCard() {
  return (
    <div className="news-cards">
      <img src="" alt="" className="news-card__image" />
      <h2 className="news-card__heading">
        New foreign trade policy to focus on MSMEs, Ecomm Zones, AI
      </h2>
      <p className="news-card__content">
        India's upcoming foreign trade policy will seek to handhold MSMEs to
        build their financial capabilities, set up special zones for ecommerce
        exports and develop new mechanisms to support services related to
        artificial intelligence and Internet of Things.
      </p>
      <button className="news-card__button">Read more</button>
    </div>
  );
}

export default NewsCard;
