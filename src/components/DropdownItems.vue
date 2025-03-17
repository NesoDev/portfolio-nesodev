<template>
    <div class="dropdown-items" ref="dropdownRef" :style="{ '--height-max': bodyH + 'px' }">
        <div id="head">
            <div>
                <h3>{{ props.title }}</h3>
                <p>({{ props.items.length }} items)</p>
            </div>
            <button @click="handleDropDown">
                <p>{{ openedDropdown ? 'Hide' : 'Show' }}</p>
                <svg :class="{ rotated: openedDropdown }" width="10" height="6" viewBox="0 0 10 6" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L4.29289 4.29289C4.68342 4.68342 5.31658 4.68342 5.70711 4.29289L9 1" stroke="#797D9E"
                        stroke-width="2" stroke-linecap="round" />
                </svg>
            </button>
        </div>
        <div id="body" ref="bodyRef">
            <component :is="props.component" :items="props.items"></component>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineComponent, ref, watch, onMounted, onUnmounted, onBeforeMount, resolveComponent } from 'vue';

const openedDropdown = ref(false);
const dropdownRef = ref(null);
const bodyRef = ref(null);
const bodyH = ref(0);

const updateHeight = () => {
    if (bodyRef.value) {
        bodyH.value = bodyRef.value.offsetHeight + 60;
        console.log("Altura calculada:", bodyH.value);
    }
};

// Observar cambios en la altura del elemento
onMounted(() => {
    const observer = new ResizeObserver(() => {
        updateHeight();
    });

    if (bodyRef.value) {
        observer.observe(bodyRef.value); // Observar el elemento referenciado
    }

    // Limpiar el observer al desmontar el componente
    onUnmounted(() => {
        if (bodyRef.value) {
            observer.unobserve(bodyRef.value);
        }
    });
    console.log("dropdownitems builded")
});

watch(bodyRef, (newValue) => {
    if (newValue) {
        updateHeight();
    }
});

const handleDropDown = () => {
    openedDropdown.value = !openedDropdown.value;
    if (openedDropdown.value) {
        bodyRef.value.classList.remove("body-hidden");
        dropdownRef.value.classList.remove("dropdown-hidden");
        bodyRef.value.classList.add("body-showed");
        dropdownRef.value.classList.add("dropdown-showed");
    } else {
        bodyRef.value.classList.remove("body-showed");
        dropdownRef.value.classList.remove("dropdown-showed");
        bodyRef.value.classList.add("body-hidden");
        dropdownRef.value.classList.add("dropdown-hidden");
    }
};

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    component: {
        type: Object,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
});

onBeforeMount(() => {
    console.log(`props.items: ${JSON.stringify(props.items)}`)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100..900&display=swap');

.dropdown-items {
    position: relative;
    width: 100%;
    height: 60px;
    border: solid 1px #1a1925;
    border-radius: 16px;
    overflow: hidden;
    transition: height 0.3s ease
}

.dropdown-showed {
    height: var(--height-max);
}

.dropdown-hidden {
   height: 60px;
}

#head {
    width: 100%;
    height: 60px;
    background: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    box-sizing: border-box;
    font-family: "M PLUS 2", sans-serif;
    transition: background 0.15s ease;
}

#head:hover {
    background: #060609;
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
    color: #8d90a5
}

#head div p {
    font-weight: bold;
    font-size: 13px;
    color: #8d90a5
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
    transition: background 0.3s ease-out;
}

#head button:hover {
    background: #f5f5f5;
}

#head:has(button:hover) {
    background: #060609;
}

#head button:hover svg path {
    stroke: #000;
}

#head button:hover p {
    color: #000;
}

svg {
    transition: transform 0.3s ease;
}

.rotated {
    transform: rotate(180deg);
}

#body {
    width: 100%;
    height: auto;
    border-top: solid 1px #1a1925;
}

#body img {
    height: 20px;
    filter: brightness(0.9);
}

.body-showed {
    animation: show-body 0.2s ease-in forwards;
}

.body-hidden {
    animation: hide-body 0.2s ease-in forwards;
}

@keyframes show-body {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes hide-body {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

</style>