<script setup lang="ts">
import userImg from "../assets/img/user.png";
import type { Comment } from '~/types/types';

// Используем store пользователя для доступа к данным и методам, связанным с пользователем
const userStore = useUserStore()

// Определяем свойства компонента, в данном случае передаем объект комментария типа Comment
const props = defineProps<{
  comment: Comment
}>()

// Определяем текущую дату в формате локальной строки
const today = new Date().toLocaleDateString()

// Проверяем, был ли комментарий удален (если комментарий отмечен как удалённый в хранилище пользователя, возвращаем true)
const isCommentDelete = computed(() => userStore.user.post[props.comment.postId]?.deleteComments?.[props.comment.id] ? true : false)

// Функция для отметки комментария как удалённого
const onDelete = (): void => {
  // Если поста с указанным идентификатором комментария ещё нет в userStore,
  // создаём его и добавляем отметку об удалении комментария
  if (!userStore.user.post[props.comment.postId]) {
    userStore.user.post[props.comment.postId] = {
      deleteComments: {
        [props.comment.id]: true
      }
    }
  } else {
    // Если пост существует, добавляем или обновляем отметку об удалении конкретного комментария
    userStore.user.post[props.comment.postId].deleteComments = {
      ...userStore.user.post[props.comment.postId].deleteComments,
      [props.comment.id]: true
    }
  }
}

// Функция для отмены удаления комментария (восстановление комментария)
const onReturn = (): void => {
  // Удаляем отметку об удалении комментария из объекта deleteComments
  delete userStore.user.post[props.comment.postId]?.deleteComments?.[props.comment.id]
}

</script>

<template>
  <div class="comment">
    <img :src="userImg" class="comment__img" alt="" aria-hidden="true">
    <span class="text comment__name">
      {{ comment.user.username }}
    </span>
    <div class="comment__box" :class="{ 'comment__box--delete': isCommentDelete }">
      <p class="text comment__desc">
        {{ !isCommentDelete ? comment.body : 'This comment has been deleted.' }}
      </p>
      <div v-if="!isCommentDelete" class="comment__inner">
        <data :value="today" class="comment__data">Today</data>
        <button @click="onDelete" class="btn-reset comment__btn">
          Delete
        </button>
      </div>
      <button v-else @click="onReturn" class="btn-reset comment__btn-return">
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
