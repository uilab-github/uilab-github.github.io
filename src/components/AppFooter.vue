<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-item">
          <div class="text">
            &copy; Copyright {{(new Date()).getFullYear()}} | Users &amp; Information Lab.
          </div>
          <div class="text">
            U&I Lab., Room 4417, E3-1 Computer Science Building,<br />
            KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea
          </div>
        </div>
        <div class="footer-item">
          <div class="text">
            <a href="https://github.com/uilab-github/uilab-github.github.io">
              Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    scrolled: Boolean,
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--text-color);
  color: var(--light-grey-color);
  padding: 2.5rem 0;
  width: 100%;
}
.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer-item {
  flex: 0 0 auto;
}
.text {
  padding: 0.2rem 0;
  font-size: 0.7rem;
}
.text a {
  text-decoration: none;
  color: var(--light-grey-color);
}
.text a:hover {
  color: var(--white-color);
}
</style>
