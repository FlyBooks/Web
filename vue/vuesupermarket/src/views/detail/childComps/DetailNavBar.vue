<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick()">
        <img src="../../../assets/img/common/back.svg" />
      </div>
      <div slot="middle" class="nav-bar">
        <div
          v-for="(item, index) in lists"
          :key="index"
          class="nav-bar-item"
          :class="{active: currentIndex === index}"
          @click="clickItem(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      lists: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    clickItem(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.nav-bar {
  display: flex;
}

.nav-bar-item {
  flex: 1;
}

.active {
  color: red;
}

.back img {
  margin-top: 12px;
}
</style>
