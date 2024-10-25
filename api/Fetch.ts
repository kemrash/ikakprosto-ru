// Константа, содержащая базовый URL для получения данных о постах
const PATH_URL = "https://dummyjson.com/posts";

// Экспортируем асинхронную функцию для выполнения HTTP-запроса с заданными параметрами
export const useFetch = async (params: string = ""): Promise<undefined> => {
  // Выполняем запрос к API, объединяя базовый URL с переданными параметрами
  return await $fetch(`${PATH_URL}${params}`);
};
