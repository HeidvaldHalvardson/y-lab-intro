export const validateField = (key, value) => {
  const errors = {};
  switch (key) {
    case 'email':
      if (!value) {
        errors.email = 'Адрес электронной почты обязателен';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        errors.email = 'Некорректный адрес электронной почты'
      } else {
        errors.email = ''
      }
      break
    case 'password':
      if (!value) {
        errors.password = 'Пароль обязателен'
      } else if (value.length < 6) {
        errors.password = 'Пароль должен содержать не менее 6 символов'
      } else {
        errors.password = ''
      }
      break
    default: return
  }

  return errors;
};