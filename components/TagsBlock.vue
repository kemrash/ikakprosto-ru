<script setup lang="ts">
import tailIconId from '../assets/img/sprite/tail.svg';

defineProps<{
  tags: string[]
}>()
</script>

<template>
  <aside class="tags">
    <ul class="list-reset tags__list">
      <li v-for="tag, index in tags" :key="tag" class="tags__item">
        <svg v-if="index === 0" class="tags__icon">
          <use :xlink:href="`#${tailIconId}`" />
        </svg>
        <span class="tags__desc">
          {{ tag }}
        </span>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.tags {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 4px;
  }

  &__item {
    &:first-child {
      position: relative;
      padding-left: 11px;

      & .tags__desc {
        padding-left: 0;
        border-radius: 0 3px 3px 0;
      }
    }
  }

  &__desc {
    display: inline-block;
    padding: 0 4px;
    border-radius: 3px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.5px;
    background-color: $fills-quaternary;
  }

  &__icon {
    position: absolute;
    left: 0;
    top: 0;
    width: 11px;
    height: 100%;
  }
}
</style>
