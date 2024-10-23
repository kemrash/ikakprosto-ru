import { useFetch } from "~/api/Fetch";
import type { Posts } from "~/types/types";

export const usePostsStore = defineStore("postsStore", () => {
  const dataPosts = ref<Posts | undefined>();

  return {
    getPosts: async () => {
      dataPosts.value = await useFetch();
    },
    dataPosts,
  };
});
