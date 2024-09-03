import React from 'react';
import styles from './Button.module.css'

const Button = (props) => {
  const {
    children,
    className = '',
    themeButton = 'primary',
    ...otherProps
  } = props
  return (
    <button
      className={`${styles.button} ${styles[themeButton]} ${className}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;