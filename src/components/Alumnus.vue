<template>
  <div class="member row-card-item">
    <div 
      class="image" 
      :style="getStyleWithImage(member.image)">
    </div>
    <div class="text">
      <div class="text-row">
        <h4 class="text-item name">{{ member.name }}</h4>
        <a class="text-item email" :href="`mailto:${member.email}`">
          {{ member.email }}
        </a>
        <div class="text-item grad">
          {{ `(${member.degree}, ${member.year})` }}
        </div>
      </div>
      <div class="description">
        <vue-markdown :source="member.description"/>
      </div>
      <div class="link-buttons link-buttons-small">
        <vue-markdown :source="member.links" :breaks="false" />
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { sanitizeUrls } from '@/helpers/path.js'
export default {
  name: 'Alumnus',
  components: {
    VueMarkdown
  },
  props: {
    member: Object
  },
  methods: {
    sanitizeUrls(text) {
      return sanitizeUrls(text)
    },
    getStyleWithImage(url) {
      return { backgroundImage: `url("${this.sanitizeUrls(url)}")` }
    }
  }
}
</script>

<style scoped>
.member {
  position: relative;
  padding: 1rem 1rem 1rem 6rem;
  min-height: 7rem;
  color: var(--text-color);
  font-size: 0.9rem;
  overflow: auto;
}
.image {
  position: absolute;
  left: 0;
  border-radius: 1rem;
  width: 5rem;
  height: 5rem;
  background-size: cover;
}
.name {
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--main-color);
}
.email {
  display: block;
  text-decoration: none;
  color: var(--grey-color);
  font-size: 0.8rem;
}
.grad {
  display: block;
  color: var(--grey-color);
  font-size: 0.8rem;
}
.description {
  padding: 0.2rem 0;
}
.description /deep/ p {
  padding: 0;
  margin: 0.2rem 0;
  color: var(--grey-color);
  font-size: 0.8rem;
}
</style>
