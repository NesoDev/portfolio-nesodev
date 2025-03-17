<template>
    <div class="tool-item">
        <img v-for="(item, i) in props.items" :key="i" :src="item.url" :name="item.name">
    </div>
</template>

<script setup>
import { defineProps, onBeforeMount } from 'vue';
const props = defineProps({
    items: {
        type: Array,
        required: true
    }
});
console.log("hola")
onBeforeMount(() => {
    console.log(`tool-item items: ${JSON.stringify(props.items)}`)
})
</script>

<style scoped>
.tool-item {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    align-items: center;
    gap: 20px;
    padding: 15px;
    box-sizing: border-box;
}

img {
    height: 20px;
    filter: brightness(0.9);
}
</style>