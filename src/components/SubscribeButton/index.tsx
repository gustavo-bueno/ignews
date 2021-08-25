import React from 'react';

import styles from './styles.module.scss';
// import { Container } from './styles';

const SubscribeButton = () => {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now!
    </button>
  );
};

export default SubscribeButton;
