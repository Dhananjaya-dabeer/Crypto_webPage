import React from "react";
import style from "../css/AboutBitCoin.module.css";
function AboutBitCoin() {
  return (
    <div className={style.parent}>
      <div className={style.aboutBitCoin}>
        <h1>About Bitcoin</h1>
        <h3>What is Bitcoin?</h3>
        <p>
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className={style.text}>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
          soluta doloremque est eum, sit itaque obcaecati aspernatur ad magni
          magnam necessitatibus laboriosam vel, expedita atque nihil id
          molestias dicta quisquam et distinctio neque consequuntur rerum
          suscipit amet. Quas, officia atque in dolor reiciendis debitis maxime
          modi veniam accusamus laudantium reprehenderit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          suscipit rem tempore. Dolore aliquid assumenda maiores a, laboriosam
          iusto culpa deserunt ipsum blanditiis consectetur excepturi eius
          repellendus ex odio corrupti nostrum aliquam optio deleniti unde!
          Nesciunt exercitationem eum in dignissimos quis quasi, blanditiis
          quisquam eos explicabo, ea modi molestias dolor dolore repellendus
          labore quos. Aspernatur.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi labore
          odit laborum sequi vitae animi? Voluptatum sint facere, aut id omnis
          consequatur odio, fugiat qui fugit repudiandae pariatur. Voluptate,
          at.
        </p>
      </div>
      <div className={style.holdingBitCoin}>
        <h1>Already Holding Bitcoin?</h1>
        <div className={style.imgs}>
          <div className="img1">
            <img src="https://i.ibb.co/jhL68Gv/image.png" alt="" />
          </div>
          <div className="img2">
            <img src="https://i.ibb.co/1LHwQLx/image.png" alt="" />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          consequatur aliquid, omnis neque, et reprehenderit repellendus soluta
          minima qui illo ea quas officia aperiam deleniti.
        </p>
      </div>
    </div>
  );
}

export default AboutBitCoin;
