<template>
  <div>
    <base-card>
      <div class="card-container">
        <div class="relative overflow-hidden group">
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
                  :style="{ 'background-color': titleBgcolor }"
                ></div>
                <h1
                  class="relative text-lg m-0 p-1 text-left text-white group-hover:underline lineclamp4"
                >
                  {{ title }}
                </h1>
              </div>
            </div>
          </a>
        </div>
      </div>
    </base-card>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'
import BaseCard from '~/components/ui/BaseCard.vue'
export default {
  components: { BaseCard },
  setup() {
    //Data
    const link = ref('https://www.ign.com/')
    const thumbnail = ref('https://picsum.photos/185/306/?image=1')
    const title = ref(
      'Call of duty Vangurad multiplayer review multiplayer review'
    )
    const titleBgcolor = ref('#297afb')
    const isYoutube = ref(false)

    return { link, thumbnail, title, titleBgcolor, isYoutube }
  },
}
</script>

<style scoped lang="postcss">
.card-container {
  @apply flex flex-col;
}
.lineclamp4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
</style>
