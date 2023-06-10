import React from "react";
import MainNavbar from "../Navbar/MainNavbar";
import NewsPage from "../News/NewsPage";

function SingleNewsPage() {
  return (
    <>
      <MainNavbar />
      <div class="container__news-page__individual">
        <section class="section news-page__individual">
          <NewsPage />
        </section>
      </div>
    </>
  );
}

export default SingleNewsPage;
