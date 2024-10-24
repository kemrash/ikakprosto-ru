<script setup lang="ts">
import likeIconId from '../assets/img/sprite/like.svg';
import likeActiveIconId from '../assets/img/sprite/likeActive.svg';
import dislikeIconId from '../assets/img/sprite/dislike.svg';
import dislikeActiveIconId from '../assets/img/sprite/dislikeActive.svg';
import type { Post } from '~/types/types';

defineProps<{
  post: Post,
  isPostsPage?: boolean
}>()

const today = new Date().toLocaleDateString()

const isLikeActive = false
const isDislikeActive = false
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
        <button class="btn-reset post__btn post__btn-like" :class="{ 'post__btn-like--active': isLikeActive }">
          <svg class="post__icon">
            <use v-if="isLikeActive" :xlink:href="`#${likeActiveIconId}`" />
            <use v-else :xlink:href="`#${likeIconId}`" />
          </svg>
          Like
          <span class="post__btn-number">
            {{ post.reactions.likes }}
          </span>
        </button>
        <button class="btn-reset post__btn post__btn-dislike" :class="{ 'post__btn-dislike--active': isDislikeActive }">
          <svg class="post__icon">
            <use v-if="isDislikeActive" :xlink:href="`#${dislikeActiveIconId}`" />
            <use v-else :xlink:href="`#${dislikeIconId}`" />
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

    &--active {
      background-color: $red;
    }
  }

  &__btn-like--active,
  &__btn-like--active &__btn-number,
  &__btn-dislike--active,
  &__btn-dislike--active &__btn-number {
    color: $white-95;
  }

  &__btn-dislike {
    padding-right: 10px;
    border-radius: 0 14px 14px 0;

    &--active {
      background-color: $black-text;
    }
  }

  &__icon {
    width: 13px;
    height: 11px;
    transition: fill .3s ease-in-out;
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
