<template>
  <div class="row-card-item">
    <div class="member">
      <div 
        class="member-image" 
        :style="getStyleWithImage(member.image)">
      </div>
      <div class="member-text">
        <h4 class="member-name">{{ member.name }}</h4>
        <a class="member-email" :href="`mailto:${member.email}`">
          {{ member.email }}
        </a>
        <div class="member-description">
          <vue-markdown :source="member.description"/>
        </div>
        <div class="link-buttons">
          <vue-markdown :source="sanitizeUrls(member.links)" :breaks="false" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import { sanitizeUrls } from '@/helpers/path.js'

export default {
  name: 'Member',
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

