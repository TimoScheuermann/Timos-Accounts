<template>
  <tc-navbar :dark="true">
    <div @click="goHome()" class="logo" slot="logo">
      <tl-flow>
        <img src="/pwa/maskIcon.svg" alt="" />
        <b>Timo's Accounts</b>
      </tl-flow>
    </div>
  </tc-navbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from '../utils/models';
@Component
export default class TimosAccountsNavbar extends Vue {
  get user(): User {
    return this.$store.getters.user;
  }
  public goHome() {
    if (this.$router.currentRoute.name !== 'home')
      this.$router.push({ name: 'home' });
  }
}
</script>
<style lang="scss" scoped>
.tc-navbar {
  .logo {
    cursor: pointer;
    img {
      max-height: 30px;
      margin-right: 10px;
    }
  }
}
</style>
