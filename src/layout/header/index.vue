<template>
  <el-header p-0>
    <el-page-header :icon="null" rounded bg-indigo>
      <logo></logo>
      <nav-bar></nav-bar>
      <setting></setting>
    </el-page-header>
  </el-header>
</template>
    
<script setup lang='ts'>
import { defineAsyncComponent } from "vue";

const Logo = defineAsyncComponent(()=>import("@/layout/header/components/logo.vue"))
const NavBar = defineAsyncComponent(()=>import("@/layout/header/components/navBar.vue"))
const  Setting = defineAsyncComponent(()=>import("@/layout/header/components/setting.vue"))

</script>
    
<style scoped>
i,
a {
  font-size: 2rem;
}
</style>