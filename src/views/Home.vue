<template>
  <div class="home">
    <screen size="large" backgroundSrc="@/images/backgrounds/cs_building_night.jpg">
      <h1>Users &amp; Information Lab. @ KAIST</h1><br />
      <small>Natural Language Processing | Inclusive &amp; Responsible AI | Computational Social Science</small>
    </screen>
    <div v-if="announcements.length > 0" class="row">
      <div class="container">
        <announcements :announcements="announcements" />
      </div>
    </div>
    <div class="row">
      <div class="container">
        <lab-intro :tags="tags" />
      </div>
    </div>
    <div class="row">
      <div class="container">
        <latest-publications :research="research" :demos="demos" :tags="tags" />
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import LabIntro from '@/components/LabIntro.vue'
import Announcements from '@/components/Announcements.vue'
import LatestPublications from '@/components/LatestPublications.vue'

export default {
  name: 'home',
  components: {
    Screen,
    LabIntro,
    Announcements,
    LatestPublications
  },
  props: {
    announcements: Array,
    research: Array,
    demos: Array,
    tags: Object
  }
}
</script>
