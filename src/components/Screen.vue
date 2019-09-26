<template>
  <section 
    class="screen" 
    :class="{ 'screen-large': size === 'large' }"
    :style="getStyleWithBgImage()"
  >
    <div class="content">
      <slot/>
    </div>
  </section>
</template>

<script>
import { sanitizeUrls } from '@/helpers/path.js'

export default {
  name: 'AppHeader',
  props: {
    size: String,
    backgroundSrc: String
  },
  methods: {
    getStyleWithBgImage() {
      const url = sanitizeUrls(this.backgroundSrc)
      return { backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ),
        url("${url}")` }
    }
  }
}
</script>

<style scoped>
.screen {
  padding: 8rem 1rem 4rem 1rem;
  background-image: linear-gradient(
          rgba(0, 0, 0, 0.7), 
          rgba(0, 0, 0, 0.7)
        ),
        url("../assets/kaist.jpg");
  background-attachment: scroll;
  background-origin: padding-box;
  background-position: center 85%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 120;
}
.screen-large {
  padding: 9.5rem 1rem 5.5rem 1rem;
}
.content {
  margin: 0 auto;
  max-width: var(--max-width);
  color: var(--header-text-highlight-color);
  text-align: center;
}
.content /deep/ h1 {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  font-weight: bold;
}
.content /deep/ h2 {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
  font-weight: bold;
}
.content /deep/ small {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
  font-weight: normal;
}
</style>
