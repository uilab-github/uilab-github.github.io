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
    <div class="link-buttons link-buttons-large">
      <router-link class="more-button" to="/research">See All</router-link>
    </div>
    <h3 class="row-title row-not-first">Latest Manuscripts</h3>
    <template v-if="research.length > 0">
      <research-item 
        v-for="(item, i) in research[1].items.slice(0, manuListSize)" 
        :key="i" 
        :item="item" 
        :tags="tags" 
        :activeTagId="null" 
      />
    </template>
    <div class="link-buttons link-buttons-large">
      <router-link class="more-button" to="/research">See All</router-link>
    </div>
    <h3 class="row-title row-not-first">Latest Demos</h3>
    <template>
      <demo-item 
        v-for="(item, i) in demos.slice(0, demoListSize)" 
        :key="i" 
        :item="item" />
    </template>
    <div class="link-buttons link-buttons-large">
      <router-link class="more-button" to="/demos">See All</router-link>
    </div>
  </div>
</template>

<script>
import ResearchItem from '@/components/ResearchItem.vue'
import DemoItem from '@/components/DemoItem.vue'

const PUB_LIST_SIZE = 7
const DEMO_LIST_SIZE = 3

export default {
  name: 'latest',
  components: {
    ResearchItem,
    DemoItem
  },
  props: {
    research: Array,
    demos: Array,
    tags: Object
  },
  data() {
    return {
      pubListSize: PUB_LIST_SIZE,
      manuListSize: PUB_LIST_SIZE - 3,
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