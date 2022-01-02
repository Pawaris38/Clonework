<template>
  <div>
    <!-- desktop -->
    <div class="container hidden lg:flex">
      <div class="w-full mr-20">
        <h1 class="text-3xl text-primary font-bold mb-8">Top Upcoming Games</h1>
        <trending-list :blogs="trendingContentList"></trending-list>
      </div>
      <div class="w-full">
        <h1 class="text-3xl text-primary font-bold mb-8">Latest Reviews</h1>
        <lastest-reviews-list
          :blogs="reviewsContentList"
        ></lastest-reviews-list>
      </div>
    </div>
    <!-- tablet -->
    <div class="md:container lg:hidden hidden md:flex">
      <div class="w-full mr-20">
        <h1 class="text-3xl text-primary font-bold mb-8">Top Upcoming Games</h1>
        <trending-list :blogs="trendingContentList"></trending-list>
      </div>
      <div class="w-full">
        <h1 class="text-3xl text-primary font-bold mb-8">Latest Reviews</h1>
        <lastest-reviews-list
          :blogs="reviewsContentList"
        ></lastest-reviews-list>
      </div>
    </div>
    <!-- mobile -->
    <div class="container-none mx-auto md:hidden flex flex-col px-2">
      <div class="w-full mb-8">
        <h1 class="text-3xl text-primary font-bold mb-4">Top Upcoming Games</h1>
        <trending-list :blogs="trendingContentList"></trending-list>
      </div>
      <div class="w-full">
        <h1 class="text-3xl text-primary font-bold mb-4">Latest Reviews</h1>
        <lastest-reviews-list
          :blogs="reviewsContentList"
        ></lastest-reviews-list>
      </div>
    </div>
  </div>
</template>
<script>
import TrendingList from './TredingList.vue'
import LastestReviewsList from './LatestReviewsList.vue'
import { ref, useStore } from '@nuxtjs/composition-api'
export default {
  components: {
    TrendingList,
    LastestReviewsList,
  },
  setup() {
    const store = useStore()
    const trendingContentList = ref(store.getters['home/trendingContent'])
    const reviewsContentList = ref(store.getters['home/reviewsContent'])
    return { trendingContentList, reviewsContentList }
  },
}
</script>
