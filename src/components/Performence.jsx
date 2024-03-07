import React, { useContext, useEffect } from "react";
import style from "../css/Performence.module.css";
import cryptoContext from "../context/CryptoCotext";
function Performence() {
  const { data } = useContext(cryptoContext);
  return (
    <div className={style.parent}>
      <div className={style.header}>
        <h1>Performance</h1>
      </div>
      <div className={style.TodayhighAndLow}>
        <div className={style.todayLow}>
          <p>Today's Low</p>
          {data && data.length && <p>{data[0].low_24h.toLocaleString()}</p>}
        </div>
        <div className={style.gradient}></div>
        <div className={style.todayHigh}>
          <p>Today's High</p>
          {data && data.length && <p>{data[0].high_24h.toLocaleString()}</p>}
        </div>
      </div>
      <div className={style.TodayhighAndLow}>
        <div className={style.todayLow}>
          <p>52W Low</p>
          {data && data.length && <p>{data[0].low_24h.toLocaleString()}</p>}
        </div>
        <div className={style.gradient}></div>
        <div className={style.todayHigh}>
          <p>52W High</p>
          {data && data.length && <p>{data[0].high_24h.toLocaleString()}</p>}
        </div>
      </div>
      <div className={style.fundamentals}>
        <h2>Fundamentals</h2>
      </div>
      {data && data.length && (
        <div className={style.fundamentalsConatiner}>
          <div className={style.left}>
            <div className={style.bitCoinPrice}>
              <p className={style.liteColor}>Bitcoin Price</p>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>
            <div className={style.dayLowHigh}>
              <p className={style.liteColor}>24h Low / 24h High</p>
              <p>
                ${data[0].low_24h.toLocaleString()}/ $
                {data[0].high_24h.toLocaleString()}
              </p>
            </div>
            <div className={style.WeekLowHigh}>
              <p className={style.liteColor}>24h Low / 24h High</p>
              <p>
                ${data[0].low_24h.toLocaleString()}/ $
                {data[0].high_24h.toLocaleString()}
              </p>
            </div>
            <div className={style.tradingVolume}>
              <p className={style.liteColor}>Trading Volume</p>
              <p>${data[0].total_volume.toLocaleString()}</p>
            </div>
            <div className={style.capRank}>
              <p className={style.liteColor}>Market Cap Rank</p>
              <p>#{data[0].market_cap_rank}</p>
            </div>
          </div>
          <div className={style.right}>
            <div className={style.cap}>
              <p className={style.liteColor}>Market Cap</p>
              <p>$ {data[0].market_cap.toLocaleString()} </p>
            </div>
            <div className={style.capDominence}>
              <p className={style.liteColor}>Market Cap Dominence</p>
              <p>38%</p>
            </div>
            <div className={style.volumetoMarketCap}>
              <p className={style.liteColor}>Volume / Market Cap</p>
              <p>{(data[0].total_volume / data[0].market_cap).toFixed(4)} </p>
            </div>

            <div className={style.allTimeHigh}>
              <p className={style.liteColor}>All-Time High</p>
              <div>
                <p>{data[0].ath.toLocaleString()}</p>
                <p className={style.red}>{data[0].ath_change_percentage}%</p>
              </div>
            </div>
            <div className={style.allTimeLow}>
              <p className={style.liteColor}>All-Time Low</p>
              <div>
                <p>{data[0].atl.toLocaleString()}</p>
                <p className={style.green}>{data[0].atl_change_percentage}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Performence;
