<template>
  <div>
    <div
      class="border border-state-500 p-3"
      v-for="(blog, index) in blogs"
      :key="blog"
    >
      <div class="font-bold">
        <span class="mr-1">{{ index + 1 }}.</span>
        <span>final fantasy 2014 </span>
      </div>

      <span class="ml-5 text-gray-400">2022</span>
    </div>
    <div class="border border-state-500 p-4 text-red-500 font-bold">
      See all upcoming game
    </div>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  setup() {
    const blogs = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return { blogs }
  },
}
</script>
