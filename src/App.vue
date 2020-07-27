<template>
  <div class="accounts-timos-designs">
    <ta-navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { validateAndAutoLogin } from '@/utils/authService';
import TimosAccountsNavbar from '@/components/TA-Navbar.vue';

@Component({
  components: {
    'ta-navbar': TimosAccountsNavbar
  }
})
export default class App extends Vue {
  mounted() {
    validateAndAutoLogin();
  }
}
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
</style>
