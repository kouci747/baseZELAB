import React from 'react';
import styles from './index.module.scss';
import imgCard from '../../../public/houseImage.jpg';

const index = () => {
  return (
    <div className={styles.card_container} title="card title">
      <div className={styles.image_container}>
        <img src={imgCard.src} alt="" />
      </div>
    </div>
  );
};

export default index;
