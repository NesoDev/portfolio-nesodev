<template>
  <div class="home">
    <Background />
    <!-- Contenido -->
    <div id="content">
      <!-- Cabecera -->
      <div id="header">
        <!-- Barra superior -->
        <div class="header" id="header-up">
          <div class="header-up" id="h-u-left">
            <svg width="30" height="15" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 3V20H4.57131V8.30581C4.57131 7.6334 5.38944 7.30243 5.85696 7.78571L17.132 19.6877C17.3209 19.8871 17.5834 20 17.858 20H28.4405C33.4312 20 37.1239 15.4892 37 10.5C36.891 6.10902 33.816 2 29.4237 2H16C15.4477 2 15 2.44771 15 3V4.18272L17 6.36055V5.57143C17 5.01914 17.4477 4.57143 18 4.57143H28.0714C31.6218 4.57143 34.5 7.4496 34.5 11C34.5 14.5504 31.6218 17.4286 28.0714 17.4286H19.1534C18.8731 17.4286 18.6057 17.3109 18.4163 17.1043L4.86856 2.32429C4.67915 2.11765 4.41171 2 4.13139 2H3C2.44772 2 2 2.44772 2 3Z"
                fill="#9BA2C2" stroke="#9F9FCA" stroke-width="4" />
            </svg>
            <h2>NesoDev</h2>
          </div>
          <div class="header-up" id="h-u-right">
            <div class="h-u-right" id="socials">

              <a href="https://github.com/NesoDev">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="25" height="25" fill="url(#pattern0_13_91)" />
                  <defs>
                    <pattern id="pattern0_13_91" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_13_91" transform="scale(0.0104167)" />
                    </pattern>
                    <image id="image0_13_91" width="96" height="96" preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,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" />
                  </defs>
                </svg>
              </a>

              <a href="https://x.com/neso_liver">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="25" height="25" fill="url(#pattern0_13_92)" />
                  <defs>
                    <pattern id="pattern0_13_92" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_13_92" transform="scale(0.0104167)" />
                    </pattern>
                    <image id="image0_13_92" width="96" height="96" preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,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" />
                  </defs>
                </svg>
              </a>

              <a href="https://www.linkedin.com/in/avendano-meza-ever-frank/">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <rect width="25" height="25" fill="url(#pattern0_13_93)" />
                  <defs>
                    <pattern id="pattern0_13_93" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_13_93" transform="scale(0.0104167)" />
                    </pattern>
                    <image id="image0_13_93" width="96" height="96" preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADpUlEQVR4nO2dTU8UQRCGR6NRIxr1qOLNxH/hx82of0HURP+BX2iyF+OduB6A3aoBw4VEQTB60j1ocKtA8UAicgT1ior3McVC1IRlZ5fdqWHmfZK6kJ3O1vt2d/XMDt1BAAAAAAAAAAAAAABAk4yMvD1cLutVZhlnlnki+c2sURaCVnOxnHTMcrRcU9NBRken9hHpXWb54S0UJ2fIMrPcYa7sdRW/VPpwlFnUWxB2M0Jnh4ZmTniKv+gtAruHLJoWiU87zDrtn7ymIohEEp2OmOWed9KcsiCS24mIbyuAPBVcjm/AciKrIyK95p0spzbkShIGjPknqikNedpxA5h1wT9RTWnIfAIGyIp/oprSkJUEDPBOUlMdMIBhgHsvZIyATefJ8XJZTw8Pf9pvwTx9hlkmvIXLxRS02d0ikfZ6i5dxA2Q8RtuT3gJm1gCbdhq1HYbVs94CZtaAYnGuq1HbpdK7A94C5tqAJ0+qB70FzKwBttpp1DZR9Zy3gBk2QCYaG6AvvAXMsAGrv6H21hdf7nuLl3kD1mLSVjtWE4rFuS6bdrLQ87eTAZmOAAYoDPDuhYwR4C8EYwr6XwQrtGE4dazeFDkwUD1OJC/bc529MCaPwlDPE70/+ffJ68yp2t+kyKxLuaoBJlSjtom0e4vXLTHL9f7+md2NrikUKrvss8zyLRcGtNp+EPs6mRgcnDrSbD6150/t+z0iyKsBURTtaDWnQiHaaVMWDAhaN2CrmAlE8hwjgH0MWH8aSyTfMQWxjwFGGOoNGMB+BtjqiEi/oghzawYQ6SUiqdj/ddVC35TLcrGZNpjlMQzg5g1glof1hCPSB/HbqV6AAdycAdbzG4kWdyTYHTMM4GYNkEoM0V7HaWsrLwcEeb0R43hvbf9KS54ZNEA7+j1gQANgAEZAhCmIMQWhBnQaFGHFKmgjUIRRhCMUYUYRRhHuNCjCiiK8ESjCKMIRijCjCKMI5/zVxKhT32PbP462F2g3S55Iu4n0Vbuua/f32PYG5CUCGKAwwLsXcrZHALYs4zriE+nPjhtApF+8exmnNIjkcxIGYNtKdty2snZGgH9v4xRGGFYvd9wA2563tn++f8KcoqhpMnsoSILagQ3+SXO64maQFLZVe54PbmDv7esNHOCgfgc4/GtCzf3c9vyPbkeYrGNDz7ajzFNhptVcq7f6+hb2BGnBVgBE0kOkz+yGJFt3zLJiOa3l1pPYagcAAAAAAAAAAAAABFniDyuNz1xwI+ybAAAAAElFTkSuQmCC" />
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
</template>

<script setup>
import Background from '@/components/BackgroundComponent.vue';
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
  padding: 21px 0;
}

#content {
  width: 600px;
  max-width: 100%;
  height: 100%;
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
  color: #9F9FCA;
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
  width: 100dvw;
  height: 45px;
  background: #0C0C11;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  list-style: none;
}

.link-nav {
  font-family: "Alata", sans-serif;
  font-size: 15px;
  font-weight: lighter;
  color: #333343;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: color 0.2s ease;
}

.link-nav.active {
  color: #797D9E
}

/* ////////////////////////// Cuerpo ////////////////////////// */
#body {
  width: 100%;
  height: 100%;
  /*box-shadow: inset 0 0 0 1px red;*/
}
</style>
