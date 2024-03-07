import React from "react";
import style from "../css/Team.module.css";
function Team() {
  return (
    <div className={style.parent}>
      <div className={style.Header}>
        <h1>Team</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          necessitatibus, tenetur fugit optio consequuntur tempora. Debitis
          assumenda libero fuga aspernatur!
        </p>
      </div>
      <div className={style.imgcardAndInfo}>
        <div className={style.profileContainer}>
          <img src="https://i.ibb.co/W5Qgn2S/image.png" alt="" />
          <h5>John Smith</h5>
          <p>Market Expert</p>
        </div>
        <div className={style.loreminfo}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            error amet repudiandae quos eligendi nemo ut quam debitis officia
            dolorum consequuntur dignissimos blanditiis a dolorem aliquam,
            voluptatibus repellendus hic nisi! Omnis tempore ut doloremque
            beatae odio repudiandae eligendi molestias facilis.
          </p>
        </div>
      </div>
      <div className={style.imgcardAndInfo}>
        <div className={style.profileContainer}>
          <img src="https://i.ibb.co/HzKw83m/image.png" alt="" />
          <h5>Elina Williams</h5>
          <p>Market Expert</p>
        </div>
        <div className={style.loreminfo}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            error amet repudiandae quos eligendi nemo ut quam debitis officia
            dolorum consequuntur dignissimos blanditiis a dolorem aliquam,
            voluptatibus repellendus hic nisi! Omnis tempore ut doloremque
            beatae odio repudiandae eligendi molestias facilis.
          </p>
        </div>
      </div>
      <div className={style.imgcardAndInfo}>
        <div className={style.profileContainer}>
          <img src="https://i.ibb.co/0cMg6XT/image.png" alt="" />
          <h5>John Smith</h5>
          <p>Market Expert</p>
        </div>
        <div className={style.loreminfo}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            error amet repudiandae quos eligendi nemo ut quam debitis officia
            dolorum consequuntur dignissimos blanditiis a dolorem aliquam,
            voluptatibus repellendus hic nisi! Omnis tempore ut doloremque
            beatae odio repudiandae eligendi molestias facilis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
