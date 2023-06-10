import React from "react";

function MainNavbar() {
  return (
    <section className="section section__navbar--bg">
      <div className="container">
        <div className="navbar">
          <div className="navbar__logo">
            <img src="./images/logo.png" alt="" />
          </div>
          <div className="navbar__links">
            <a className="navbar__links__link" href="#">
              <img src="./images/icons/house.png" alt="" />
            </a>
            <a className="navbar__links__link" href="#">
              <img src="./images/icons/search.png" alt="" />
            </a>
            <a className="navbar__links__link" href="#">
              <img src="./images/icons/chat.png" alt="" />
            </a>
            <a className="navbar__links__link" href="#">
              <img src="./images/icons/newspaper.png" alt="" />
            </a>
          </div>
          <div className="navbar__user">
            <a href="#">
              <img src="./images/icons/user-profile.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainNavbar;
