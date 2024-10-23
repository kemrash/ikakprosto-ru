<script setup lang="ts">
import type { Post } from '~/types/types';

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

<style lang="scss" scoped></style>
