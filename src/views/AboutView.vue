<template>
    <div class="about">
        <div id="presentation">
            <div id="greeting">
                <span>I'm &nbsp;</span>
                <h1>Ever Avendaño</h1>
            </div>
            <div id="profile">
                <p ref="pRef">A Peruvian 🇵🇪 software engineering student with two years of experience working on freelance projects.</p>
                <div id="avatar">
                    <div>
                        <img src="../assets/profile.gif" alt="">
                    </div>
                </div>
            </div>
            <div id="background" :style="{ height: bgH + 'px' }"></div>
        </div>
        <hr>
        <div id="more"></div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watchEffect } from 'vue';

const pRef = ref(null);
const bgH = ref(0);

// Función para actualizar la altura
const updateHeight = () => {
    if (pRef.value && bgH.value) {
        bgH.value = pRef.value.offsetHeight + 24;
    }
};

onMounted(() => {
    updateHeight();
    window.addEventListener('resize', updateHeight);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateHeight);
});

watchEffect(() => {
    updateHeight();
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=M+PLUS+2:wght@100..900&display=swap');
.about {
    width: 100%;
    height: 100%;
    /*box-shadow: inset 0 0 0 1px #fff;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
}

#presentation {
    position: relative;
    width: 100%;
    height: auto;
    /*box-shadow: inset 0 0 0 1px yellow;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
}

#greeting {
    position: relative;
    left: 12px;
    height: auto;
    width: 55%;
    /*box-shadow: inset 0 0 0 1px rgb(0, 187, 255);*/
    display: flex;
    flex-wrap: wrap;
    line-height: 1.2;
}
#greeting span {
    font-family: "M PLUS 2", sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #636380;
}
#greeting h1 {
    font-family: "M PLUS 2", sans-serif;
    font-weight: bold;
    font-size: 28px;
    color: #BCBCBC;
    display: flex;
    flex-wrap: nowrap;
}

/* Media query para tablet (por ejemplo, pantallas de 768px en adelante) */
@media (min-width: 507px) {
    #presentation {
        gap: 14px
    }
    #greeting {
        width: 51%;
    }
    #greeting span, #greeting h1 {
        font-size: 35px;
    }
}
/* Media query para desktop (por ejemplo, pantallas de 1024px en adelante) */
@media (min-width: 1024px) {
    #presentation {
        gap: 14px
    }
    #greeting span, #greeting h1 {
    font-size: 30px;
  }
}

#profile {
    position: absolute;
    bottom: 0;
    height: 100%;
    width: 100%;
    /*box-shadow: inset 0 0 0 1px rgb(0, 255, 119);*/
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    gap: 22px;
}
/* Media query para desktop (por ejemplo, pantallas de 1024px en adelante) */
@media (min-width: 1024px) {
    #profile {
        gap: 40px
    }
}

#profile p {
    position: relative;
    left: 12px;
    bottom: 12px;
    height: auto;
    width: 100%;
    min-width: 230px;
    /*box-shadow: inset 0 0 0 1px rgb(247, 0, 255);*/
    font-family: "Fira Code", sans-serif;
    font-weight: lighter;
    font-size: 11px;
    color: #636380;
}
#profile #avatar {
    height: 100%;
    width: 100%;
    /*box-shadow: inset 0 0 0 1px #c3ff10;*/
    display: flex;
    justify-content: start;
    align-items: start;
}
#avatar div {
    position: relative;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
}
#avatar div img {
    position: absolute;
    top: 0px;
    height: 100%;
}
/* Media query para desktop (por ejemplo, pantallas de 1024px en adelante) */
@media (min-width: 1024px) {
    #avatar div img {
        width:100%
    }
}

#background {
    width: 100%;
    height: 87px;
    background: linear-gradient(to right, #060609 50%, #410A2E);
    border-radius: 10px 10px 28px 10px;
}

hr {
    width: 100%;
    border: solid 1px #0C0C11;
}

#more {
    width: 100%;
    height: 100%;
    /*box-shadow: inset 0 0 0 1px yellow;*/
}
</style>