import React from "react";
import style from "../css/BreadCrumbs.module.css";
function BreadCrumbs() {
  const breadCrumbsArray = ["Cryptocurrencies", "Bitcoin"];
  return (
    <div className={style.parent}>
      <div className={style.InnerContainer}>
        {breadCrumbsArray.map((item, index) => (
          <div
            key={item}
            className={
              breadCrumbsArray.length - 1 === index
                ? style.highlightFont
                : "normalFont"
            }
          >
            {breadCrumbsArray.indexOf("Cryptocurrencies") === index ? (
              ""
            ) : (
              <p>&#x226B;</p>
            )}
            <a> {item} </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BreadCrumbs;
