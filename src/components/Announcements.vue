<template>
  <div class="announcements v-padded">
    <h3 class="row-title">Announcements</h3>
    <div 
      v-for="(announcement, i) in announcements" 
      class="announcement row-item"
      :key="i"
    >
      <h4 v-if="announcement.title" class="announcement-title">
        {{ announcement.title }}
      </h4>
      <div class="announcement-content">
        <vue-markdown
          :source="announcement.content"
          :anchorAttributes="{ target: '_blank', rel: 'noopener noreferrer' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'Announcements',
  components: {
    VueMarkdown
  },
  props: {
    announcements: Array,
  },
}
</script>

<style scoped>
.announcement-title {
  margin: 0;
  padding: 0 0 0.2rem 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--main-color);
}
.announcement-content {
  max-width: 48rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  font-size: 1rem;
  color: var(--text-color);
}
</style>