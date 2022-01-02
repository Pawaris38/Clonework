<template>
  <div>
    <div class="flex mb-3">
      <!-- only 16:9 picture -->
      <div class="w-2/6">
        <div class="max-w-xs min-w-content relative cursor-pointer">
          <base-card class="aspect-w-16 aspect-h-9">
            <img :src="cardImage" class="object-cover" />
          </base-card>
        </div>
      </div>

      <div class="relative ml-2 md:ml-6 overflow-hidden flex-1">
        <div class="line-clamp-2">
          <h1 class="font-bold md:text-lg text-sm leading-5 md:leading-6">
            {{ cardContent }}
          </h1>
        </div>
        <div class="absolute bottom-0 left-0 md:flex">
          <div class="flex flex-col w-full md:w-auto">
            <div class="uppercase bg-gray-100 hidden md:block">
              {{ cardType }}
            </div>
            <div class="flex gap-5 justify-between md:justify-start">
              <div class="text-yellow-600">
                {{ cardTime }}
              </div>
              <div class="flex items-center">
                <font-awesome-icon icon="comment" />
                <div class="pl-1">10</div>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 md:flex justify-center hidden">
          <div class="rounded-full w-8 h-8 bg-yellow-500"></div>
          <div class="p-1">{{ cardName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarBaseButton from '~/components/ui/NavbarBaseButton.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
import { ref } from '@nuxtjs/composition-api'
export default {
  components: { BaseCard, NavbarBaseButton },
  props: ['content'],
  setup(props) {
    const cardName = ref(props.content.userName)
    const cardType = ref(props.content.type)
    const cardTime = ref(props.content.time)
    const cardImage = ref(props.content.image)
    const cardContent = ref(props.content.content)
    return {
      cardName,
      cardType,
      cardTime,
      cardImage,
      cardContent,
    }
  },
}
</script>
