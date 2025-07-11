<template>
  <div id="app">
    <el-button @click="route_gotoPage('transformDomToPdf_demo')">Vue页面转换为PDF并导出</el-button>
    <router-view style="width: 840px; margin: 0 auto;margin-top: 10px;"></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {
  },
  methods: {
    route_gotoPage(target) {
      this.$router.push(target);
    }
  }
}
</script>

<style>

</style>
