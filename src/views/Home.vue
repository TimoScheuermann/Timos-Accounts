<template>
  <div class="account-home">
    <tc-hero height="500">
      <img
        src="https://images.unsplash.com/photo-1576790535255-09ae1ca64ed1?q=30"
        slot="background"
        alt=""
      />
      <tc-card
        v-if="!$store.getters.valid"
        title="Timo's Designs Account"
        :dark="true"
        :frosted="true"
        :rounded="true"
      >
        <tc-button
          @click="signIn('github')"
          icon="github"
          name="Sign in with GitHub"
          tccolor="paragraph"
        />
        <tc-button
          @click="signIn('google')"
          icon="assets/google.svg"
          name="Sign in with Google"
          tccolor="paragraph"
        />
        <tc-button
          @click="signIn('steam')"
          icon="assets/steam.svg"
          name="Sign in with Steam"
          tccolor="paragraph"
        />
      </tc-card>
      <tc-card
        v-else
        title="Welcome back!"
        :dark="true"
        rounded="true"
        :frosted="true"
      >
        Currently signed in as {{ user.givenName }} {{ user.familyName }} via
        {{ user.provider }}
        <tc-button
          name="View Settings"
          color="success"
          icon="settings"
          :to="{ name: 'settings' }"
        />
      </tc-card>
    </tc-hero>
    <div content>
      <ta-big-heading
        title="Timo's Accounts"
        subtitle="One account for everything"
      />
      <tl-flow flow="column">
        <p>
          A single account grands you access to every feature on timos.design.
          From writing comments to news, suggesting changes to tccomponents or
          requesting new icons
        </p>
      </tl-flow>
      <tl-flow>
        <tc-tooltip v-for="a in accountsFor" :key="a.name" :tooltip="a.name">
          <a :href="a.href" target="_blank">
            <tc-avatar size="tiny" border="rounded" :src="a.src" />
          </a>
        </tc-tooltip>
      </tl-flow>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TimosAccountsBigHeading from '@/components/TA-BigHeading.vue';

@Component({
  components: {
    'ta-big-heading': TimosAccountsBigHeading
  }
})
export default class Home extends Vue {
  public accountsFor = [
    {
      name: "Timo's Icons",
      src: 'https://icons.timos.design/pwa/splash/manifest-icon-512.jpg',
      href: 'https://icons.timos.design/'
    },
    {
      name: 'TC Components',
      src: 'https://components.timos.design/pwa/splash/manifest-icon-512.jpg',
      href: 'https://components.timos.design/'
    },
    {
      name: "Timo's Newsroom",
      src: 'https://newsroom.timos.design/pwa/splash/manifest-icon-512.jpg',
      href: 'https://newsroom.timos.design/'
    },
    {
      name: 'Portfolio',
      src: 'https://portfolio.timos.design/pwa/splash/manifest-icon-512.jpg',
      href: 'https://portfolio.timos.design/'
    },
    {
      name: "Timo's Accounts",
      src: 'pwa/splash/manifest-icon-512.jpg',
      href: '/'
    }
  ];

  public signIn(service = 'google'): void {
    if (process.env.VUE_APP_LOCAL)
      window.location.replace('http://localhost:3000/auth/' + service);
    else window.location.replace('http://api.timos.design/auth/' + service);
  }

  get user() {
    return this.$store.getters.user;
  }
}
</script>
<style lang="scss">
img {
  filter: none !important;
}
</style>
<style lang="scss" scoped>
[content] {
  margin-top: 30px;
}
.tl-flow {
  margin-top: 20px;
  .tc-avatar {
    margin: 10px;
  }
  h1,
  p {
    text-align: center;
    margin: 0;
    max-width: 80vw;
    width: 450px;
  }
  h1 {
    margin-bottom: 10px;
  }
}
.tc-card {
  .tc-button {
    display: flex;
    margin: 10px 0;
  }
}
</style>
