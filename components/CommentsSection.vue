<script setup lang="ts">
import type { DataComments } from '~/types/types';

const props = defineProps<{
  dataComments: DataComments
}>()

const sumOfComments = computed(() => props.dataComments.comments.length)
</script>

<template>
  <section class="comments">
    <div class="container comments__container">
      <h2 class="title comments__title">
        {{ sumOfComments }} comments
      </h2>
      <ul class="list-reset comments__list">
        <li v-for="comment in dataComments.comments" :key="comment.id" class="comments__item">
          <CommentBlock :comment="comment" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.comments {
  padding: 22px 0;

  &__title {
    margin-bottom: 13px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
