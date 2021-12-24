<template>
  <div>
    <!-- desktop -->
    <div class="container hidden lg:flex lg:justify-between lg:items-start">
      <div class="md:w-5/6 w-full mr-9">
        <div class="font-bold text-3xl text-red-500 mb-4">Video</div>
        <div class="container-iframe">
          <iframe
            :src="activeVideo.youtubeUrl"
            frameborder="0"
            class="responsive-iframe"
          ></iframe>
        </div>
      </div>
      <div class="flex flex-col w-3/6">
        <div class="text-3xl font-bold text-red-500 md:text-right mb-4">
          <h1>Popular Stories</h1>
        </div>
        <video-list
          v-for="blog in blogs"
          :key="blog.id"
          :image="blog.thumbnail"
          @click="show"
        ></video-list>
      </div>
    </div>

    <!-- tablet -->
    <div class="md:container lg:hidden hidden md:flex">
      <div class="md:w-5/6 w-full mr-9">
        <div class="font-bold text-3xl text-red-500 mb-4">Video</div>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/7vI0DtkWaD0"
            frameborder="0"
            class="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
      <div class="flex flex-col w-3/6">
        <div class="text-3xl font-bold text-red-500 md:text-right mb-4">
          <h1>Popular Stories</h1>
        </div>
        <video-list
          v-for="blog in blogs"
          :key="blog.id"
          :image="blog.thumbnail"
        ></video-list>
      </div>
    </div>
    <!-- mobile -->
    <div class="container-none md:hidden flex flex-col px-2">
      <div class="md:w-5/6 w-full mr-9">
        <div class="font-bold text-3xl text-red-500 mb-4">Video</div>
        <div class="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/7vI0DtkWaD0"
            frameborder="0"
            class="w-full h-full object-cover"
          ></iframe>
        </div>
      </div>
      <div class="flex flex-col w-full">
        <div class="text-3xl font-bold text-red-500 md:text-right mb-4">
          <h1>Popular Stories</h1>
        </div>
        <video-list
          v-for="blog in blogs"
          :key="blog.id"
          :image="blog.thumbnail"
        ></video-list>
      </div>
    </div>
  </div>
</template>
<script>
import VideoList from './VideoList.vue'
import { computed, reactive, ref } from '@nuxtjs/composition-api'
export default {
  components: {
    VideoList,
  },
  setup() {
    const blogs = reactive([
      {
        id: 1,
        thumbnail:
          'https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8MTYlM0E5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        youtubeUrl: 'https://www.youtube.com/embed/7vI0DtkWaD0',
      },
      {
        id: 2,
        thumbnail:
          'https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA',
        youtubeUrl: 'https://www.youtube.com/embed/7vI0DtkWaD0',
      },
      {
        id: 3,
        thumbnail:
          'https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA',
        youtubeUrl: 'https://www.youtube.com/embed/7vI0DtkWaD0',
      },
      {
        id: 4,
        thumbnail:
          'https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA',
        youtubeUrl: 'https://www.youtube.com/embed/7vI0DtkWaD0',
      },
    ])
    const activeVideo = ref(blogs[0])

    const saveData = computed(function (data) {
      console.log(data)
    })
    const show = function (data) {
      console.log('heee')
    }

    return { saveData, show, blogs, activeVideo }
  },
}
//  thumbnail:
//       'https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA',
//     youtubeURL: 'https://www.youtube.com/embed/jn9mHzXJIV0',

// thumbnail:
//       'https://i.ytimg.com/vi/jn9mHzXJIV0/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvJvk4k_UNB9nst4pFP-txM1TLZA',
//     youtubeURL: 'https://www.youtube.com/embed/jn9mHzXJIV0',
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
