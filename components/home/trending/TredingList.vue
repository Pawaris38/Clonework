<template>
  <div>
    <div
      class="border border-state-500 p-2 relative flex w-full gap-3 h-20"
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
      <div class="my-auto">
        <div v-if="blog.imageUrl !== ''">
          <div class="aspect-w-16 aspect-h-9 w-20 h-auto">
            <img :src="blog.imageUrl" alt="" class="object-cover" />
          </div>
        </div>
        <div v-else class="w-20"></div>
      </div>
    </div>
    <div class="border border-state-500 p-4 text-primary font-bold">
      See all upcoming game
    </div>
  </div>
</template>
<script>
export default {
  props: ['blogs'],
}
</script>
<style scoped>
.hexagon {
  position: relative;
  width: 40px;
  height: 23.09px;
  background-color: #03045e;
  margin: 11.55px 0;
}

.hexagon:before,
.hexagon:after {
  content: '';
  position: absolute;
  width: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 11.55px solid #03045e;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 11.55px solid #03045e;
}
.lineclamp2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
