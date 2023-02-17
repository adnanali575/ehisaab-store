<template>
  <div id="app">
    <app-header></app-header>

    <router-view class="router-view"></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>

import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    'app-header': header,
    'app-footer': footer,

  },
  mounted(){

    this.$store.dispatch('setTotalProducttPrice')
    this.$store.dispatch('setPricesSum')
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

:root {
  --bg-dark: #3D3D3D;
  --bg-gray: #E7E7E7;
  --dark-blue: #3E8AAD;
  --text-color-gray: #F9F9F9;
  --text-color-black: #000000;
  --text-color-dark: #606060;
  --hover-bg: #bdbdbd;
  --bg-icon: background: rgba(2, 2, 2, 0.54);

  --font: 'Roboto', sans-serif;
}

a,
p,
h1,
h2,
input,
label,
button {
  font-family: var(--font);
  font-style: normal;
}

.router-view{
  animation: page-animation 0.5s linear;
}

@keyframes page-animation {

  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
  
}


</style>
