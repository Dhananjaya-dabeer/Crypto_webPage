import React, { useEffect, useRef, memo, useState } from "react";
import style from "../css/CoinGraphComp.module.css";

function CoinGraphComp() {
  const [cryptoPrice, setCryptoPrice] = useState();

  const container = useRef();
  const endpoint = `https://api.coingecko.com/api/v3/simple/price`;
  const CryptoDollerEndPoint = `${endpoint}?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true`;
  useEffect(() => {
    (async () => {
      try {
        await fetch(CryptoDollerEndPoint)
          .then((result) => {
            if (!result.ok) {
              throw new Error("Network response was not ok");
            }
            return result.json();
          })
          .then((data) => {
            setCryptoPrice(data.bitcoin);
          });
      } catch (error) {
        console.log(error);
      }
    })();
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "960",
          "height": "660",
          "symbol": "BITSTAMP:BTCUSD",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "3",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;
    if (container.current && !container.current.children.length) {
      container.current.appendChild(script);
    }
  }, []);

  return (
    <div>
      <div className={style.BitCoinPrice}>
        <div className={style.cryptoNameContainer}>
          <img src="https://i.ibb.co/z2K6LwM/image.png" alt="" />
          {cryptoPrice && (
            <div className={style.cryptoName}>
              <h3>Bitcoin</h3>
              <p>BIT</p>
            </div>
          )}
        </div>
        <div className={style.cryptoPriceContainer}>
          {cryptoPrice && (
            <div className={style.dollar}>
              <h1>$ {cryptoPrice.usd.toLocaleString()}</h1>
              <div className={style.gainOrLose}>
                <p>{cryptoPrice.usd_24h_change.toFixed(2)}&#37;</p>
              </div>
              <div className={style.timePeriod}>
                <p>(24H)</p>
              </div>
            </div>
          )}
        </div>
        {cryptoPrice && (
          <div className={style.cryptoInrContainer}>
            <p>&#x20b9; {cryptoPrice.inr.toLocaleString()}</p>
          </div>
        )}
      </div>
      <div
        className="tradingview-widget-container"
        ref={container}
        style={{ height: "100%", width: "100%", backgroundRepeat: "no-repeat" }}
      ></div>
    </div>
  );
}

export default CoinGraphComp;
