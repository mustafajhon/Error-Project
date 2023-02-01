import "./home.css";
import meme from "../asset/meme.png";
import React from "react";
function Home() {
  return (
    <>
      <header className="header">
        <img className="img" src={meme} alt="MEME" />
        <h2 className="header-title">Meme Generatore</h2>
        <h4 className="header-project">React MEME Project </h4>
      </header>
    </>
  );
}

export default Home;
