<template>
  <div>
    <!-- desktop -->
    <div class="container hidden w-full lg:flex lg:flex-col mt-4 mb-8">
      <h1 class="uppercase font-bold font-title text-3xl mb-4 text-primary">
        Spotlight
      </h1>
      <spotlight-list
        :contents="spotlightContentList"
        class="grid grid-cols-4 gap-8"
      ></spotlight-list>
    </div>
    <!-- tablet -->
    <div class="md:container lg:hidden hidden md:flex md:flex-col mt-4 mb-8">
      <h1 class="uppercase font-bold text-3xl mb-4 text-primary">Spotlight</h1>
      <spotlight-list
        :contents="spotlightContentList"
        class="grid grid-cols-4 gap-4"
      ></spotlight-list>
    </div>
    <!-- mobile -->
    <div class="container-none mx-auto md:hidden flex flex-col mt-4 mb-8 px-2">
      <h1 class="uppercase font-bold text-3xl mb-2 text-primary pl-4">
        Spotlight
      </h1>

      <spotlight-list
        :contents="spotlightContentList"
        class="grid grid-cols-2 gap-0.5"
      ></spotlight-list>
    </div>
  </div>
</template>
<script>
import SpotlightList from './SpotlightList.vue'
import { ref, useStore } from '@nuxtjs/composition-api'

export default {
  components: { SpotlightList },
  setup() {
    const store = useStore()
    const spotlightContentList = ref(store.getters['home/spotlightContent'])

    return { spotlightContentList }
  },
}
</script>
