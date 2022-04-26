<template>
  <div class="main v-padded">
    <h3 class="row-title">Latest Publications</h3>
    <template v-if="research.length > 0">
      <research-item 
        v-for="(item, i) in research[0].items.slice(0, pubListSize)" 
        :key="i" 
        :item="item" 
        :tags="tags" 
        :activeTagId="null" 
      />
    </template>
    <h3 class="row-title row-not-first">Latest Demos</h3>
    <template v-if="research.length > 0">
      <research-item 
        v-for="(item, i) in research[1].items.slice(0, demoListSize)" 
        :key="i" 
        :item="item" 
        :tags="tags" 
        :activeTagId="null" 
      />
    </template>
    <div class="link-buttons link-buttons-large">
      <router-link class="more-button" to="/research">See All</router-link>
    </div>
  </div>
</template>

<script>
import ResearchItem from '@/components/ResearchItem.vue'

const PUB_LIST_SIZE = 6
const DEMO_LIST_SIZE = 3

export default {
  name: 'research-category',
  components: {
    ResearchItem
  },
  props: {
    research: Array,
    tags: Object
  },
  data() {
    return {
      pubListSize: PUB_LIST_SIZE,
      demoListSize: DEMO_LIST_SIZE,
    }
  }
}
</script>

<style scoped>
.row-not-first {
  padding-top: 2.5rem;
}
.link-buttons {
  padding-top: 2.5rem;
}
</style>