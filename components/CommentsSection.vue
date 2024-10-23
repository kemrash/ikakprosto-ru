<script setup lang="ts">
import type { DataComments } from '~/types/types';

const props = defineProps<{
  dataComments: DataComments
}>()

const sumOfComments = computed(() => props.dataComments.comments.length)
</script>

<template>
  <section class="comments">
    <h2 class="comments__title">
      {{ sumOfComments }} comments
    </h2>
    <ul class="list-reset comments__list">
      <li v-for="comment in dataComments.comments" :key="comment.id" class="comments__item">
        <CommentBlock :comment="comment" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped></style>
