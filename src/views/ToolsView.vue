<template>
  <div class="tools">
    <div id="content">
      <DropdownItems v-for="(tool, i) in tools" :key="i" :title="tool.title" :component="ToolItem" :items="tool.items"/>
    </div>
  </div>
</template>

<script setup>
import DropdownItems from '@/components/DropdownItems.vue';
import ToolItem from '@/components/ToolItem.vue';

console.log(`toolitem: ${JSON.stringify(ToolItem)}`);

const loadImages = (context) => {
  return [...context.keys()
    .map((key) => ({
      name: key.replace(/^.*[\\/]/, '').replace('.png', ''),
      url: context(key),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
  ];
};

const languages_Images = loadImages(require.context('@/assets/tools/languages', false, /\.png$/));
const libsFrameworks_Images = loadImages(require.context('@/assets/tools/libs-frameworks', false, /\.png$/));
const dbs_Images = loadImages(require.context('@/assets/tools/db', false, /\.png$/));
const cloudCDCI_Images = loadImages(require.context('@/assets/tools/cloud-cd_ci', false, /\.png$/));
const iot_Images = loadImages(require.context('@/assets/tools/iot', false, /\.png$/));
const noCodeLowCode_Images = loadImages(require.context('@/assets/tools/no_code-low_code', false, /\.png$/));

const tools = [
  { title: "Languages", items: [...languages_Images] },
  { title: "Libs/Frameworks", items: [...libsFrameworks_Images] },
  { title: "Databases", items: [...dbs_Images] },
  { title: "Cloud & CI/CD", items: [...cloudCDCI_Images] },
  { title: "IoT", items: [...iot_Images] },
  { title: "NoCode / LowCode", items: [...noCodeLowCode_Images] },
];

console.log(tools);

</script>

<style scoped>
.tools {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  overflow-y: scroll;
}

#content {
    position: absolute;
    height: auto;
    width: calc(100% - 30px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px
}

.box {
  width: 100%;
  height: 64px;
  box-shadow: inset 0px 0px 0px 1px #fff;
}
</style>