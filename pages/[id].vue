<script setup lang="ts">
import { pageNotFound } from '~/utils/Page';

const route = useRoute()
const id = computed(() => `${route.params.id}`)

const postStore = usePostStore()

await useAsyncData('post', async () => Promise.all([postStore.getDataPost(id.value), postStore.getDataComments(id.value)]))

if (!postStore.dataPost) {
  pageNotFound()
}
</script>

<template>
  <main v-if="postStore.dataPost" class="main">
    <h1 class="visually-hidden">Post</h1>
    <AboutPostSection :post="postStore.dataPost" />
    <CommentsSection v-if="postStore.dataComments" :data-comments="postStore.dataComments" :post-id="id" />
  </main>
</template>

<style lang="scss" scoped></style>
