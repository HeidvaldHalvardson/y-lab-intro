import React from 'react';
import styles from './CloseButton.module.css';

const CloseButton = ({className ='', ...otherProps}) => {
  return (
    <button type='button' className={`${className} ${styles.close}`} {...otherProps}>
    </button>
  );
};

export default CloseButton;