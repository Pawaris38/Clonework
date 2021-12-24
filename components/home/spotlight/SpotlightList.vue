<template>
  <div>
    <div v-for="item in items" :key="item">
      <spotlight-card></spotlight-card>
    </div>
  </div>
</template>
<script>
import SpotlightCard from './SpotlightCard.vue'
import { ref } from '@nuxtjs/composition-api'

export default {
  components: {
    SpotlightCard,
  },
  setup() {
    const items = ref([1, 2, 3, 4])

    return { items }
  },
}
</script>
