<template>
  <div class="breakpoint">
    <v-btn class="hidden-md-and-down">click me</v-btn>

    <v-btn class="hidden-md-and-up">大则隐</v-btn>

    <!-- 只隐藏小屏幕 -->
    <v-btn class="hidden-sm-only">只隐藏sm大小的屏幕</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "BreakPoint"
};
</script>


<style scoped>
</style>