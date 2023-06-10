import React from "react";
import MainNavbar from "../Navbar/MainNavbar";
import NewsCard from "../News/NewsCard";

function NewsPage() {
  return (
    <>
      <MainNavbar />
      <div class="container">
        <section class="section news-page">
          <div class="news-page__heading-filter">
            <h1 class="heading">News</h1>
            <form action="" method="post">
              Filter
            </form>
          </div>
          <div class="news-page__cards-section">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </section>
      </div>
    </>
  );
}

export default NewsPage;
