import React from "react";
import style from "../css/Tokenomix.module.css";
function Tokenomix() {
  return (
    <div className={style.parent}>
      <div className={style.header}>
        <h1>Tokenomics</h1>
      </div>

      <div className={style.initialDistributionContainer}>
        <div className={style.distributionHeader}>
          <h2>Initial Distribution</h2>
        </div>
        <div className={style.investorInfo}>
          <div className={style.investorCircle}></div>
          <div className={style.investorsDetails}>
            <div className={style.CrowdInvestor}>
              <div className={style.blueCircle}></div>
              <div className={style.CrowdInvestorPercentage}>
                <p>Crowdsale investors : 80%</p>
              </div>
            </div>
            <div className={style.Foundation}>
              <div className={style.khakiCircle}></div>
              <div className={style.FoundationInvestorPercentage}>
                <p>Foundation: 20%</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.lorem}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            tempora, placeat asperiores ea odit voluptatibus? Ab quam odio
            accusamus nesciunt distinctio! Dicta beatae accusantium laboriosam a
            voluptatem at soluta, accusamus quibusdam exercitationem mollitia
            eligendi est ullam, ad illum eos iste! Similique, praesentium modi
            numquam illum illo culpa aliquid molestiae incidunt nemo,
            consequuntur atque nisi quas aperiam iure quia iste blanditiis
            voluptate nesciunt aspernatur, laboriosam architecto? Quo, unde
            repellat. Ut sapiente sit molestiae ratione nam qui cum dignissimos
            esse iste dolore facilis quaerat obcaecati at, pariatur autem nulla!
            Autem deleniti necessitatibus officia, sunt aliquid hic, nobis quae
            ut iusto temporibus dolorem.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tokenomix;
