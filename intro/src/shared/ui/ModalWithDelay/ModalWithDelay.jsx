import React, {useEffect, useState} from 'react';
import Modal from "../Modal/Modal";
import styles from "./ModalWithDelay.module.css";

const ModalWithDelay = ({isOpen, onClose, message, isSuccess}) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsShow(true)
      const timer = setTimeout(() => {
        onClose(false)
        setIsShow(false)
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [message, isOpen, onClose]);

  return (
    <Modal className={`${isSuccess ? styles.success : styles.failed}`} isOpen={isShow} onClose={() => setIsShow(false)} >
      <h1>{message}</h1>
    </Modal>
  );
};

export default ModalWithDelay;