<template>
  <transition appear>
    <div class="profile">
      <profile-header @profileindex="profileIndex"></profile-header>
      <profile-content :profileindex="index"></profile-content>
    </div>
  </transition>
</template>

<script>
import ProfileHeader from "../components/profile/ProfileHeader.vue";
import ProfileContent from "../components/profile/ProfileContent.vue";
export default {
  name: "Profile",
  data() {
    return {
      index: 0,
    };
  },
  components: {
    ProfileHeader,
    ProfileContent,
  },
  methods: {
    profileIndex(index) {
      this.index = index;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin.scss";

.profile {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  @include bg_sub_color();
  width: 100%;
  height: 100%;
}
.v-enter {
  transform: translateX(100%);
}
.v-enter-to {
  transform: translateX(0%);
}
.v-enter-active {
  transition: transform 1s;
}

.v-leave {
  transform: translateX(0%);
}
.v-leave-to {
  transform: translateX(100%);
}
.v-leave-active {
  transition: transform 1s;
}
</style>
