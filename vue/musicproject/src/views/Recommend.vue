<template>
  <div class="recommend">
    <Banner :banners="banners"></Banner>
  </div>
</template>

<script>
import { getHotComments } from "../api";
import Banner from "../components/Banner.vue";
export default {
  name: "Recommend",
  components: {
    Banner,
  },
  data() {
    return {
      banners: [],
    };
  },
  created() {
    this.getHotComments2();
  },
  methods: {
    async getHotComments2() {
      const res = await getHotComments();
      this.banners = res.data.banners;
      console.log(this.banners);
    },
  },
};
</script>

<style scoped></style>
