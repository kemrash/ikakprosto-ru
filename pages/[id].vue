<script setup lang="ts">
import { pageNotFound } from '~/utils/Page';

// Определяем метаданные страницы, устанавливая заголовок страницы как 'Post'
definePageMeta({
  title: 'Post',
})

// Получаем объект маршрута для доступа к параметрам текущего маршрута
const route = useRoute()

// Вычисляем идентификатор поста, извлекая его из параметров маршрута
const id = computed(() => `${route.params.id}`)

// Подключаем хранилище постов для работы с данными поста и комментариев
const postStore = usePostStore()

// Загружаем данные поста и комментарии асинхронно и сохраняем их в хранилище
await useAsyncData('post', async () => Promise.all([postStore.getDataPost(id.value), postStore.getDataComments(id.value)]))

// Если данные поста не загружены, вызываем функцию для обработки ситуации с отсутствием страницы
if (!postStore.dataPost) {
  pageNotFound()
}
</script>

<template>
  <main v-if="postStore.dataPost" class="main">
    <h1 class="visually-hidden">Post</h1>
    <AboutPostSection :post="postStore.dataPost" />
    <CommentsSection v-if="postStore.dataComments" :data-comments="postStore.dataComments" :post-id="id" />
  </main>
</template>

<style lang="scss" scoped></style>
