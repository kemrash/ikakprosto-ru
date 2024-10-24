<script setup lang="ts">
import user from "../assets/img/user.png";
import type { Comment } from '~/types/types';

defineProps<{
  comment: Comment
}>()

const today = new Date().toLocaleDateString()

const isCommentDelete = false
</script>

<template>
  <div class="comment">
    <img :src="user" class="comment__img" alt="" aria-hidden="true">
    <span class="text comment__name">
      {{ comment.user.username }}
    </span>
    <div class="comment__box" :class="{ 'comment__box--delete': isCommentDelete }">
      <p class="text comment__desc">
        {{ !isCommentDelete ? comment.body : 'This comment has been deleted.' }}
      </p>
      <div v-if="!isCommentDelete" class="comment__inner">
        <data :value="today" class="comment__data">Today</data>
        <button class="btn-reset comment__btn">
          Delete
        </button>
      </div>
      <button v-else class="btn-reset comment__btn-return">
        Return
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comment {
  display: grid;
  grid-template-columns: 46px auto;
  grid-template-rows: repeat(2, auto);
  gap: 5px 8px;

  &__img {
    grid-row: span 2;
    margin-top: 3px;
  }

  &__name {
    font-weight: 600;
  }

  &__box {
    display: flex;
    flex-direction: column;
    gap: 9px;

    &--delete {
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  &__inner {
    display: flex;
    gap: 20px;
  }

  &__data {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    color: $border;
  }

  &__btn,
  &__btn-return {
    font-weight: 400;
    text-decoration: underline;
    text-underline-offset: .2em;
    text-decoration-skip-ink: none;
  }

  &__btn {
    font-size: 13px;
    line-height: 92.308%;
    letter-spacing: -0.078px;
    color: $red;
    text-decoration-color: $burnt-sienna;
  }

  &__btn-return {
    font-family: $font-family-secondary;
    font-size: 20px;
    line-height: 100%;
    color: $accent-primary;
    text-decoration-color: $accent-border;
  }
}
</style>
