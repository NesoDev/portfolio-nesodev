<template>
    <div class="tool-dropdown">
        <div id="head">
            <div>
                <h3>{{ props.title }}</h3>
                <p>({{ props.items.length }} items)</p>
            </div>
            <button>
                <p>Show</p>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4.29289 4.29289C4.68342 4.68342 5.31658 4.68342 5.70711 4.29289L9 1" stroke="#797D9E"
                        stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>
        </div>
        <hr>
        <div id="body">
            <img v-for="(item, i) in props.items" :key="i" :src="item.url" :name="item.name">
        </div>
    </div>
</template>

<script setup>
import { defineProps, onBeforeMount } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
})

onBeforeMount(() => {
    console.log(props)
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&display=swap');

.tool-dropdown {
    width: 100%;
    height: auto;
    box-shadow: inset 0px 0px 0px 1px #1a1925;
    border-radius: 12px;
    overflow: hidden;
}

#head {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    box-sizing: border-box;
    font-family: "M PLUS 2", sans-serif;
}

#head div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

#head h3 {
    font-size: 13px;
    color: #797D9E;
}

#head div p {
    font-weight: bold;
    font-size: 13px;
    color: #797D9E;
}

#head button {
    position: relative;
    height: 30px;
    width: auto;
    background: #100f19;
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    padding: 0px 9px;
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: bold;
    font-size: 13px;
    color: #797D9E;
    cursor: pointer;
    transition: background 0.3s ease-out
}

#head button:hover {
    background: #f5f5f5;
}

#head button svg {
    position: relative;
    top: 1px;
}

#head button:hover svg path {
    stroke: #000;
}

#head button:hover p {
    color: #000;
}

hr {
    border: none;
    height: 1px;
    background: #1a1925;
}

#body {
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

#body img {
    height: 20px;
}
</style>