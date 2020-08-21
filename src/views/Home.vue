<template>
  <div class="account-home">
    <tc-hero :dark="true">
      <img
        src="https://images.unsplash.com/photo-1597910037383-d79beb2b39c3?q=30"
        slot="background"
        alt=""
      />
      <h1>Timo's Accounts</h1>
      <div>One account for everything</div>
    </tc-hero>
    <div class="icon">
      <tc-avatar src="/pwa/maskIcon.svg" size="tiny" border="square" />
    </div>
    <div content="">
      <h1>Login</h1>
      <tl-flow flow="column" class="buttons">
        <tc-button
          @click="signIn('github')"
          icon="github"
          name="Sign in with GitHub"
          color="#000"
          tfbackground="paragraph"
        />
        <tc-button
          @click="signIn('google')"
          icon="google"
          name="Sign in with Google"
          color="#000"
          tfbackground="paragraph"
        />
        <tc-button
          @click="signIn('steam')"
          icon="steam"
          name="Sign in with Steam"
          color="#000"
          tfbackground="paragraph"
        />
      </tl-flow>
      <tc-divider :dark="true" />

      <tl-grid>
        <div>
          <h1>About</h1>

          <span>
            A single account grands you access to every feature on timos.design.
            From writing comments to news, suggesting changes to tccomponents or
            requesting new icons
          </span>
        </div>
        <tl-flow horizontal="space-between">
          <a
            v-for="a in accountsFor"
            :key="a.name"
            :href="a.href"
            target="_blank"
          >
            <tc-avatar size="tiny" border="rounded" :src="a.src" />
          </a>
        </tl-flow>
      </tl-grid>
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
      src: 'https://icons.timos.design/pwa/splash/manifest-icon-512.jpg',
      href: 'https://icons.timos.design/'
    },
    {
      src: 'https://components.timos.design/pwa/splash/manifest-icon-512.jpg',
      href: 'https://components.timos.design/'
    },
    {
      src: 'https://newsroom.timos.design/pwa/splash/manifest-icon-512.jpg',
      href: 'https://newsroom.timos.design/'
    },
    {
      src: 'https://portfolio.timos.design/pwa/splash/manifest-icon-512.jpg',
      href: 'https://portfolio.timos.design/'
    },
    {
      src: 'pwa/splash/manifest-icon-512.jpg',
      href: '/'
    }
  ];

  public signIn(service = 'google'): void {
    if (process.env.VUE_APP_LOCAL)
      window.location.replace('http://localhost:3000/auth/' + service);
    else window.location.replace('https://api.timos.design/auth/' + service);
  }
}
</script>
<style lang="scss" scoped>
.account-home {
  position: relative;

  .tc-hero {
    height: 90vw;
    max-height: 350px;
    text-align: center;
    h1 {
      margin: 0;
    }
  }
  .icon {
    background: $background_dark;
    padding: 10px;
    border-top-left-radius: 10px;
    position: absolute;
    right: 0;
    transform: translateY(-50%);
  }
  .buttons {
    .tc-button {
      padding: 7.5px;
      margin-bottom: 10px;
      width: 80vw;
      max-width: 400px;
    }
  }
  .tc-divider {
    margin-top: 20px;
  }
  .tl-grid {
    a {
      margin: 0 5px;
    }
  }
}
</style>
