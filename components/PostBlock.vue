<script setup lang="ts">
import type { Post } from '~/types/types';

defineProps<{
  post: Post,
  isPostsPage?: boolean
}>()

const today = new Date().toLocaleDateString()
</script>

<template>
  <div class="post">
    <h2 class="post__title">
      {{ post.title }}
    </h2>
    <p class="post__desc">
      {{ post.body }}
    </p>
    <div class="post__inner">
      <button class="btn-reset post__btn" aria-label="Like">Like {{ post.reactions.likes }}</button>
      <button class="btn-reset post__btn" aria-label="Dislike">Trash {{ post.reactions.dislikes }} </button>
      <NuxtLink v-if="isPostsPage" :to="String(post.id)" class="post__link">
        Open comments
      </NuxtLink>
      <data :value="today" class="post__data">Today</data>
      <aside v-if="post.tags.length > 0" class="post__tags">
        <ul class="list-reset post__tags-list">
          <li v-for="tag in post.tags" :key="tag" class="post__tags-item">
            {{ tag }}
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<style scoped></style>
