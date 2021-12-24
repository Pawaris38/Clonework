<template>
  <div>
    <!-- desktop -->
    <div class="container hidden lg:flex lg:flex-col">
      <div class="gap-4 items-center w-full">
        <button
          class="-ml-1 mb-2 border-4 border-white rounded-full text-3xl text-base"
          @click="select('lastest')"
          :class="activeLastest"
        >
          Lastest News
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="select('article')"
          :class="activeArticle"
        >
          Articles
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="select('review')"
          :class="activeReview"
        >
          Reviews
        </button>
      </div>
      <news-list></news-list>
    </div>
    <!-- tablet -->
    <div class="md:container lg:hidden hidden md:flex md:flex-col">
      <div class="flex gap-4 items-center w-full">
        <button
          class="-ml-1 mb-2 border-4 border-white rounded-full text-3xl text-base"
          @click="select('lastest')"
          :class="activeLastest"
        >
          Lastest News
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="select('article')"
          :class="activeArticle"
        >
          Articles
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="select('review')"
          :class="activeReview"
        >
          Reviews
        </button>
      </div>
      <news-list></news-list>
    </div>
    <!-- mobile -->
    <div class="container-none md:hidden px-2">
      <div class="flex gap-4 items-center w-full">
        <button
          class="-ml-1 mb-2 border-4 border-white rounded-full text-3xl text-base"
          @click="select('lastest')"
          :class="activeLastest"
        >
          Lastest News
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="select('article')"
          :class="activeArticle"
        >
          Articles
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="select('review')"
          :class="activeReview"
        >
          Reviews
        </button>
      </div>
      <news-list></news-list>
    </div>
  </div>
</template>
<script>
import { ref, computed } from '@nuxtjs/composition-api'
import NewsList from './NewsList.vue'

export default {
  setup() {
    const news = ref('')
    // const mode = ref('lastest-news')

    // const selectLastest = () => {
    //   mode.value = 'lastest-news'
    // }
    // const selectArticle = () => {
    //   mode.value = 'article'
    // }
    // const selectReview = () => {
    //   mode.value = 'review'
    // }
    const select = (name) => {
      news.value = name
    }
    const activeLastest = computed(() => {
      return { active: news.value === 'lastest' || news.value === '' }
    })
    const activeArticle = computed(() => {
      return { active: news.value === 'article' }
    })
    const activeReview = computed(() => {
      return { active: news.value === 'review' }
    })
    return { activeLastest, activeArticle, activeReview, select }
  },
  components: {
    NewsList,
  },
}
</script>
<style scoped>
.active {
  background-color: #03045e;
  padding: 0.2rem 1rem;
  color: white;
}
</style>
