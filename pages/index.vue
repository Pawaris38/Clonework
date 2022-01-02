<template>
  <div class="flex flex-col z-1">
    <spotlight-section class="mb-12"> </spotlight-section>
    <news class="mb-12"></news>
    <story class="mb-12"></story>
    <trending class="mb-12"></trending>
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
}
</script>
