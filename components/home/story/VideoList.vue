<template>
  <div class="w-full cursor-pointer" @click="chooseVideo">
    <div class="overflow-auto w-full h-full">
      <div class="flex mb-2">
        <div class="w-4/6 mr-4">
          <div class="max-w-xs min-w-min">
            <base-card class="aspect-w-16 aspect-h-9">
              <img :src="image" class="" />
            </base-card>
          </div>
        </div>
        <div class="w-full leading-4">
          <h3 class="text-base lineclamp2">
            <!-- {{ comment }} -->
            The Witcher: Blood Origin - Official Teaser Trailer
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from '@nuxtjs/composition-api'
export default {
  emits: ['selected-video'],
  props: ['image', 'youtubeUrl'],
  setup() {
    const chooseVideo = function () {
      const data = ref({
        thumbnail: 'https://www.youtube.com/embed/AJEoJYgktb4',
      })
      console.log('component' + data.value.thumbnail)
      $nuxt.$emit('selected-video', data.value.thumbnail)
    }

    return { chooseVideo }
  },
}
</script>
<style scoped>
.lineclamp1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.lineclamp2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>
