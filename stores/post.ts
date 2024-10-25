import { useFetch } from "~/api/Fetch";
import type { Post, DataComments } from "~/types/types";

// Экспортируем функцию использования хранилища постов, определяя его с именем "postStore"
export const usePostStore = defineStore("postStore", () => {
  // Объявляем реактивные переменные для хранения данных поста и комментариев
  const dataPost = ref<Post | undefined>();
  const dataComments = ref<DataComments | undefined>();

  return {
    // Асинхронная функция для получения данных поста по его идентификатору
    getDataPost: async (id: string) => {
      dataPost.value = await useFetch(`/${id}`);
    },
    // Асинхронная функция для получения комментариев к посту по его идентификатору
    getDataComments: async (id: string) => {
      dataComments.value = await useFetch(`/${id}/comments`);
    },
    // Возвращаем реактивные переменные для доступа к данным поста и комментариев
    dataPost,
    dataComments,
  };
});
