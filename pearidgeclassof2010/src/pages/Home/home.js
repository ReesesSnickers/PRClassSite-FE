import React from "react";
import { homePageData } from "../../config/homeConfig";

// Home Page
const Home = () => {
  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return (
    <section className="home">
      <h1>{homePageData.school}</h1>
      <h2>{homePageData.class}</h2>
      <p>{homePageData.introduction}</p>
      <h2>Class Photos</h2>
      <section>
        {letters.split("").map(function(letter) {
          return letter;
        })}{" "}
        View All
      </section>
    </section>
  );
};

export default Home;
