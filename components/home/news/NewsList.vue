<template>
  <div>
    <div class="md:ml-0 ml-2" v-for="blog in blogs" :key="blog">
      <news-card></news-card>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import NewsCard from './NewsCard.vue'
export default {
  components: {
    NewsCard,
  },
  setup() {
    const blogs = ref([1, 2, 3])
    return { blogs }
  },
}
</script>
