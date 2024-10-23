<script setup lang="ts">
const route = useRoute()
const id = computed(() => `${route.params.id}`)

const postStore = usePostStore()

await useAsyncData('post', async () => Promise.all([postStore.getDataPost(id.value), postStore.getDataComments(id.value)]))
</script>

<template>
  <main v-if="postStore.dataPost" class="main">
    <h1 class="visually-hidden">Post</h1>
    <AboutPostSection :post="postStore.dataPost" />
    <CommentsSection v-if="postStore.dataComments" :data-comments="postStore.dataComments" />
  </main>
</template>

<style lang="scss" scoped></style>
