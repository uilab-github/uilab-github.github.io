<template>
  <div class="research">
    <screen backgroundSrc="@/images/backgrounds/library.jpg">
      <h2>Research</h2><br />
      <small>Users &amp; Information Lab. @ KAIST</small>
    </screen>
    <div class="row">
      <div class="container">
        <tag-selector :tags="tags" :research="research" v-model="activeTagId" />
      </div>
    </div>
    <div class="row" v-for="(category, i) in visibleResearch" :key="i">
      <div class="container">
        <research-category 
          :category="category" 
          :tags="tags" 
          :activeTagId="activeTagId"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import ResearchCategory from '@/components/ResearchCategory.vue'
import TagSelector from '@/components/TagSelector.vue'

export default {
  name: 'research',
  components: {
    Screen,
    ResearchCategory,
    TagSelector
  },
  props: {
    research: Array,
    tags: Object,
  },
  data() {
    return {
      activeTagId: null
    }
  },
  computed: {
    // Drop categories with no paper under the selected tag. Removing the row
    // (rather than hiding it) keeps the alternating row backgrounds correct.
    visibleResearch() {
      if (this.activeTagId === null) {
        return this.research
      }
      return this.research.filter(category =>
        category.items.some(item => item.tags.includes(this.activeTagId))
      )
    }
  }
}
</script>

