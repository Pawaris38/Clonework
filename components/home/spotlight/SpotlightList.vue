<template>
  <div>
    <div v-for="content in contents" :key="content.contentID">
      <spotlight-card :content="content"></spotlight-card>
    </div>
  </div>
</template>
<script>
import SpotlightCard from './SpotlightCard.vue'

export default {
  components: {
    SpotlightCard,
  },
  props: ['contents'],
}
</script>
