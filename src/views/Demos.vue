<template>
    <div class="demos">
      <screen backgroundSrc="@/images/backgrounds/library.jpg">
        <h2>Demos</h2><br />
        <small>Users &amp; Information Lab. @ KAIST</small>
      </screen>
      <div class="row">
        <div class="container">
          <demos :demos="demos" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Screen from '@/components/Screen.vue'
  import Demos from '@/components/Demos.vue'
  
  export default {
    name: 'demo',
    components: {
      Screen,
      Demos
    },
    props: {
      demos: Array
    },
  }
  </script>
  