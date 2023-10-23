<template #extra>
    <div class="flex items-center">
      <i i-logos-unocss text-5 inline-block />
      <p text-xs inline-flex gap-1>
        <i @click="toggleDark()" icon-btn dark:i-carbon-moon i-carbon-sun />
        <a
          icon-btn
          i-carbon-logo-github
          href="https://github.com/zclzone"
          target="_blank"
          title="GitHub"
        />
      </p>
    </div>
  </template>
<script setup lang='ts'>
import { ref, reactive } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
    
<style scoped>

</style>