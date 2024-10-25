<script setup lang="ts">
import type { DataComments } from '~/types/types';

// Подключаем хранилище пользователя для доступа к данным и методам, связанным с пользователем
const userStore = useUserStore()

// Определяем свойства компонента, включая объект данных комментариев и идентификатор поста
const props = defineProps<{
  dataComments: DataComments,
  postId: string
}>()

// Вычисляем количество комментариев с учетом удаленных
const sumOfComments = computed(() => {
  // Извлекаем объект с удалёнными комментариями для данного поста из хранилища пользователя
  const deleteComments = userStore.user.post[Number(props.postId)]?.deleteComments

  // Если есть удалённые комментарии, вычитаем их количество из общего количества комментариев,
  // иначе возвращаем общее количество комментариев
  if (deleteComments) {
    return props.dataComments.comments.length - Object.keys(deleteComments).length
  } else {
    return props.dataComments.comments.length
  }
})
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
