<script setup lang="ts">
// Максимальное количество постов, которое будет отображаться
const MAX_POSTS = 5

// Подключаем хранилище постов для работы с данными и методами, связанными с постами
const postsStore = usePostsStore()

// Загружаем данные постов асинхронно и сохраняем их в хранилище
await useAsyncData('posts', async () => Promise.all([postsStore.getPosts()]))

// Получаем вычисляемое свойство с постами, ограниченное максимумом (MAX_POSTS) для отображения
const postsComputed = computed(() => postsStore.dataPosts?.posts.slice(0, MAX_POSTS))
</script>

<template>
  <section class="posts">
    <div class="container">
      <ul v-if="postsStore.dataPosts" class="list-reset posts__list">
        <li v-for="post in postsComputed" :key="post.id" class="posts__item">
          <PostBlock :post="post" :is-posts-page="true" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.posts {
  padding: 27px 0;

  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 22px;
  }
}
</style>
