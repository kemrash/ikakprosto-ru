<script setup lang="ts">
import type { Post } from '~/types/types';

// Определяем свойства компонента, в данном случае передаем объект поста типа Post
defineProps<{
  post: Post
}>()
</script>

<template>
  <section class="about-post">
    <div class="container about-post__container">
      <PostBlock v-if="post" :post="post" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-post {
  padding: 27px 0 10px;
}
</style>
