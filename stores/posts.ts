import { useFetch } from "~/api/Fetch";
import type { Posts } from "~/types/types";

export const usePostsStore = defineStore("postsStore", () => {
  const posts = ref<Posts | undefined>();

  return {
    getPosts: async () => {
      posts.value = await useFetch();
    },
    posts,
  };
});
