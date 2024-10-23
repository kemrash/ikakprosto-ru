import { useFetch } from "~/api/Fetch";
import type { Post, DataComments } from "~/types/types";

export const usePostStore = defineStore("postStore", () => {
  const dataPost = ref<Post | undefined>();
  const dataComments = ref<DataComments | undefined>();

  return {
    getDataPost: async (id: string) => {
      dataPost.value = await useFetch(`/${id}`);
    },
    getDataComments: async (id: string) => {
      dataComments.value = await useFetch(`/${id}/comments`);
    },
    dataPost,
    dataComments,
  };
});
