<template>
  <el-main>
    <el-timeline>
      <el-timeline-item center timestamp="2018/4/12" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/12 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/3" placement="top">
        <el-card>
          <h4>Update Github template</h4>
          <p>Tom committed 2018/4/3 20:46</p>
        </el-card>
      </el-timeline-item>
      <el-timeline-item center timestamp="2018/4/2" placement="top">
        Event start
      </el-timeline-item>
      <el-timeline-item timestamp="2018/4/2" placement="top">
        Event end
      </el-timeline-item>
    </el-timeline>
  </el-main>
</template>

<script setup lang='ts'>
import { ref, reactive } from "vue";
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from "@element-plus/icons-vue";
</script>

<style scoped lang='less'>
</style>