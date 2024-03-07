import React, { useState } from "react";
import style from "../css/Fundamentals.module.css";
function Fundamentals() {
  const [highlight, setHighlight] = useState({
    overview: true,
    fundamentals: false,
    newsInsights: false,
    sentiments: false,
    team: false,
    technicals: false,
    tokenomix: false,
  });

  const handleCategoryClick = (category) => {
    const newHighlight = {};

    for (const key in highlight) {
      newHighlight[key] = key === category;
    }

    setHighlight(newHighlight);
  };
  return (
    <div className={style.fundamentalsContainer}>
      <div className={style.parent}>
        <div
          className={`${style.overview} ${
            highlight.overview && style.highlight
          }`}
          onClick={() => handleCategoryClick("overview")}
        >
          <p>Overview</p>
        </div>
        <div
          className={`${style.fundamentals} ${
            highlight.fundamentals && style.highlight
          }`}
          onClick={() => handleCategoryClick("fundamentals")}
        >
          <p>Fundamentals</p>
        </div>
        <div
          className={`${style.newsInsights} ${
            highlight.newsInsights && style.highlight
          }`}
          onClick={() => handleCategoryClick("newsInsights")}
        >
          <p>News Insights</p>
        </div>
        <div
          className={`${style.sentiments} ${
            highlight.sentiments && style.highlight
          }`}
          onClick={() => handleCategoryClick("sentiments")}
        >
          <p>Sentiments</p>
        </div>
        <div
          className={`${style.team} ${highlight.team && style.highlight}`}
          onClick={() => handleCategoryClick("team")}
        >
          <p>Team</p>
        </div>
        <div
          className={`${style.technicals} ${
            highlight.technicals && style.highlight
          }`}
          onClick={() => handleCategoryClick("technicals")}
        >
          <p>Technicals</p>
        </div>
        <div
          className={`${style.tokenomix} ${
            highlight.tokenomix && style.highlight
          }`}
          onClick={() => handleCategoryClick("tokenomix")}
        >
          <p>Tokenomix</p>
        </div>
      </div>
    </div>
  );
}

export default Fundamentals;
