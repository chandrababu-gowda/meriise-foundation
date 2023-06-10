import React from "react";

function Post() {
  return (
    <div className="feed__post">
      <div className="post__person-details">
        <div className="person-details__image">
          <img src="" alt="" />
        </div>
        <div className="person-details__name-position">
          <p className="person-detail__name">Maverik Watkins</p>
          <p className="person-detail__position">
            Investor | CEO of Swiss Bank
          </p>
        </div>
      </div>
      <div className="post__content">
        Happy to share that I have invested in the Company of agriculture.
      </div>
      <div className="post__image"></div>
      <div className="post__reactions">
        <div className="post__reaction reactions__like">
          <img src="" alt="" />
        </div>
        <div className="post__reaction reactions__comment">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Post;
