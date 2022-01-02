<template>
  <div>
    <div v-for="blog in blogs" :key="blog.contentID">
      <news-card :content="blog"></news-card>
    </div>
  </div>
</template>

<script>
import NewsCard from './NewsCard.vue'
export default {
  components: {
    NewsCard,
  },
  props: ['blogs'],
}
</script>
