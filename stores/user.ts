import type { User } from "~/types/types";

export const useUserStore = defineStore(
  "userStore",
  () => {
    const user = ref<User>({
      post: {},
    });

    return {
      user,
    };
  },
  { persist: true }
);
