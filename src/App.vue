<template>
  <div id="app">
    <loading 
      :active="loading"
      color="#fff"
      :height="64"
      :width="64"
      background-color="#000"
    ></loading>
    <app-header :scrolled="scrolled" :loading="loading" />
    <section class="body-content">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view 
          :announcements="announcements"
          :research="research" 
          :members="members" 
          :tags="tags" 
          :links="links"
        />
      </transition>
    </section>
    <app-footer />
  </div>
</template>

<script>
import '@/styles/default.css'
import 'vue-loading-overlay/dist/vue-loading.css'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import Loading from 'vue-loading-overlay'
import * as loader from '@/helpers/loader.js'
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    Loading,
  },
  data() {
    return {
      scrolled: false,
      loading: false,
      announcements: [],
      research: [],
      members: [],
      tags: {},
      links: [],
      redirections: {},
    }
  },
  created() {
    this.loadData()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    async loadData() {
      this.loading = true
      const data = await loader.loadData()
      this.announcements = data.announcements
      this.research = data.research
      this.members = data.members
      this.tags = data.tags
      this.links = data.links
      this.redirections = data.redirections
      this.handleRedirections()
      window.addEventListener('locationchange', this.handleRedirections)
      this.loading = false
    },
    handleRedirections() {
      const pathname = window.location.pathname
      const targetUrl = this.redirections[pathname]
      if (targetUrl) {
        this.loading = true
        window.location.href = targetUrl
      }
    },
    handleScroll() {
      const top = window.scrollY
      const threshold = 30
      if (!this.scrolled && top > threshold) {
        this.scrolled = true
      } else if (this.scrolled && top <= threshold) {
        this.scrolled = false
      }
    }
  }
}
</script>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>