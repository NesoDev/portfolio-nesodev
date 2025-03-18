<template>
  <div class="home">
    <Background />
    <!-- Contenido -->
    <div id="content">
      <div id="container">
        <!-- Cabecera -->
        <div id="header">
          <!-- Barra superior -->
          <div class="header" id="header-up">
            <div class="header-up" id="h-u-left">
              <svg width="30" height="15" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 3V20H4.57131V8.30581C4.57131 7.6334 5.38944 7.30243 5.85696 7.78571L17.132 19.6877C17.3209 19.8871 17.5834 20 17.858 20H28.4405C33.4312 20 37.1239 15.4892 37 10.5C36.891 6.10902 33.816 2 29.4237 2H16C15.4477 2 15 2.44771 15 3V4.18272L17 6.36055V5.57143C17 5.01914 17.4477 4.57143 18 4.57143H28.0714C31.6218 4.57143 34.5 7.4496 34.5 11C34.5 14.5504 31.6218 17.4286 28.0714 17.4286H19.1534C18.8731 17.4286 18.6057 17.3109 18.4163 17.1043L4.86856 2.32429C4.67915 2.11765 4.41171 2 4.13139 2H3C2.44772 2 2 2.44772 2 3Z"
                  fill="#f5f5f5" stroke="#f5f5f5" stroke-width="4" />
              </svg>
              <h2>NesoDev</h2>
            </div>
            <div class="header-up" id="h-u-right">
              <div class="h-u-right" id="socials">

                <a href="https://github.com/NesoDev">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="30" height="30" fill="url(#pattern0_425_3)" />
                    <defs>
                      <pattern id="pattern0_425_3" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_425_3" transform="scale(0.0104167)" />
                      </pattern>
                      <image id="image0_425_3" width="96" height="96" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                </a>

                <a href="https://x.com/neso_liver">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="30" height="30" fill="url(#pattern0_425_4)" />
                    <defs>
                      <pattern id="pattern0_425_4" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_425_4" transform="scale(0.0104167)" />
                      </pattern>
                      <image id="image0_425_4" width="96" height="96" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,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" />
                    </defs>
                  </svg>
                </a>

                <a href="https://www.linkedin.com/in/avendano-meza-ever-frank/">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink">
                    <rect width="30" height="30" fill="url(#pattern0_425_5)" />
                    <defs>
                      <pattern id="pattern0_425_5" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_425_5" transform="scale(0.0104167)" />
                      </pattern>
                      <image id="image0_425_5" width="96" height="96" preserveAspectRatio="none"
                        xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADYUlEQVR4nO2dTW7UQBCFDQIBIiBgGQI7JG7Bzw5BrgAECW4AgcAScQHgGCSBIFhB1gEJlgSW/G0SycP4PWt2hVoxEgph7JnMuHrs90m1ieLWVL3uqmqPp50kQgghhBBCCCGEEEIMSKfTOQ5gDsAyyXUAIGlNMGz5EnxaCj4GX6OZIGZ2CMA9kh3vQLE+SwHcNbODrsEnOQ3gXQQBMSf7mOf5ac/gf40gCOZpRQymPdLOe2/nGYkBWKs1HQG47+00IzMA87UEP3QALSu4VtHSWrojADcicNZiNADX6xBgydtRRmoAntUhwBdvRxmvrdchQBaBoxajhdiMXQBvJxm5SQBKAPdZSK2AvnlyOc/zc2Z2OFiWZecBvPAOXCtSUL/dIoAF7+A1WoAw8yuMveIdwMYKENJO2dhZll3wDmBjBTCzqbKxNzY2jngHsNUCbG5uHvUOYGMFCN1O2dhZll30DmBjBQitZoWxX3oHsLECFCIs/G9cAA+8g9d4AQpbCd1OqAlmNlWknYmf+ZMkQKMtkQCUAN6zkFoB/oGgUtA/QQiF9mSf2jJD8tUorgsPSwF4DOBSr9c78+fOa7fbPRv+BuAJgG9tqwEzZWPneX5qN9eFoAK4aWb7y64xs33hfwH8aIUAw46fVCRs9DqdzolB/Qn3n0b5fUTSVgHMbM+wPpnZ3pCyJEAyvAC7pRDhuVYAfQT4627sT6Ug+ggQIHlLAtBPgKI7+q4izOEEIDlLcjX8rqv4bddbAFcGGQPAUwnAwQUg+ahP4B4OIMBlCcCB29fZsla46koIO2YJwIEFWK0QtDdVxtrNwwFJWzdiqPbUdjcWPxsnAMf8OSRACRJAK8CUgqgUpBowblSEqS5oJ1SEVYRNRZgqwirC40ZFmCrCO6EirCJsKsJUEVYRbvOjiRzv55js7wOKB2hnSpx+PcLrRv05Jl6AVlgiASgBvGchm7wCdGQZ+wnwqw4BPnvPMsZrn+oQQMdW0vfYyrkIZprFaACu1nV0certLOOzNE3TY0kdFC9s8HbYYjIAt5O6CEe1t/zFDeZ6fH1AL3Cg3wsctomw5j0D6Wcf3F5hsi0dzbesMKcA7pjZgSQWQgcA4BqAxbAhadKOGVu+BJ8Wg4+1dTtCCCGEEEIIIYQQImkSvwHSsHigStfofwAAAABJRU5ErkJggg==" />
                    </defs>
                  </svg>
                </a>
              </div>
              <!--<div class="h-u-rigth" id="options"></div>-->
            </div>
          </div>
          <!-- Barra inferior (enlaces de navegación) -->
          <nav class="header" id="header-bottom">
            <router-link to="/about" class="link-nav" :class="{ 'active': $route.path.startsWith('/about') }">
              <p>About Me</p>
            </router-link>
            <router-link to="/tools" class="link-nav" :class="{ 'active': $route.path === '/tools' }">
              <p>Tools</p>
            </router-link>
            <router-link to="/projects" class="link-nav" :class="{ 'active': $route.path === '/projects' }">
              <p>Projects</p>
            </router-link>
            <router-link to="/certificates" class="link-nav" :class="{ 'active': $route.path === '/certificates' }">
              <p>Certificates</p>
            </router-link>
          </nav>
        </div>
        <!-- Cuerpo -->
        <div id="body">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Background from '@/components/BackgroundApp.vue';
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Alata&display=swap');

.home {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

#content {
  position: absolute;
  width: 625px;
  max-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#container {
  width: 100%;
  height: 95%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}

/* ////////////////////////// Cabecera ////////////////////////// */
#header {
  width: 100%;
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 20px
}

/* ///////////// Barra superior ///////////// */
#header-up {
  width: 100%;
  height: 20px;
  box-sizing: border-box;
  padding: 0px 12px 0px 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header-up {
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between
}

#h-u-left {
  gap: 8px;
}

#h-u-left h2 {
  color: #f5f5f5;
  font-family: "Alata", sans-serif;
  font-weight: lighter;
  font-size: 14px;
}

#h-u-right {
  gap: 10px;
}

.h-u-right {
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

#socials {
  gap: 8px;
}

#socials svg {
  height: 25px;
  width: 25px;
}

/* ///////////// Barra inferior ///////////// */
#header-bottom {
  width: calc(100dvw - 0px);
  height: 45px;
  /*background: #100f19;*/
  background: linear-gradient(to left, var(--bg-nav-0), var(--bg-nav-1));
  border-radius: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  list-style: none;
}

.link-nav {
  font-family: "Alata", sans-serif;
  font-size: 15px;
  font-weight: normal;
  color: var(--col-text-nav-deactive);
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s ease;
}

.link-nav.active {
  color: var(--col-text-nav-active);
}

/* ////////////////////////// Cuerpo ////////////////////////// */
#body {
  width: 100%;
  height: 100%;
  /*box-shadow: inset 0 0 0 1px red;*/
}
</style>
