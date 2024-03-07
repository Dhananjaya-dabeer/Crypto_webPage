import React, { useEffect, useState } from "react";
import style from "../css/Footer.module.css";
import axios from "axios";
function Footer() {
  const [apiResult, setApiResult] = useState();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/search/trending`
        );
        setApiResult(response.data.coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    })();
  }, []);
  //   console.log(apiResult[0].item.small);
  return (
    <div className={style.parent}>
      <div className={style.youMayalsoLike}>
        <h2>You May Also Like</h2>
      </div>
      <div className={style.apiInfo}>
        {apiResult &&
          apiResult.length >= 0 &&
          apiResult.map((item) => (
            <div key={item.item.id} className={style.coinContainer}>
              <div className={style.symbolContainer}>
                <img src={item.item.small} alt="" />
                <p>{item.item.symbol}</p>
              </div>
              <div className={style.price}>
                <p>{item.item.data.price}</p>
              </div>
              <div className={style.chart}>
                <img src={item.item.data.sparkline} alt="" />
              </div>
            </div>
          ))}
      </div>
      <div className={style.trendingCoins}>
        <h2>Trending Coins</h2>
      </div>
      <div className={style.apiInfo}>
        {apiResult &&
          apiResult.length >= 0 &&
          apiResult.map((item) => (
            <div key={item.item.id} className={style.coinContainer}>
              <div className={style.symbolContainer}>
                <img src={item.item.small} alt="" />
                <p>{item.item.symbol}</p>
              </div>
              <div className={style.price}>
                <p>{item.item.data.price}</p>
              </div>
              <div className={style.chart}>
                <img src={item.item.data.sparkline} alt="" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Footer;
