<template>
  <div class="overflow-auto w-full h-full flex mb-2">
    <div class="w-4/6 mr-4 relative" :class="{ isplay: isPlay }">
      <div
        class="max-w-xs min-w-min relative cursor-pointer"
        @click="selectVideo"
      >
        <base-card class="aspect-w-16 aspect-h-9">
          <img :src="thumbnail" class="object-cover" /><span
            v-if="isPlay"
            class="w-10 md:w-5 lg:w-6 left-1/2 top-1/2 absolute z-10 -translate-x-5 -translate-y-3 md:-translate-x-3 md:-translate-y-1"
            ><img src="@/assets/images/youtube.png" alt=""
          /></span>
        </base-card>
      </div>
    </div>
    <div class="w-full leading-4 cursor-pointer" @click="selectVideo">
      <h3 class="text-base line-clamp-2">
        {{ title }}
      </h3>
    </div>
  </div>
</template>
<script>
export default {
  emits: ['selected-video'],
  props: ['thumbnail', 'youtubeUrl', 'title', 'isPlay'],
  setup(props, context) {
    const selectVideo = function () {
      context.emit('selected-video', props.youtubeUrl)
    }
    return { selectVideo }
  },
}
</script>
<style scoped>
.isplay {
  opacity: 0.5;
  z-index: 2;
}
</style>
