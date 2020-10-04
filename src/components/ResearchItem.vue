<template>
  <div class="research-item row-item" :class="{ hidden: isHidden() }">
    <div class="title-row">
      <h4 class="title">{{ item.title }}</h4>
      <template v-for="tagId in item.tags">
        <div 
          class="tag"
          v-if="tagId in tags"
          :key="tagId"
          :style="{ backgroundColor: tags[tagId].color }"
        >
          {{ tags[tagId].tag }}
        </div>
      </template>
    </div>
    <div class="authors">{{ item.authors }}</div>
    <div class="booktitle">{{ item.booktitle }}</div>
    <div class="link-buttons link-buttons-small">
      <vue-markdown
        :source="sanitizeUrls(item.links)"
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
  name: 'research-item',
  components: {
    VueMarkdown
  },
  props: {
    item: Object,
    tags: Object,
    activeTagId: String
  },
  methods: {
    isHidden() {
      return (this.activeTagId !== null) && !this.item.tags.includes(this.activeTagId)
    },
    sanitizeUrls(text) {
      return sanitizeUrls(text)
    },
  }
}
</script>

<style scoped>
.research-item {
  padding: 0.3em 0;
  color: var(--text-color);
  max-height: 13rem;
  transition: all 0.5s ease;
  /* transition: left 2s ease; */
}
.research-item.hidden {
  opacity: 0;
  max-height: 0;
  /* display: none; */
  padding: 0;
  margin: 0;
  overflow: hidden;
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
.tag {
  display: block;
  float: left;
  padding: 0 0.2rem;
  margin-right: 0.3rem;
  background-color: var(--grey-color);
  border-radius: 4px;
  color: var(--white-color);
  line-height: 1.1rem;
  height: 1.1rem;
  font-size: 0.7rem;
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