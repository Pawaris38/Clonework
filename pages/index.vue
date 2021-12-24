<template>
  <div class="flex flex-col z-1">
    <spotlight-section> </spotlight-section>
    <news></news>
    <story></story>
    <trending></trending>
    <h1 class="text-red-500">{{ counter }}</h1>
  </div>
</template>
<script>
import News from '../components/home/news/News.vue'
import SpotlightSection from '../components/home/spotlight/SpotlightSection.vue'
import Story from '../components/home/story/Story.vue'
import trending from '../components/home/trending/Treding.vue'
export default {
  layout: 'navbar/Navbar',
  components: {
    News,
    SpotlightSection,
    Story,
    trending,
  },
  computed: {
    counter() {
      return this.$store.state.counter
    },
  },
}
</script>
