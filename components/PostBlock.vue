<script setup lang="ts">
import likeIconId from '../assets/img/sprite/like.svg';
import dislikesIconId from '../assets/img/sprite/dislikes.svg';
import type { Post } from '~/types/types';

defineProps<{
  post: Post,
  isPostsPage?: boolean
}>()

const today = new Date().toLocaleDateString()
</script>

<template>
  <div class="post">
    <h2 class="title post__title">
      {{ post.title }}
    </h2>
    <p class="text post__desc">
      {{ post.body }}
    </p>
    <div class="post__inner">
      <div class="post__btn-box">
        <button class="btn-reset post__btn post__btn-like">
          <svg class="post__icon">
            <use :xlink:href="`#${likeIconId}`" />
          </svg>
          Like
          <span class="post__btn-number">
            {{ post.reactions.likes }}
          </span>
        </button>
        <button class="btn-reset post__btn post__btn-dislike">
          <svg class="post__icon">
            <use :xlink:href="`#${dislikesIconId}`" />
          </svg>
          Trash
          <span class="post__btn-number">
            {{ post.reactions.dislikes }}
          </span>
        </button>
      </div>
      <NuxtLink v-if="isPostsPage" :to="String(post.id)" class="post__link">
        Open comments
      </NuxtLink>
      <data :value="today" class="post__data">Today</data>
      <TagsBlock v-if="post.tags.length > 0" :tags="post.tags" class="post__tags" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post {
  &__title {
    margin-bottom: 4px;
  }

  &__desc {
    margin-bottom: 22px;
  }

  &__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  &__btn-box {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 1px;
  }

  &__btn {
    padding: 4px 11px;
    color: $black-text;
    letter-spacing: -0.078px;
    background-color: $background-004;
  }

  &__btn,
  &__link,
  &__data {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
  }

  &__btn-like {
    padding-left: 12px;
    border-radius: 14px 0 0 14px;
  }

  &__btn-dislike {
    padding-right: 10px;
    border-radius: 0 14px 14px 0;
  }

  &__icon {
    width: 13px;
    height: 11px;
  }

  &__btn-number {
    color: $black-text-03;
  }

  &__link {
    letter-spacing: -0.4px;
    color: $accent-primary;
    text-decoration: underline;
    text-decoration-color: $accent-border;
    text-underline-offset: .2em;
    text-decoration-skip-ink: none;
  }

  &__data {
    color: $border;
  }
}
</style>
