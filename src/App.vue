<template>
  <div class="accounts-timos-designs">
    <ta-navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TimosAccountsNavbar from '@/components/TA-Navbar.vue';
import { persistLogin, verfiyTAUser, getTAUser } from 'timos-accounts';
import { getToken } from 'timos-accounts/dist/jwt-helper';

@Component({
  components: {
    'ta-navbar': TimosAccountsNavbar
  }
})
export default class App extends Vue {
  async mounted() {
    this.$nextTick(async () => {
      const possibleRedirect = this.$route.query.redirect as string;
      if (possibleRedirect)
        localStorage.setItem('timos-designs-redirect', possibleRedirect);

      const possibleToken = this.$route.query.taToken as string;
      if (possibleToken) {
        persistLogin(possibleToken);
        const redirect = localStorage.getItem('timos-designs-redirect');
        if (redirect) {
          localStorage.removeItem('timos-designs-redirect');
          window.location.replace(`${redirect}?taToken=${getToken()}`);
        }
      }

      if (await verfiyTAUser()) {
        this.$store.commit('validate', getTAUser());
      }
    });
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
