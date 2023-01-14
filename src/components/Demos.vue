<template>
    <div class="demos v-padded">
        <h3 class="row-title">Demos</h3>  
        <div 
            v-for="(demo, i) in demos" 
            class="row-item expandable"
            :key="i"
        >
        <div class="demo">
            <div 
                class="demo-image"
                :style="getStyleWithImage(demo.image)">
            </div>
            <div class="demo-text">
                <h4 class="demo-title">{{ demo.title }}</h4>
                <div v-if="demo.short" class="demo-short">
                    <vue-markdown :source="demo.short"/>
                </div>
                <div v-if="demo.long" class="demo-long">
                    <vue-markdown :source="demo.long"/>
                </div>
                <div class="link-buttons">
                <vue-markdown
                    :source="demo.link"
                    :breaks="false"
                    :anchorAttributes="{ target: '_blank', rel: 'noopener noreferrer' }"
                />
                </div>
            </div>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  import VueMarkdown from 'vue-markdown'
  import { sanitizeUrls } from '@/helpers/path.js'
  export default {
    name: 'Demos',
    components: {
      VueMarkdown
    },
    props: {
      demos: Array,
    },
    methods: {
    sanitizeUrls(text) {
      return sanitizeUrls(text)
    },
    getStyleWithImage(url) {
      return { backgroundImage: `url("${sanitizeUrls(url)}")` }
    },
  }
  }
  
  </script>
  
  <style scoped>
  .demo-text {
    position: relative;
  }
  .demo-title {
    margin: 0;
    font-size: 1rem;
    font-weight: bold;
    color: var(--main-color);
  }  
  .demo-short {
    display: block;
    font-size: 0.9rem;
    font-weight: bold;
    color: var(--text-color);
  }
  .demo-long {
    padding-bottom: 0.3rem;
    font-size: 0.85rem;
  }
  </style>