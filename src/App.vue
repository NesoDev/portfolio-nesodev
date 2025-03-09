<template>
  <div id="app-vue">
    <div id="header">
      <div class="header" id="header-up">
        <div class="header-up" id="h-u-left">
          <svg width="39" height="22" viewBox="0 0 39 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 3V20H4.57131V8.30581C4.57131 7.6334 5.38944 7.30243 5.85696 7.78571L17.132 19.6877C17.3209 19.8871 17.5834 20 17.858 20H28.4405C33.4312 20 37.1239 15.4892 37 10.5C36.891 6.10902 33.816 2 29.4237 2H16C15.4477 2 15 2.44771 15 3V4.18272L17 6.36055V5.57143C17 5.01914 17.4477 4.57143 18 4.57143H28.0714C31.6218 4.57143 34.5 7.4496 34.5 11C34.5 14.5504 31.6218 17.4286 28.0714 17.4286H19.1534C18.8731 17.4286 18.6057 17.3109 18.4163 17.1043L4.86856 2.32429C4.67915 2.11765 4.41171 2 4.13139 2H3C2.44772 2 2 2.44772 2 3Z" fill="#9BA2C2" stroke="#9F9FCA" stroke-width="4"/>
          </svg>
          <h2>username</h2>
        </div>
        <div class="header-up" id="h-u-rigth">
          <div class="h-u-rigth" id="socials">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="30" height="30" fill="url(#pattern0_237_142)"/>
              <defs>
                <pattern id="pattern0_237_142" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_237_142" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_237_142" width="96" height="96" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="30" height="30" fill="url(#pattern0_237_153)"/>
              <defs>
                <pattern id="pattern0_237_153" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_237_153" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_237_153" width="96" height="96" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="30" height="30" fill="url(#pattern0_237_154)"/>
              <defs>
                <pattern id="pattern0_237_154" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0_237_154" transform="scale(0.0104167)"/>
                </pattern>
                <image id="image0_237_154" width="96" height="96" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADrUlEQVR4nO2dS2sUQRDHR1FUjKIefd0Ev4WPm6hfwahgwMimarrdJFsVmIv4BdSP4TOiJ805Cnr0cYyP66rJfaVWIgSymd0kMzWZ+f+gLstOM1X/7qru2dnuJAEAAAAAAAAAAAAAYERmb88ejaneCKTPAsvnQLoSWXt1sEC6Yj5Flqfmo/lamQ6SpumBSNIJpL+8AxVLM+kG1tksy/a7Br99JzseWN75B0R9Rgbrx5mpmdNuwY8kS95BiN5GsmSxcEg7+t7dea6IkS6Wmo4Cibo7zRUzkplSgm8zgGYVXB3SpFvK7CiQ3PR3VitpgeR64QL058IVcDZW0ALL48IFCCxfvR2NFTVbrBUuQGRZ9nY0VtZkuQQBvJ3UShsEYAjg3gsjRsDgINjT0jTtnIsxHuwb6flA+sI7cM1IQRusFgOreAev1gJYz89vW+a9A1hbASzt5LWdpp0L3gGsrQCTk9lYXtvtdvuQdwAbLUCrlR32DmBtBbDZzhBtX/QOYG0FsKlmXtuB9KV3AGsrQF8EVhnYLumcd/BqL8A/k3mb7VhNmJzMxizt1KHn7yAB6m0JBFAI4N0LI0aAfyAiUtDaIFihTVM5MShFTreyk4H11bZcR7IUWB9Ekkvtqbkzq09eQ+ictc8iycPA8q1RNcACldd2CHpqK9dZUO+S3pqYmNibd02WZXvsu4HlRyME2Gz7yZDYQi9Ns2Oj+mPPn7bz94ikqQIkSbJrcx71R8PufsqCAMlWBNgSJkJkeY4RwD4C/H8aS/oTKYh9BDAiywQEYD8BbHYUSb+jCPPmBIgsVwPLQv9/XfY/NdK3YWruyihtBNJHEIBHFyCw3t8gcPdGEPEyBOBRp69yNS9ow46E/ooZ6wAdbSHGspArAMmbYdrayssBSVMXYnGIt7YD6Z+q+FlDAbTQ+4AAOUAAjIAeUhAjBaEGFA2KsGIWtB4owijCPRRhRhFGES4aFGFFEV4PFGEU4R6KMKMIowg3+dXEWOB97PjH0fYC7UbOB3Oa5PV2Xbfd97HjBWiKJRBAIYB3L4z1HgHYsiwOFEB+Fy8A6RfvXharaqSfihcA21b2XLettP3z3XsaV9NSkmvlHNTA0vV2NlbOpEuUHUnKwA5s8HdYq2Uk7aQsbKv2Jh/cEL23rzdwgIP6HeCwVgRdbG7Plw9uR5isYkPPtqNsVmEWO8RnutVq7Uuqgs0AIut4IH1iC5J6rZhl2Xzq+8Y6XtpsBwAAAAAAAAAAAAAkdeIviMcDXZh3C1UAAAAASUVORK5CYII="/>
              </defs>
            </svg>
          </div>
          <!--<div class="h-u-rigth" id="options"></div>-->
        </div>
      </div>
      <nav class="header" id="header-bottom">
        <router-link to="/" class="menu-button">
          <li>About</li>
        </router-link>
        <router-link to="/" class="menu-button">
          <li>Tools</li>
        </router-link>
        <router-link to="/" class="menu-button">
          <li>Projects</li>
        </router-link>
        <router-link to="/" class="menu-button">
          <li>Certificates</li>
        </router-link>
      </nav>
    </div>
    <div id="body">
        <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app-vue {
  width: 600px;
  height: 90%;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

#header {
  width: 100%;
  height: auto;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px
}

#header-up {
  width: 100%;
  height: 20px;
  border: solid 1px #000;
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
  gap: 15px;
  border: solid 1px blue;
}
#h-u-rigth {
  gap: 15px;
  border: solid 1px blue;
}
.h-u-rigth {
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
#socials {
  gap: 15px;
  border: solid 1px palevioletred;
}

#header-bottom {
  width: 100dvw;
  height: 50px;
  border: solid 1px #000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
}

#body {
  width: 100%;
  height: 100%;
  border: solid 1px #000;
}
</style>
