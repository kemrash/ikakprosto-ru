const PATH_URL = "https://dummyjson.com/posts";

export const useFetch = async (params: string = ""): Promise<undefined> => {
  return await $fetch(`${PATH_URL}${params}`);
};
