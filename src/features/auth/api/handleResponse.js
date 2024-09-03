export async function handleResponse(response) {
  try {
    const result = await response.json();
    return result.success ? { success: true, message: 'Вы успешно авторизованы' } : { success: false, error: 'Неверный email или пароль' };
  } catch (error) {
    return { success: false, error: 'Что-то пошло не так' };
  }
}
