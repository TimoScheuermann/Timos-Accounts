<template>
  <div class="accounts-timos-designs">
    <ta-navbar />
    <router-view />
    <div class="grow" />

    <div class="footer">
      <tl-flow horizontal="space-between">
        <div>© Timo Scheuermann {{ new Date().getFullYear() }}</div>
        <div>
          <tc-link href="https://timos.design/legal/privacy" color="#fff">
            Privacy Policy
          </tc-link>
          <tc-link href="https://timos.design/legal/terms" color="#fff">
            Terms of Use
          </tc-link>
          <tc-link href="https://timos.design/contact" color="#fff">
            Contact
          </tc-link>
        </div>
      </tl-flow>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TimosAccountsNavbar from '@/components/TA-Navbar.vue';

@Component({
  components: {
    'ta-navbar': TimosAccountsNavbar
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
html {
  font-family: -apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol;
  scroll-behavior: smooth;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

body {
  background: $background_dark;
  color: $color_dark;
  margin: 0;
}

[content] {
  padding: 20px 5vw calc(20px + env(safe-area-inset-bottom));
  @media #{$isMobile} {
    padding-bottom: calc(70px + env(safe-area-inset-bottom));
  }
}
.accounts-timos-designs {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  .grow {
    flex-grow: 1;
  }
}

.footer {
  background: $paragraph_dark;
  padding: 0px 10px;
  padding-bottom: env(safe-area-inset-bottom);
  font-size: 13px;
  & > div {
    padding: 10px;
    opacity: 0.8;
  }
}
</style>
