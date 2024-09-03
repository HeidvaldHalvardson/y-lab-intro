import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  const {
    type = 'text',
    className = '',
    errorMessage = '',
    ...otherProps
  } = props

  const inputStyle = errorMessage ? '' : styles['error-input']

  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        {...otherProps}
        className={`${styles.input} ${className} ${inputStyle}`}
      />
      <span className={styles.error}>
        {errorMessage}
      </span>
    </div>
  );
};

export default Input;