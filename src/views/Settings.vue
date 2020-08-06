<template>
  <div class="accounts-account">
    <tc-hero>
      <img
        src="https://images.unsplash.com/photo-1576790535255-09ae1ca64ed1?q=30"
        slot="background"
        alt=""
      />
      <tl-flow horizontal="space-around">
        <tc-avatar :src="user.avatar" />
        <tl-flow flow="column" vertical="start">
          <div class="name">{{ user.givenName }} {{ user.familyName }}</div>
          <div class="email">{{ user.email }}</div>
        </tl-flow>
        <tc-button tccolor="paragraph" name="Sign out" @click="signOut()" />
      </tl-flow>
    </tc-hero>
    <!-- {{ user }} -->
    <div content>
      <h1>Account</h1>
      <tl-grid>
        <div class="account">
          <h3>Name</h3>
          <span>{{ user.givenName }} {{ user.familyName }}</span>
        </div>
        <div class="account">
          <h3>E-Mail</h3>
          <span>{{ user.email || 'unknown' }}</span>
        </div>
        <div class="account">
          <h3>Connected via</h3>
          <span provider>{{ user.provider }}</span>
        </div>
        <div class="account">
          <h3>Member since</h3>
          <span>{{ new Date(user.date).toLocaleString() }}</span>
        </div>
      </tl-grid>
      <tc-divider />
      <h1>Statistics</h1>
      <tl-grid>
        <div class="account">
          <h3>Comments (Newsroom)</h3>
          <span>soon</span>
        </div>
        <div class="account">
          <h3>Requests (Timo's Icons)</h3>
          <span>soon</span>
        </div>
        <div class="account">
          <h3>Comments (Timo's Icons)</h3>
          <span>soon</span>
        </div>
        <div class="account">
          <h3>Likes received (Timo's Icons)</h3>
          <span>soon</span>
        </div>
      </tl-grid>
      <tc-divider />
      <h1>Data & Privacy</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { User } from '../utils/models';
import { signOutTAUser } from 'timos-accounts';

@Component
export default class Settings extends Vue {
  public signOut() {
    signOutTAUser();
    this.$router.push({ name: 'home' });
  }

  get user(): User {
    return this.$store.getters.user;
  }
}
</script>
<style lang="scss" scoped>
.tc-hero {
  .name,
  .email {
    color: #fff;
    margin: 0 50px;
  }
  .name {
    font-size: 1.5em;
    font-weight: bold;
  }
  .email {
    font-weight: 500;
  }
}
.tc-divider {
  margin: 20px 0;
}
.account {
  h3 {
    margin-bottom: 5px;
  }
}
span[provider] {
  text-transform: capitalize;
}
span.big {
  font-weight: 900;
  font-size: 2em;
  color: $primary;
}
</style>
