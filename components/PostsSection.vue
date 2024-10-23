<script setup lang="ts">
const MAX_POSTS = 5

const postsStore = usePostsStore()

await useAsyncData('posts', async () => Promise.all([postsStore.getPosts()]))

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

<style lang="scss" scoped></style>
