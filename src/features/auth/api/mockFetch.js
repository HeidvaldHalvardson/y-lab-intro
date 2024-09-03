export function mockFetch(url, options) {
  const { email, password } = JSON.parse(options.body);
  const isSuccess = email === 'user@admin.ru' && password === 'password'

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        json: () => Promise.resolve({
          success: isSuccess,
        })
      });
    }, 1000);
  });
}