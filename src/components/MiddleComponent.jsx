import React, { useContext, useEffect, useState } from "react";
import style from "../css/MiddleComponent.module.css";
import BreadCrumbs from "./BreadCrumbs";
import CoinGraphComp from "./CoinGraphComp.jsx";
import axios from "axios";
import Fundamentals from "./Fundamentals.jsx";
import Performence from "./Performence.jsx";
import cryptoContext from "../context/CryptoCotext.js";
import Sentiment from "./Sentiment.jsx";
import AboutBitCoin from "./AboutBitCoin.jsx";
import Tokenomix from "./Tokenomix.jsx";
import Team from "./Team.jsx";
function MiddleComponent() {
  const { data, setData } = useContext(cryptoContext);
  const endpoint = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h`;
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(endpoint);
        const data = response.data;
        const topThree = data.filter((item) => item.market_cap_rank <= 3);
        setData(topThree);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    })();
  }, []);
  return (
    <div className={style.parent}>
      <div>
        <BreadCrumbs />
      </div>
      <div className={style.middleComponentContainer}>
        <div className={style.leftContainer}>
          <CoinGraphComp />
          <Fundamentals />
          <Performence />
          <Sentiment />
          <AboutBitCoin />
          <Tokenomix />
          <Team />
        </div>
        <div className={style.KoinXImageAndTrending}>
          <div className={style.img}>
            <img src="https://i.ibb.co/X2YKWgX/image.png" alt="" />
          </div>
          <div className={style.trendingCoinsContainer}>
            <div className={style.trendingCoins}>
              <h3>Trending Coins (24H)</h3>
            </div>
            <div className={style.trending}>
              {data &&
                data.length > 0 &&
                data.map((item) => (
                  <div key={item.id}>
                    <div>
                      <img src={item.image} alt="" />
                      <i>{item.id}</i>
                    </div>
                    <p>{item.price_change_percentage_24h.toFixed(2)}&#37;</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleComponent;
