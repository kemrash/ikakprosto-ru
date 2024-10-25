import { useFetch } from "~/api/Fetch";
import type { Posts } from "~/types/types";

// Экспортируем функцию использования хранилища постов, определяя его с именем "postsStore"
export const usePostsStore = defineStore("postsStore", () => {
  // Объявляем реактивную переменную для хранения данных постов
  const dataPosts = ref<Posts | undefined>();

  return {
    // Асинхронная функция для получения всех постов
    getPosts: async () => {
      dataPosts.value = await useFetch();
    },
    // Возвращаем реактивную переменную для доступа к данным постов
    dataPosts,
  };
});
