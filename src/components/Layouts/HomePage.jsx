import React from "react";
import MainNavbar from "../Navbar/MainNavbar";
import News from "../News/News";
import Post from "../Homepage/Post";
import OtherSector from "../Homepage/OtherSector";

function HomePage() {
  return (
    <>
      <MainNavbar />
      <div className="container">
        <section className="section section__home">
          <div className="home__news-section">
            <h1 className="heading">News</h1>
            <News
              num="1"
              content="Credit Suisse erupts into full-blown crisis as rivals back away"
            />
          </div>
          <div className="home__feed-section">
            <Post />
          </div>
          <div className="home__other-sectors">
            <h1 className="heading">Other sector</h1>
            <OtherSector content="Automobile" />
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
