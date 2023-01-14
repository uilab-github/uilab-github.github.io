<template>
  <div class="demo-item row-item">
    <div class="title-row">
      <h4 class="title">{{ item.title }}</h4>
    </div>
    <div class="authors">{{ item.authors }}</div>
    <div class="booktitle">{{ item.booktitle }}</div>
    <div class="link-buttons link-buttons-small">
      <vue-markdown 
        :source="sanitizeUrls(item.link)" 
        :breaks="false" 
        :anchorAttributes="{ target: '_blank', rel: 'noopener noreferrer' }" 
      />
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { sanitizeUrls } from '@/helpers/path.js'
export default {
  name: 'demo-item',
  components: {
    VueMarkdown
  },
  props: {
    item: Object
  },
  methods: {
    sanitizeUrls(text) {
      return sanitizeUrls(text)
    },
  }
}
</script>

<style scoped>
.demo-item {
  padding: 0.3em 0;
  color: var(--text-color);
  max-height: 13rem;
  transition: all 0.5s ease;
}
.title-row {
  margin: 0;
  padding: 0 0 0.3rem 0;
  overflow: auto;
}
.title {
  display: block;
  float: left;
  margin: 0 0.3rem 0 0;
  font-size: 1rem;
  line-height: 1.1rem;
  font-weight: bold;
}
.authors {
  padding: 0;
  font-size: 0.8rem;
  font-weight: bold;
  color: var(--grey-color);
}
.booktitle {
  padding: 0;
  font-size: 0.8rem;
  font-weight: normal;
  font-style: italic;
  color: var(--grey-color);
}
</style>