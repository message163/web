<template>
  <el-container  direction="vertical"  dark:text-white dark:bg-hex-121212 h-screen>
    <LayoutHeader />
    <LayoutMain />
  </el-container>
</template>
    
<script setup lang='ts'>
import { ref, reactive, defineAsyncComponent } from "vue";
const LayoutHeader = defineAsyncComponent(
  () => import("@/layout/header/index.vue")
);
const LayoutMain = defineAsyncComponent(
  () => import("@/layout/content/index.vue")
);
</script>
    
<style scoped lang='less'>
</style>