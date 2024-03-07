import React from "react";
import style from "../css/Sentiment.module.css";
function Sentiment() {
  return (
    <div className={style.sentimentContainer}>
      <div className={style.header}>
        <h1>Sentiment</h1>
      </div>
      <div className={style.keyEvents}>
        <h3>Key Events</h3>
      </div>
      <div className={style.listContainer}>
        <div className={style.marketInfo}>
          <div className={style.newsImg}>
            <img src="https://i.ibb.co/gtLwWPK/image.png" alt="" />
          </div>
          <div className={style.news}>
            <div className={style.newsHeader}>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                quas iste libero totam.
              </h5>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              mollitia sapiente tenetur quibusdam doloremque dignissimos,
              incidunt accusamus magnam ratione expedita fugiat eveniet, id
              repudiandae inventore aspernatur facilis architecto consequatur,
              sunt nostrum? Aliquam delectus sit illum nisi quia quod laborum
              vitae? Repudiandae atque consectetur blanditiis omnis maxime error
              quo voluptatum laudantium!
            </p>
          </div>
        </div>
        <div className={style.marketTrendInfo}>
          <div className={style.uptrendImg}>
            <img src="https://i.ibb.co/TWrRtgr/image.png" alt="" />
          </div>
          <div className={style.trendInfo}>
            <div className={style.trendHeader}>
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus temporibus vitae dicta? Eaque!
              </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates a nesciunt qui facilis libero voluptas placeat animi
              magni laborum molestias debitis consectetur, inventore ipsam
              mollitia error blanditiis tenetur eaque. Libero quibusdam in
              reiciendis. Quaerat blanditiis dolore eum eligendi placeat totam
              aliquid iusto fuga soluta accusantium culpa, ad distinctio
              perferendis hic.
            </p>
          </div>
        </div>
      </div>
      <div className={style.analystEstimates}>
        <h2>Analyst Estimates</h2>
      </div>
      <div className={style.estimatedContainer}>
        <div className={style.percentageOFInsists}>
          <h1>76%</h1>
        </div>
        <div className={style.insistsRightContainer}>
          <div className={style.buy}>
            <p>Buy</p>
            <div></div>
            <p>76%</p>
          </div>
          <div className={style.hold}>
            <p>Hold</p>
            <div></div>
            <p>8%</p>
          </div>
          <div className={style.sell}>
            <p>Sell</p>
            <div></div>
            <p>16%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sentiment;
