<script setup lang="ts">
// Определяем метаданные страницы, устанавливая заголовок страницы как 'Posts'
definePageMeta({
  title: 'Posts',
})
</script>

<template>
  <main class="main">
    <h1 class="visually-hidden">Posts</h1>
    <PostsSection />
  </main>
</template>

<style lang="scss" scoped></style>
