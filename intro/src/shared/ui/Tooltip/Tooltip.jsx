import React, {useState} from 'react';
import styles from './Tooltip.module.css'

const Tooltip = ({children, text, className = ''}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const onMouseEnterHandler = () => {
    setShowTooltip(true);
  };

  const onMouseLeaveHandler = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className={`${styles.container} ${className}`}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {children}
      {
        showTooltip &&
        <div className={styles.tooltip}>
          {text}
        </div>
      }
    </div>
  );
};

export default Tooltip;