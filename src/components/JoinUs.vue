<template>
  <div class="row-item expandable">
    <div class="join">
      <h4 class="join-title">{{ join.title }}</h4>
      <div class="join-description">
        <vue-markdown :source="join.content"/>
      </div>
    </div>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Join',
  components: {
    VueMarkdown
  },
  props: {
    join: Object
  }
}
</script>

