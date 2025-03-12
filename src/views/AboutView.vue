<template>
    <div class="about">
        <div id="presentation">
            <div id="greeting">
                <span>I'm &nbsp;</span>
                <h1>Ever Avendaño</h1>
            </div>
            <div id="profile">
                <p ref="pRef">A Peruvian 🇵🇪 software engineering student with two years of experience working on
                    freelance projects.</p>
                <div id="avatar">
                    <div>
                        <img src="../assets/profile.gif" alt="">
                    </div>
                </div>
            </div>
            <div id="background" :style="{ height: bgH + 'px' }"></div>
        </div>
        <hr>
        <div id="more">
            <div id="bar-up">
                <div id="dropdown-more-me" ref="dropdownRef">
                    <button id="btn-more-me" :class="openedDropdown ? 'btn-more-selected' : 'btn-more-deselected'"
                        @click="handleDropDown">
                        <p>More me</p>
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L4.29289 4.29289C4.68342 4.68342 5.31658 4.68342 5.70711 4.29289L9 1"
                                stroke="black" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                    <div id="options" ref="optsRef">
                        <router-link to="/about/started" class="link-nav" @click="handleDropDown"
                            :class="{ 'active': $route.path === '/about/started' }">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="14" height="14" fill="url(#pattern0_13_115)" />
                                <defs>
                                    <pattern id="pattern0_13_115" patternContentUnits="objectBoundingBox" width="1"
                                        height="1">
                                        <use xlink:href="#image0_13_115" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_13_115" width="96" height="96" preserveAspectRatio="none"
                                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAABxUlEQVR4nO2dvU7DMBRGLwxIPGBewN+D+G50QUIICR4QBBOwMBtF7daWoY37keQcKUuH2s2JfX8U1REAAAAAAAAwD2qt1xFx5Z7H6hiG+9tS6lMp9VvKxpXjPXiT6mYY6k13AVJ94KbnkQevbroLKKV+ICCPrfz37gK4+fnntosAeeMSAoSAiz4xMj2xi1kBYZ7P1OOe+3tOHhgBiQCxAtiCgi0oiQEE4Y4QhLeQBe0gDSUNbdQBohCjEBOFWKMQoxBr0ZtLNbU0k2bev2nGTf19QgACxApItiC2oCQGiCBMEBZZUJKGkoYmdYAoxCjERCWctCJoRSS9INGMoxknuqHnsZh29FzbyTHxuOf+npMHRkAiQKwAtqBgC0piAEG4IwThLWRBO0hDSUMbdYAoxCjERCHWKMQoxFr0hjR0YWmoFnYhQAiwP4ViBaz1qq9sQfIJKCXvEKDF/23l4Ul0Hxi2IMAMAswgwAwCzCDADALMIMAMAswgwAwCzCDADALMIMAMAswgwAwCzCDADALMIMAMAsxI+bX/Okb9dM9rNYwnqR54IenRPa+1HWf7Ukr+jJeUz+Nn7nmtkfEwZw50BgAAgJglv2NOSkmon4ZWAAAAAElFTkSuQmCC" />
                                </defs>
                            </svg>
                            <p>How is started</p>
                        </router-link>
                        <hr>
                        <router-link to="/about/education" class="link-nav" @click="handleDropDown"
                            :class="{ 'active': $route.path === '/about/education' }">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="14" height="14" fill="url(#pattern0_207_4)" />
                                <defs>
                                    <pattern id="pattern0_207_4" patternContentUnits="objectBoundingBox" width="1"
                                        height="1">
                                        <use xlink:href="#image0_207_4" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_207_4" width="96" height="96" preserveAspectRatio="none"
                                        xlink:href="data:image/png;base64,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" />
                                </defs>
                            </svg>
                            <p>Education</p>
                        </router-link>
                        <hr>
                        <router-link to="/about/movies&series" class="link-nav" @click="handleDropDown"
                            :class="{ 'active': $route.path === '/about/movies&series' }">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="14" height="14" fill="url(#pattern0_208_6)" />
                                <defs>
                                    <pattern id="pattern0_208_6" patternContentUnits="objectBoundingBox" width="1"
                                        height="1">
                                        <use xlink:href="#image0_208_6" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_208_6" width="96" height="96" preserveAspectRatio="none"
                                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAGSUlEQVR4nO1dSW9cRRDusCMISxAgthOcgBs3BEhsAbFGCsPFSZxX1R7sxE4If6BqnIVEJqCEIAjLBXEhSCAhIYFyCeIKEbaJCIEkYIJAIiH4gOQJsgeV5wVNJp7RLK+7usfvk0oa2XrvfVXVr5eq6n7G5MiRI0eOHDly5MiRI0dASJKt1wPQcgAeQeQ3EHk/Ik0g8lEA+guRyyLp76Pp//YD0B65Rq6Ve2jrEQ0KhZ2XI5aeRuTXAHgckeYQudKdyD3oW7mntfRUfz9dpq1ncLB29B4A3oVIJ7s3eHMBoL8R6f0koUeMMUvMYsXIyK5LEfkFAPrJtdEbO4N/tJaKwsUsrm6GNyHSCS3DL9BNnQDgjcLN9DKkDwagY/oG50YiA/kTptewdu3m2xD5kwAMXGnxjfjYWrrV9AIA6BkAPqVvVG57sLaWnjOxgoguQqTt2UwlWetNmJPZWaFAl5iYMDT08rWI/JW+ATkr+bK/n64xMaBY3HJTuvCp9JIA0HfBjwuIdAciH9c2FrqT46KjCREAdLMf49OEzNmtHb1r1aqxK0Tkt/wNkSc9vAnH5C034fX584Ewl4rPIPIQEV3QiEehsO9Ca3l9GqRzyIXHgxkTZIbgesAFoBmA0oOtcrKWHnLtBEQ6UCzuvdhoQ6KMHl77wfZ50bBrXog8ZjRhbelZ9/N8mmjW7TTrjmTm4pjbnIRXjFZ4IU2EOG79vLFTjtWgn+u3gE6uWbPllmyt25pyXmI7SUJ3dsoRgO72wRGAPzI+gUiP+1AMkSvr1tGVnfIE2LHUF09vUVSJmfsMKQPsWBqJA454SXf66Vc5qi6oxgnDxn0a0W8mC7oYhAHoJc8OmHIaOZUcrl+FWGRSppTtcpVrEPmQf75k3VjfmCVaCXRreX27ZBFpgwZXGQucVFsA0AM6CrFIGaD0cKtcpeQEgM5o8U0Sui9zByDSu4oOqFRjOzTcrDuqdju0QdP46VvwtotSkmllB1RE0vDCJpnhyBpBRH6nA65Cn7+gnM50SpqWC2orVYlLMlyY+Yh4Yo8JAL2SmQOqhbL6SmFUQgczMb6Ud8ddWsIqAsCzq1dvuy6D1k/LY87hoiK/tAK7WwfMb46IOoeLSvw6WUAu4ADa0xs5XFbgR7tNt6huC+qZHG7FM78v2n3OAg9utx/0kcOlKYDSSon3V4VWINLhcPiddTSPm27RbrGV+xwuTSHSsga1SVP6/M550451+qyah7a3b8t1AgWgtLIx11JBm1+ds//s9Fk1SrU3+LhOIUKT+/f10VXa/OregBmzmBxQLG6/OjAHnDG91wXRikbXJwk9r82vTqZNt0CknwMbhA/LgFt/rSz7AfhXfX7nNJY/On1W7UMnw8vh0pQMuNLni0jLb8X4/vj9z3PCaCzEQs/hWk/8AOhzoxGKiCCHW/bBD4DfMVrBuAhyuGXX/JKEXlQPR4eewwWn/EqPdu2AdHYxq20ojE7mj8k5L2TSEXpx2ym6d0D3M6CzAKBX9RXiqEQmL5k5QLbhaCuEkYm1pccyc4AUGUmxkbZSGEWOeV6mM6+SlnI7TaUg8Bxznbxnsoa1pfs1jQ8B55jrRWyVuQOk5FpKr5UcMBhyjrlODjk7DBCAB/wrRAHvEz5fkoTRuNyi1EbUcZHsE+Za+c35Rj2Jb/htURTRJj0eMq4hHva5VQki2qbq7fAOWWTE4IC+FpL02fEsPWl8Qo529KFYEkcX9KHxDTk/zcdxlBD4ICx5X7UT2qtbl5zvHZgMd5/wfMhZ96RdRN7pupXZQHPMALTNhHFkGR1wrGw5tBwzAH/WyQLRCaQizcM+snIoOWYA+rqb2VnUx1aCeo6ZjgwO0g0mRBSLm28P/Hj6SnfO5++loZmQIYea9ui21m8Qt95oYoAcauphYK74a/n0aTdHp6lA4iJyrmbMe4wBeBaARjtZhwT22ZL4PuCAyL9nmljXnyHRvgCMWmlN6IPMiqpCgrQo+XSUvoHZtZyWuqAgv8okWTUJLQDwLwEYyqkA0FsmVKQhDAvAP/SuA/ifYMIVzTAwQPcC8N5wir8WmQNq051ptm1MFj49UJX9pokZiLQsLbIaAuDX08/ZHqx+zpZPAfC/YbZ8OVWedgc5COfIkSNHjhw5cuTIkcNo4z9NWMecpx/eyQAAAABJRU5ErkJggg==" />
                                </defs>
                            </svg>

                            <p> Movies & series</p>
                        </router-link>
                        <hr>
                        <router-link to="/about/musics" class="link-nav" @click="handleDropDown"
                            :class="{ 'active': $route.path === '/about/musics' }">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="14" height="14" fill="url(#pattern0_208_8)" />
                                <defs>
                                    <pattern id="pattern0_208_8" patternContentUnits="objectBoundingBox" width="1"
                                        height="1">
                                        <use xlink:href="#image0_208_8" transform="scale(0.0104167)" />
                                    </pattern>
                                    <image id="image0_208_8" width="96" height="96" preserveAspectRatio="none"
                                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9UlEQVR4nO2dzWtcZRTGDyIuhLppFS3SSqELXYhrUYSSjWA/NtkYYvKe5+Yasqh2IV2eM0kjbRehi9BWFFzYVZEifuBCF35kKfoP+EGigrbGTdEoJE15M5NkkkmaNLkz75s55wdnm7n3ee557sx9z31D5DiO4ziO4ziOs0fo7ZWHALnILH8w6yyzfhCC9IjIA6mPzQSAXAJ0sbVkBtCxwcHRo6mPsath1tmNDVgx4g6zTAFS9PXJI6mPt+vAPcVvqTlArgO14yLyYOpjt2jAYlNn/AbIeY+oZAboSjHLd8z6Rn//2/uruSwMgQoM8IjKxwCPqHwM8IjKxoDVe4X+E3/oFYUc297RGQAdNGBdRH0fv86SdZDMgBUjrjFf2EdWQXID6l9jh4flMbIIMjCgboL+UJbyMFkDGYjfVO+TNZBe9DUVQu0lsgQyEH1tFMkUWQIZiL6+ikKeIysgA8Fbu0CFrIAMBG8t+ZKsgDwNmCErIE8D/iUrILnYGxdZARmI7QYgveDeAWgRYYxZp92ARBFERBSn40KQF5j1HWa97R3QYQOaiUNZIchrgH4Rh7U8gioCO8jgspRDzHoW0J/8HpDAgGXaGVFkBVQkQNURRVZAGwSoIqLICmijALuJKLICOiRAjKg44g7ot1tFVByZJysgwRUYJ6rjD73GSyAbGCATZAUkjIBGRPXEaTlm+btRE/G1KbICrGdwauAGuAGmgXeAG2AaeAe4AaaBd4AbYBp4B7gBpoF3gBtgGngH3I9Y8iyzjDDru/WFDf0lPsLF0p4+utB4nPszs3zDLJOAvBqXB92AXRCCHInbwgD6+07XV7k+4TY+MCBPeQdsk/g6P7N+Hq/s3U4YYNWIhfg3h4bk+dWu8vWA9cI/ySwfVyU6Nqy4Jivvxf193IAmmOVUPdPbKb42G/GXG7Aivr7ViZlLbLPInvjpRYdFA4qidrLKGy3cgO1TlnIAkJupxYbVDgD0SmqhYdWAsjz3BKD/pxYaVg0IQd5MLTIsG8Csn6UWGcYN+DW1yLBtgPyXWmRYNqC+E3l6obHJ/p7U7Ww2G59DMes0dTvM+km+BshH1O0AcjpjA0ao2xkYkMczvRHPmdlElVkuZ3j1T5IV4ooUs/6Zj/h6K4TxR8kSRSGv5PE4WuZDqL1MFgH0TAYGnCbLRBNSdAIvfaZx8ZdhlhNb/2O1SsWfjRGY+ryzglkOAnKjA5HzYVyTSH2+2RJ3EQfk02pjSebjL/CiqL2Y+vz2DHGcMI4V7u7xtcTnTuPMY4dTn8+eJgR5BtDX4/YvgH4d9+NpDOfO16/upeHcHwH5ilmuFoWUwOjTqY/bcRzHcRzHcRyH2sBdNkOSjK7THC4AAAAASUVORK5CYII=" />
                                </defs>
                            </svg>

                            <p> Musics</p>
                        </router-link>
                        <hr>
                        <router-link to="/about/games" class="link-nav" @click="handleDropDown"
                            :class="{ 'active': $route.path === '/about/games' }">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="14" height="14" fill="url(#pattern0_208_14)" />
                                <defs>
                                    <pattern id="pattern0_208_14" patternContentUnits="objectBoundingBox" width="1"
                                        height="1">
                                        <use xlink:href="#image0_208_14" transform="scale(0.01)" />
                                    </pattern>
                                    <image id="image0_208_14" width="100" height="100" preserveAspectRatio="none"
                                        xlink:href="data:image/png;base64,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" />
                                </defs>
                            </svg>
                            <p>Games</p>
                        </router-link>
                    </div>
                </div>
                <div id="tags">
                    <div id="tag-work" class="tag">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="4" cy="4" r="4" fill="#34C400" />
                        </svg>
                        <p id="state">Open to work</p>
                    </div>
                    <button id="btn-cv" class="tag">
                        <p>CV</p>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1 9.5H11M3.5 5L5.96413 6.9713C5.98455 6.98764 6.01399 6.98601 6.03249 6.96751V6.96751M8.5 5L6.03249 6.96751M6.03249 6.96751L6 1"
                                stroke="#797D9E" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="content-more">
                <router-view />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const pRef = ref(null);
const bgH = ref(0);
const dropdownRef = ref(null);
const optsRef = ref(null);
const openedDropdown = ref(false);

// Observar cambios en la altura del elemento
onMounted(() => {
    const observer = new ResizeObserver(() => {
        updateHeight();
    });

    if (pRef.value) {
        observer.observe(pRef.value); // Observar el elemento referenciado
    }

    // Limpiar el observer al desmontar el componente
    onUnmounted(() => {
        if (pRef.value) {
            observer.unobserve(pRef.value);
        }
    });
});

// Función para actualizar la altura
const updateHeight = () => {
    if (pRef.value) {
        bgH.value = pRef.value.offsetHeight + 24;
        console.log("Altura calculada:", bgH.value);
    }
};

// Usar watch para vigilar cambios en pRef (opcional)
watch(pRef, (newValue) => {
    if (newValue) {
        updateHeight();
    }
});

const handleDropDown = () => {
    openedDropdown.value = !openedDropdown.value;

    if (openedDropdown.value) {
        optsRef.value.classList.remove("options-hidden");
        optsRef.value.classList.add("options-showed");
    } else {
        optsRef.value.classList.remove("options-showed");
        optsRef.value.classList.add("options-hidden");
    }
};
document.addEventListener('click', (event) => {
    if (dropdownRef.value) {
        if (!dropdownRef.value.contains(event.target)) {
            if (openedDropdown.value) {
                handleDropDown()
            }
        }
    }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=M+PLUS+2:wght@100..900&display=swap');

.about {
    width: 100%;
    height: 100%;
    /*box-shadow: inset 0 0 0 1px #fff;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}

/* ////////////////////////// Sección "Presentation" ////////////////////////// */
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
    width: 51%;
    /*box-shadow: inset 0 0 0 1px rgb(0, 187, 255);*/
    display: flex;
    flex-wrap: wrap;
    line-height: 1;
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

@media (min-width: 320px) {
    #greeting {
        width: 60%;
    }
}

@media (min-width: 434px) {
    #greeting {
        width: 49%;
    }
}

/* Media query para tablet (por ejemplo, pantallas de 768px en adelante) */
@media (min-width: 524px) {
    #presentation {
        gap: 14px
    }

    #greeting {
        width: 51%;
    }

    #greeting span,
    #greeting h1 {
        font-size: 35px;
    }
}

/* Media query para desktop (por ejemplo, pantallas de 1024px en adelante) */
@media (min-width: 1024px) {
    #presentation {
        gap: 14px
    }

    #greeting span,
    #greeting h1 {
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
        width: 100%
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

/* ////////////////////////// Sección "More me" ////////////////////////// */
#more {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 14px;
}

#bar-up {
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-family: "M PLUS 2", sans-serif;
    font-size: 16px;
}

#dropdown-more-me {
    position: relative;
    width: auto;
    height: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
}

#btn-more-me {
    all: unset;
    width: auto;
    height: 100%;
    background: #636380;
    font-weight: bold;
    color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    box-sizing: border-box;
    padding: 0px 9px 0px 9px;
    transition: background 0.4s ease, border-radius 0.7s ease;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
}

/* Estado cuando el menú está ABIERTO */
.btn-more-selected {
    border-radius: 8px 8px 0 0 !important;
    /* Fuerza esquinas superiores redondeadas */
    background: #A4A9D2 !important;
    /* Color cuando está activo */
}

/* Estado cuando el menú está CERRADO */
.btn-more-deselected {
    border-radius: 8px !important;
    /* Redondeo completo */
}

#btn-more-me p {
    margin-bottom: 3px;
}

#btn-more-me:hover,
.btn-selected {
    background: #A4A9D2;
}

#options {
    position: absolute;
    left: 1px;
    z-index: 0;
    background: #000;
    outline: solid 0.0625em #111118;
    border-radius: 0px 0.5em 0.5em 0.5em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.5em;
    gap: 0.5em;
    box-sizing: border-box;
    overflow: hidden;
    opacity: 0;
    scale: 0;
    transform-origin: 0% 0%;
}

#options svg {
    transform: translateZ(0);
    /* Fuerza aceleración por hardware */
    backface-visibility: hidden;
    /* Optimiza renderizado */
}

.options-showed {
    pointer-events: auto;

    animation: show-options 0.5s ease-in-out forwards;
}

.options-hidden {
    pointer-events: none;

    animation: hide-options 0.5s ease-in-out forwards;
}

/* animation 'show-options' for options container */
@keyframes show-options {
    0% {
        opacity: 0;
        scale: 0;
    }

    100% {
        opacity: 1;
        scale: 1;
    }
}

/* animation 'hide-options' for options container */
@keyframes hide-options {
    0% {
        opacity: 1;
        scale: 1;
    }

    100% {
        opacity: 0;
        scale: 0;
    }
}

#options a {
    text-decoration: none;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 0.375em;
    box-sizing: border-box;
    padding: 0.5em;
    font-family: "M PLUS 2", sans-serif;
    font-size: 0.8125em;
    color: #636380;
    transition: background 0.2s ease, border-rdius 0.2 ease;
}

#options a:hover,
.link-nav.active {
    background: #0C0C11;
    border-radius: 4px;
}

#options .link-nav p {
    white-space: nowrap;
}

#options hr {
    color: #111118;
}

#tags {
    all: unset;
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

#state {
    font-size: 13px;
}

#btn-cv {
    font-size: 13px;
    font-weight: normal;
    border: none;
    transition: background 0.4s ease, ;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
}

#btn-cv p {
    transition: color 0.4s ease;
    -webkit-tap-highlight-color: transparent;
}

#btn-cv svg path {
    transition: stroke 0.4s ease;
    -webkit-tap-highlight-color: transparent;
}

.tag {
    height: 100%;
    width: auto;
    background: #0C0C11;
    color: #797D9E;
    font-weight: normal;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0px 9px 0px 9px;
    border-radius: 8px;
    gap: 8px;
}

.tag p {
    margin-bottom: 3px;
}

#btn-cv:hover {
    background: #161620;
}


#content-more {
    width: 100%;
    height: 100%;
}
</style>