<template>
  <div>
    <div class="flex mb-2 container-">
      <!-- <div class="aspect-w-16 aspect-h-9">
        <div class="w-full h-full">
          <img :src="newslists[0].img" alt="" class="rounded w-full h-full" />
        </div>
      </div> -->

      <div class="aspect-video">
        <base-card class="max-w-xs min-w-min">
          <img
            src="https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            class="object-cover h-full w-full"
          />
        </base-card>
      </div>

      <div class="flex-grow relative ml-2 md:ml-6 overflow-hidden">
        <div class="lineclamp2">
          <h1 class="font-bold md:text-lg text-sm pb-2 leading-7 md:leading-6">
            {{ newslists[0].content }}
          </h1>
        </div>
        <div class="absolute -bottom-1 left-0 md:flex">
          <div class="flex flex-col w-full md:w-auto">
            <div class="uppercase bg-gray-100 hidden md:block">
              {{ newslists[0].type }}
            </div>
            <div class="flex gap-5 justify-between md:justify-start">
              <div class="text-yellow-600">
                {{ newslists[0].time }}
              </div>
              <div class="flex items-center">
                <font-awesome-icon icon="comment" />
                10
              </div>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 right-0 md:flex justify-center hidden">
          <div class="rounded-full w-8 h-8 bg-yellow-500"></div>
          <div class="text-center">{{ newslists[0].name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@nuxtjs/composition-api'
import NavbarBaseButton from '~/components/ui/NavbarBaseButton.vue'
import BaseCard from '~/components/ui/BaseCard.vue'
export default {
  components: { BaseCard, NavbarBaseButton },
  setup() {
    const newslists = reactive([
      {
        id: 1,
        content: `Marvel's Avengers: How Ms. Marvel Is the Game's Unexpected Hero – IGN
        First sssssssssssssssss`,
        name: 'นายนิว เทพซ่า',
        type: 'PC',
        time: '43 min ago',
        img: 'https://image.shutterstock.com/image-vector/high-tech-technology-geometric-connection-600w-1499204828.jpg',
      },
      {
        id: 2,
        content: 'The Witcher Season 2: Exclusive Geralt and Ciri Clip',
        name: 'นายขิง เทพซ่า',
        type: 'Playstation 5',
        time: '20 min ago',
        img: 'https://cdn-images.postach.io/55d95f56-44e7-4986-b435-ef99f16dff7b/b4fa8657-4429-49b7-a396-11ab3eafa5b3/77ec1f01-36a3-4c3d-8994-7fd498a9df01.png',
      },
    ])
    // const name = computed(() => {
    //   return props.user
    // })
    // const cont = computed(() => {
    //   return props.text
    // })
    // const type = computed(() => {
    //   return props.tag
    // })
    // const time = computed(() => {
    //   return props.date
    // })
    // const img = computed(() => {
    //   return props.image
    // })
    return { newslists }
    // , name, cont, type, time, img
  },
}
</script>
<style scoped>
.lineclamp2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.aspect-img {
  padding-top: 75%;
}
</style>
