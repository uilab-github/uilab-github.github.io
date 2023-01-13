<template>
  <div class="joinus">
    <screen backgroundSrc="@/images/backgrounds/cherry_blossom.jpg">
      <h2>Join U&amp;I Lab.</h2><br />
      <small>Users &amp; Information Lab. @ KAIST</small>
    </screen>
    <div class="row" v-for="(group, i) in joinus" :key="i">
      <div class="container">
        <join-group :group="group"/>
      </div>
    </div>
  </div>
</template>

<script>
import Screen from '@/components/Screen.vue'
import JoinGroup from '@/components/JoinGroup.vue'

export default {
  name: 'joinus',
  components: {
    Screen,
    JoinGroup
  },
  props: {
    joinus: Array
  },
}
</script>
