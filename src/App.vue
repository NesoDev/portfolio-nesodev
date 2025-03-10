<template>
  <div id="app-vue">
    <router-view>
    </router-view>
  </div>
</template>

<script setup>
import { onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
onBeforeMount(() => {
  router.push("/")
})
</script>

<style scoped>
#app-vue {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>