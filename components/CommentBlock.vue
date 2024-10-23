<script setup lang="ts">
import type { Comment } from '~/types/types';

defineProps<{
  comment: Comment
}>()
</script>

<template>
  <div class="comment">
    <img src="" alt="" aria-hidden="true">
    <span>
      {{ comment.user.username }}
    </span>
    <p>
      {{ comment.body }}
    </p>
    <div class="comment__inner">
      <data value="" class="comment__data">Today</data>
      <button class="btn-reset comment__btn">
        Delete
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
