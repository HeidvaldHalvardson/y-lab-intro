import React, {useCallback, useEffect} from 'react';
import styles from './Modal.module.css';
import {Portal} from "../Portal/Portal";
import CloseButton from "../CloseButton/CloseButton";

const Modal = (props) => {
  const {
    isOpen,
    children,
    className = '',
    onClose
  } = props

  const visibility = isOpen ? 'open' : 'close';

  const closeHandler = useCallback(() => {
    onClose()
  }, [onClose])

  const onContentHandler = (e) => {
    e.stopPropagation();
  }

  const onKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    }
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div
        className={`${styles.modal} ${className} ${styles[visibility]}`}
        onClick={onClose}
      >
        <div className={styles.overlay}>
          <div className={styles.content} onClick={onContentHandler}>
            <CloseButton onClick={onClose} />
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;