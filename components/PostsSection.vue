<script setup lang="ts">
const MAX_POSTS = 5

const postsStore = usePostsStore()

await useAsyncData('posts', async () => Promise.all([postsStore.getPosts()]))

const postsComputed = computed(() => postsStore.posts?.posts.slice(0, MAX_POSTS))
</script>

<template>
  <section class="posts">
    <div class="container">
      <h1 class="visually-hidden">Посты</h1>
      <ul v-if="postsStore.posts" class="list-reset posts__list">
        <li v-for="post in postsComputed" :key="post.id" class="posts__item">
          <PostBlock :post="post" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
