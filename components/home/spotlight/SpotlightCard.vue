<template>
  <div>
    <base-card class="flex flex-col flex-grow-0relative overflow-hidden group">
      <a :href="link">
        <img
          :src="thumbnail"
          class="w-full h-full transition duration-500 ease-in transform hover:scale-105"
        />
        <div class="w-full absolute bottom-0">
          <div v-if="isYoutube" class="relative left-1 w-8 h-8 shadow-md">
            <img src="~assets/images/youtube.png" alt="" />
          </div>
          <div class="relative w-full h-full top-0 p-1">
            <div
              class="absolute w-full h-full rounded-b inset-0 transition-opacity duration-500 ease-out opacity-75 hover:opacity-85"
              :style="{ 'background-color': titleBGColor }"
            ></div>
            <h1
              class="relative text-lg m-0 p-1 text-left text-white group-hover:underline line-clamp-4 font-bold"
            >
              {{ title }}
            </h1>
          </div>
        </div>
      </a>
    </base-card>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import BaseCard from '~/components/ui/BaseCard.vue'
export default {
  components: { BaseCard },
  props: ['content'],
  setup(props) {
    const link = ref(props.content.link)
    const thumbnail = ref(props.content.thumbnail)
    const title = ref(props.content.title)
    const titleBGColor = ref(props.content.titleBGColor)
    const isYoutube = ref(props.content.isYoutube)
    return { link, thumbnail, title, titleBGColor, isYoutube }
  },
}
</script>
