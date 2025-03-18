<template>
    <div class="project-list">
        <div v-for="(item, i) in items" :key="i">
            <div class="head">
                <h2 class="name">{{ item.name }}</h2>
                <div class="links">
                    <div class="app-link">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="16" height="16" fill="url(#pattern0_273_96)" />
                            <defs>
                                <pattern id="pattern0_273_96" patternContentUnits="objectBoundingBox" width="1"
                                    height="1">
                                    <use xlink:href="#image0_273_96" transform="scale(0.0104167)" />
                                </pattern>
                                <image id="image0_273_96" width="96" height="96" preserveAspectRatio="none"
                                    xlink:href="data:image/png;base64,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" />
                            </defs>
                        </svg>
                        <p>Go to app</p>
                    </div>
                    <div class="repo-link">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink">
                            <rect width="16" height="16" fill="url(#pattern0_273_118)" />
                            <defs>
                                <pattern id="pattern0_273_118" patternContentUnits="objectBoundingBox" width="1"
                                    height="1">
                                    <use xlink:href="#image0_273_118" transform="scale(0.0104167)" />
                                </pattern>
                                <image id="image0_273_118" width="96" height="96" preserveAspectRatio="none"
                                    xlink:href="data:image/png;base64,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" />
                            </defs>
                        </svg>
                        <p>View repo</p>
                    </div>
                </div>
            </div>
            <p class="description"></p>
            <div class="tools"></div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})
const colors = {
    vue: "#41B883",
    ts: "#3178C6",
    react: "#61DAFB",
    expo: "#000020",
    django: "#092E20",
    flask: "#000000",
    docker: "#2496ED",
    firebase: "#FFCA28",
    mongodb: "#47A248",
    oracledb: "#F80000",
    mysql: "#00758F",
    aws_s3: "#569A31",
    aws_ecs: "#FF9900",
    arduino: "#00979C",
    esp32: "#7D7D7D",
    swift: "#FA7343",
    swiftui: "#0071E3",
    flutterflow: "#52C0F2",
    shopify: "#7AB55C",
    java: "#007396",
    git: "#F05032",
    python: "#A5841E",
    html: "#8F3204",
    css: "#22759E"
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&display=swap');
</style>