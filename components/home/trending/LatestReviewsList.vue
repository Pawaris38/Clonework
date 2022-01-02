<template>
  <div>
    <div
      class="border border-state-500 relative flex p-2 gap-3 w-full h-20"
      v-for="(blog, index) in blogs"
      :key="blog.index"
    >
      <div class="font-bold w-4">
        <span>{{ index + 1 }}. </span>
      </div>
      <div class="flex-1 font-bold leading-5">
        <p>{{ blog.title }}</p>
        <span class="text-gray-400 font-normal"
          >Release Date: {{ blog.releaseDate }}</span
        >
      </div>

      <div class="hexagon relative">
        <span
          class="absolute text-center text-white font-bold left-1/2 top-1/2 -translate-y-3"
          :class="blog.score > 9 ? '-translate-x-2.5' : '-translate-x-1.5'"
          >{{ blog.score }}</span
        >
      </div>
    </div>

    <div class="border border-state-500 p-4 text-primary font-bold">
      See all upcoming game
    </div>
  </div>
</template>
<script>
import { computed } from '@nuxtjs/composition-api'
export default {
  props: ['blogs'],
}
</script>
<style scoped>
.hexagon {
  position: relative;
  width: 39px;
  height: 22.52px;
  background-color: #03045e;
  margin: auto 0;
}

.hexagon:before,
.hexagon:after {
  content: '';
  position: absolute;
  width: 0;
  border-left: 19.5px solid transparent;
  border-right: 19.5px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 11.26px solid #03045e;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 11.26px solid #03045e;
}
</style>
