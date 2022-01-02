<template>
  <div>
    <!-- desktop -->
    <div class="container hidden lg:flex lg:flex-col">
      <div class="gap-4 items-center w-full">
        <button
          class="-ml-1 mb-2 border-4 border-white rounded-full text-base"
          @click="selectContent('news')"
          :class="activeNews"
        >
          Lastest News
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="selectContent('article')"
          :class="activeArticle"
        >
          Articles
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="selectContent('review')"
          :class="activeReview"
        >
          Reviews
        </button>
      </div>

      <div v-if="news === 'news' || news === ''">
        <news-list :blogs="ContentsNews"></news-list>
      </div>
      <div v-else-if="news === 'article'">
        <news-list :blogs="ContentsArticles"></news-list>
      </div>
      <div v-else>
        <news-list :blogs="ContentsReviews"></news-list>
      </div>
    </div>
    <!-- tablet -->
    <div class="md:container lg:hidden hidden md:flex md:flex-col">
      <div class="flex gap-4 items-center w-full">
        <button
          class="-ml-1 mb-2 border-4 border-white rounded-full text-base"
          @click="selectContent('news')"
          :class="activeNews"
        >
          Lastest News
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="selectContent('article')"
          :class="activeArticle"
        >
          Articles
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="selectContent('review')"
          :class="activeReview"
        >
          Reviews
        </button>
      </div>
      <div v-if="news === 'news' || news === ''">
        <news-list :blogs="ContentsNews"></news-list>
      </div>
      <div v-else-if="news === 'article'">
        <news-list :blogs="ContentsArticles"></news-list>
      </div>
      <div v-else>
        <news-list :blogs="ContentsReviews"></news-list>
      </div>
    </div>
    <!-- mobile -->
    <div class="container-none md:hidden px-2">
      <div class="flex gap-4 items-center w-full">
        <button
          class="-ml-1 mb-2 border-4 border-white rounded-full text-base"
          @click="selectContent('news')"
          :class="activeNews"
        >
          Lastest News
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="selectContent('article')"
          :class="activeArticle"
        >
          Articles
        </button>
        <button
          class="mb-2 border-4 border-white rounded-full"
          @click="selectContent('review')"
          :class="activeReview"
        >
          Reviews
        </button>
      </div>
      <div v-if="news === 'news' || news === ''">
        <news-list :blogs="ContentsNews"></news-list>
      </div>
      <div v-else-if="news === 'article'">
        <news-list :blogs="ContentsArticles"></news-list>
      </div>
      <div v-else>
        <news-list :blogs="ContentsReviews"></news-list>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, useStore } from '@nuxtjs/composition-api'
import NewsList from './NewsList.vue'

export default {
  components: {
    NewsList,
  },
  setup() {
    const store = useStore()
    const ContentsNews = ref(store.getters['home/newsContentsNews'])
    const ContentsArticles = ref(store.getters['home/newsContentsArticles'])
    const ContentsReviews = ref(store.getters['home/newsContentsReviews'])
    const news = ref('')
    const selectContent = (name) => {
      news.value = name
    }

    const activeNews = computed(() => {
      return { active: news.value === 'news' || news.value === '' }
    })
    const activeArticle = computed(() => {
      return { active: news.value === 'article' }
    })
    const activeReview = computed(() => {
      return { active: news.value === 'review' }
    })
    return {
      activeNews,
      activeArticle,
      activeReview,
      selectContent,
      ContentsNews,
      ContentsArticles,
      ContentsReviews,
      news,
    }
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
