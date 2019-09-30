<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">
        <div class="footer-item">
          <div class="footer-text">
            &copy; Copyright {{(new Date()).getFullYear()}} | Users &amp; Information Lab.
          </div>
          <div class="footer-text">
            U&I Lab., Room 4417, E3-1 Computer Science Building,<br />
            KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea
          </div>
        </div>
        <div class="footer-item">
          <div class="footer-text">
            <a href="https://github.com/uilab-github/uilab-github.github.io">
              Repository for this Website
            </a>
            &nbsp;|&nbsp;
            <a href="https://docs.google.com/spreadsheets/d/1v2JBn1EHa20kcwz5rtszoNmjx9Znqzk-dGMhKw1m3vE/edit?usp=sharing">
              Edit Content
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

<style>
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
.footer-text {
  padding: 0.2rem 0;
  font-size: 0.7rem;
}
.footer-text a {
  text-decoration: none;
  color: var(--light-grey-color);
}
.footer-text a:hover {
  text-decoration: underline;
  color: var(--white-color);
}
@media screen and (max-width: 48rem) {
  .footer-inner {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
