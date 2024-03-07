import React from "react";
import style from "../css/Navbar.module.css";

function Navbar() {
  return (
    <div className={style.parentContainer}>
      <div className={style.navContainer}>
        <div className={style.logo}>
          <img
            src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
            alt="unable to load image"
          />
        </div>
        <div className={style.navRight}>
          <div className={style.cryptoTaxes}>
            <h4>Crypto Taxes</h4>
          </div>
          <div className={style.freeTools}>
            <h4>Free Tools</h4>
          </div>
          <div className={style.resourceCenter}>
            <h4>Resource Center</h4>
          </div>
          <div className={style.getStartedBtn}>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
