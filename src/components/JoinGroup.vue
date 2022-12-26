<template>
  <div class="group v-padded">
    <h3 class="row-title">{{ group.type }}</h3>
    <template v-for="(join, i) in group.joinus" >
      <join :key="i" :join="join" />
    </template>
  </div>
</template>

<script>
import Join from '@/components/JoinUs.vue'

export default {
  name: 'JoinGroup',
  components: {
    Join
  },
  props: {
    group: Object
  }
}
</script>

