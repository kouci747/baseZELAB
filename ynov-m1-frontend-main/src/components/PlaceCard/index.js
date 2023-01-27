import React from 'react';
import styles from './index.module.scss';
import imgCard from '../../../public/houseImage.jpg';

const index = (title, imgCard, body) => {
  return (
    <div className={styles.card_container} title="card_title">
      <div className={styles.image_container}>
        <img src={imgCard.src} alt="" />
      </div>

      <div className="card_body">
        <p></p>
      </div>
    </div>
  );
};

export default index;
