<template>
  <div class="category v-padded" :id="category.title.toLowerCase()">
    <h3 class="row-title">{{ category.title }}</h3>
    <div
      class="year-group"
      v-for="group in groups"
      :key="group.year || 'none'"
      :class="{ hidden: isGroupHidden(group), untitled: !group.year }"
    >
      <div class="year-label" v-if="group.year">{{ group.year }}</div>
      <div class="year-items">
        <template v-for="(item, i) in group.items">
          <research-item :key="i" :item="item" :tags="tags" :activeTagId="activeTagId" />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ResearchItem from '@/components/ResearchItem.vue'

export default {
  name: 'research-category',
  components: {
    ResearchItem
  },
  props: {
    category: Object,
    tags: Object,
    activeTagId: String
  },
  computed: {
    // Consecutive items with the same year form one group, keeping the sheet order.
    groups() {
      const groups = []
      for (const item of this.category.items) {
        const last = groups[groups.length - 1]
        if (last && last.year === item.year) {
          last.items.push(item)
        } else {
          groups.push({ year: item.year, items: [item] })
        }
      }
      return groups
    }
  },
  methods: {
    isGroupHidden(group) {
      return (this.activeTagId !== null) && !group.items.some(item => item.tags.includes(this.activeTagId))
    }
  }
}
</script>

<style scoped>
.year-group {
  padding: 0.8rem 0;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  max-height: 1000rem;
  transition: all 0.5s ease;
}
.year-group:first-of-type {
  border-top: none;
  padding-top: 0;
}
.year-group.hidden {
  opacity: 0;
  max-height: 0;
  padding: 0;
  border: none;
  overflow: hidden;
}
.year-label {
  padding-bottom: 0.8rem;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.3rem;
  color: var(--main-color);
}
</style>
