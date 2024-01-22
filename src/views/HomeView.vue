<template>
  <Main />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Main from '../components/Client/Main.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    Main,
  },
});
</script>
