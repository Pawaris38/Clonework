<template>
  <div class="container flex mt-8">
    <div class="w-full mr-20">
      <h1 class="text-3xl text-red-500 font-bold mb-8">Top Upcoming Games</h1>
      <trending-list></trending-list>
    </div>
    <div class="w-full">
      <h1 class="text-3xl text-red-500 font-bold mb-8">Top Upcoming Games</h1>
      <trending-list></trending-list>
    </div>
  </div>
</template>
<script>
import TrendingList from './TredingList.vue'
export default {
  components: {
    TrendingList,
  },
}
</script>
