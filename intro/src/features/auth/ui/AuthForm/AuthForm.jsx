import React, {useState} from 'react';
import Input from "../../../../shared/ui/Input/Input";
import styles from "./AuthForm.module.css";
import Tooltip from "../../../../shared/ui/Tooltip/Tooltip";
import Button from "../../../../shared/ui/Button/Button";
import {validateField} from "../../../../shared/utils/validateField";
import {mockFetch} from "../../api/mockFetch";
import {handleResponse} from "../../api/handleResponse";
import ModalWithDelay from "../../../../shared/ui/ModalWithDelay/ModalWithDelay";

const AuthForm = ({onClose}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState({
    isOpen: false,
    message: '',
    isSuccess: true,
  })

  const submitHandler = async (e) => {

    setIsLoading(true)

    e.preventDefault();

    for (let error in errors) {
      if (errors[error]) {
        setIsLoading(false)
        return
      }
    }

    try {
      const response = await mockFetch('mock.url', {
        method: 'POST',
        body: JSON.stringify({email, password})
      })

      const result = await handleResponse(response)
      if (result.success) {
        onClose()
        setShowModal({
          message: result.message,
          isOpen: true,
          isSuccess: true,
        })
      } else {
        setShowModal({
          message: result.error,
          isOpen: true,
          isSuccess: false,
        })
      }
    } catch (error) {
      setShowModal({
        message: error.error,
        isOpen: true,
        isSuccess: false,
      })
    }

    setIsLoading(false)
  }

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    if (field === "email") {
      setEmail(value)
    } else if (field === "password") {
      setPassword(value)
    }
    setErrors((errors) => ({
      ...errors,
      ...validateField(field, value)
    }))
  }

  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <h2 className={styles.title}>Войти</h2>
        <Tooltip
          text='email: user@admin.ru password: password'
          className={styles.tooltip}
        >
          подсказка
        </Tooltip>
        <Input
          placeholder="user@admin.ru"
          type="email"
          errorMessage={errors.email}
          value={email}
          onChange={handleChange('email')}
        />
        <Input
          placeholder="password"
          type="password"
          errorMessage={errors.password}
          value={password}
          onChange={handleChange('password')}
        />
        <Button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'Отправка...' : 'Отправить'}
        </Button>
      </form>
      <ModalWithDelay onClose={setShowModal} {...showModal} />
    </div>
  );
};

export default AuthForm;