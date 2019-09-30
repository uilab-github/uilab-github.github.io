<template>
  <div class="home">
    <screen size="large" backgroundSrc="@/images/backgrounds/cs_building_night.jpg">
      <h1>Users &amp; Information Lab. @ KAIST</h1><br />
      <small>Artificial Intelligence | Social Computing | Interactive Computing</small>
    </screen>
    <div v-if="announcements.length > 0" class="row">
      <div class="container">
        <announcements :announcements="announcements" />
      </div>
    </div>
    <div class="row">
      <div class="container">
        <latest-publications :research="research" :tags="tags" />
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import Announcements from '@/components/Announcements.vue'
import LatestPublications from '@/components/LatestPublications.vue'

export default {
  name: 'home',
  components: {
    Screen,
    Announcements,
    LatestPublications
  },
  props: {
    announcements: Array,
    research: Array,
    tags: Object
  }
}
</script>
