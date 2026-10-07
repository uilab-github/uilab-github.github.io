<template>
  <div class="tag-selector v-padded">
    <h3 class="row-title">Topics</h3>
    <div class="link-buttons link-buttons-large">
      <a 
        class="tag" 
        :class="{ active: value === null }"
        @click="() => $emit('input', null)"
      >
        Show All
      </a>
      <a
        class="tag" 
        v-for="tagId in sortedTagIds"
        :key="tagId" 
        :class="{ active: value === tagId }"
        :style="{ backgroundColor: tags[tagId].color }"
        @click="() => $emit('input', tagId)"
      >
        {{ tags[tagId].title }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tag-selector',
  props: {
    tags: Object,
    research: Array,
    value: String
  },
  computed: {
    // Most-used tags over the last 3 years come first; ties keep the sheet order.
    sortedTagIds() {
      const minYear = new Date().getFullYear() - 2
      const counts = {}
      for (const category of this.research || []) {
        for (const item of category.items) {
          if (!item.year || item.year < minYear) {
            continue
          }
          for (const tagId of item.tags) {
            counts[tagId] = (counts[tagId] || 0) + 1
          }
        }
      }
      return Object.keys(this.tags)
        .map((tagId, i) => ({ tagId, i, count: counts[tagId] || 0 }))
        .sort((a, b) => (b.count - a.count) || (a.i - b.i))
        .map(({ tagId }) => tagId)
    }
  }
}
</script>

<style scoped>
.tags {
  padding: 0.3em 0;
  overflow: auto;
}
.link-buttons {
  flex-wrap: wrap;
  overflow: visible;
  gap: 0.5rem 0.4rem;
}
.link-buttons.link-buttons-large .tag {
  margin: 0;
}
.tag {
  opacity: 0.5;
}
.tag.active {
  opacity: 1;
  cursor: default;
  box-shadow: 0 0 0 2px var(--white-color), 0 0 0 4px var(--text-color);
}
.tag:hover {
  opacity: 1;
}
</style>
