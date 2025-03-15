<template>
  <div id="background" :class="hasGradient ? 'background-gradient' : 'background-black'"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const hasGradient = ref(false);

onMounted(() => {
  const themeColorMeta = document.head.querySelector('meta[name="theme-color"]');
  hasGradient.value = !!themeColorMeta;
  console.log('Meta tag detectado:', themeColorMeta);
});
</script>

<style>

#background {
  width: 100%;
  height: 100%;
  background: #000;
}

.background-black {
  background: black;
}

@media (width < 480px) {
  .background-gradient {
    /*background: linear-gradient(to bottom, #620743 0%, #000000 8%);*/
    background: #000000;
  }
}
</style>