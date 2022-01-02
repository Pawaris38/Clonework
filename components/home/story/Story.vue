<template>
  <div>
    <!-- desktop -->
    <div class="container hidden lg:flex lg:justify-between lg:items-start">
      <div class="md:w-5/6 w-full mr-9">
        <div class="font-bold text-3xl text-primary mb-4">Video</div>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="activeVideo"
            frameborder="0"
            class="object-cover"
          ></iframe>
        </div>
      </div>

      <div class="flex flex-col w-3/6">
        <div class="text-3xl font-bold text-primary md:text-right mb-4">
          <h1>Popular Stories</h1>
        </div>
        <video-list
          v-for="blog in storyContentList"
          :key="blog.id"
          :thumbnail="blog.thumbnail"
          :youtubeUrl="blog.youtubeUrl"
          :title="blog.title"
          :isPlay="blog.isPlay"
          @selected-video="selectVideo"
        ></video-list>
      </div>
    </div>

    <!-- tablet -->
    <div class="md:container lg:hidden hidden md:flex">
      <div class="md:w-5/6 w-full mr-9">
        <div class="font-bold text-3xl text-primary mb-4">Video</div>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="activeVideo"
            frameborder="0"
            class="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
      <div class="flex flex-col w-3/6">
        <div class="text-3xl font-bold text-primary md:text-right mb-4">
          <h1>Popular Stories</h1>
        </div>
        <video-list
          v-for="blog in storyContentList"
          :key="blog.id"
          :thumbnail="blog.thumbnail"
          :youtubeUrl="blog.youtubeUrl"
          :title="blog.title"
          :isPlay="blog.isPlay"
          @selected-video="selectVideo"
        ></video-list>
      </div>
    </div>
    <!-- mobile -->
    <div class="container-none md:hidden flex flex-col px-2">
      <div class="md:w-5/6 w-full mr-9">
        <div class="font-bold text-3xl text-primary mb-4">Video</div>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            :src="activeVideo"
            frameborder="0"
            class="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div class="text-3xl font-bold text-primary md:text-right mb-4">
          <h1>Popular Stories</h1>
        </div>
        <video-list
          v-for="blog in storyContentList"
          :key="blog.id"
          :thumbnail="blog.thumbnail"
          :youtubeUrl="blog.youtubeUrl"
          :title="blog.title"
          :isPlay="blog.isPlay"
          @selected-video="selectVideo"
        ></video-list>
      </div>
    </div>
  </div>
</template>
<script>
import VideoList from './VideoList.vue'
import { useStore, ref, watch } from '@nuxtjs/composition-api'
export default {
  components: {
    VideoList,
  },

  setup() {
    const store = useStore()
    const storyContentList = ref(store.getters['home/storyContent'])
    const activeVideo = ref(storyContentList.value[0].youtubeUrl)

    watch(activeVideo, function (newValue, oldValue) {
      console.log('Old Value ' + oldValue)
      console.log('New Value ' + newValue)
    })

    const selectVideo = function (data) {
      activeVideo.value = data
      storyContentList.value.map((item) => {
        if (item.youtubeUrl === data) {
          item.isPlay = true
        } else {
          item.isPlay = false
        }
      })
    }
    return { selectVideo, storyContentList, activeVideo }
  },
}
</script>
<style scoped>
.container-iframe {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
