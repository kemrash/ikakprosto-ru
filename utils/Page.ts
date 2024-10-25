// Экспортируем функцию для обработки ситуации, когда страница не найдена
export const pageNotFound = (): void => {
  // Выбрасываем ошибку с кодом состояния 404 и сообщением "Page not found"
  throw createError({
    statusCode: 404,
    message: "Page not found",
  });
};
