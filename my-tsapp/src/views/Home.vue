<template>
  <div class="home">
    <component1 msg="this is an home page's hello component"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import component1 from '@/components/component1.vue'; // @ is an alias to /src@是/src的别名

export default defineComponent({
  name: 'Home',
  components: {
    component1,
  },
});
</script>
