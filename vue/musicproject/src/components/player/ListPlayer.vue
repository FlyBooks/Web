<template>
  <div class="list-player" v-show="isShow">
    <div class="wrapper">
      <div class="list-top">
        <div class="play-mode">
          <div class="mode-img"></div>
          <p>顺序播放</p>
        </div>
        <div class="del"></div>
      </div>
      <div class="list-middle">
        <scroll-view>
          <ul>
            <li class="item">
              <div class="item-left">
                <div class="play-img"></div>
                <p>演员</p>
              </div>
              <div class="item-right">
                <div class="fav"></div>
                <div class="del"></div>
              </div>
            </li>
            <li class="item">
              <div class="item-left">
                <div class="play-img"></div>
                <p>演员</p>
              </div>
              <div class="item-right">
                <div class="fav"></div>
                <div class="del"></div>
              </div>
            </li>
            <li class="item">
              <div class="item-left">
                <div class="play-img"></div>
                <p>演员</p>
              </div>
              <div class="item-right">
                <div class="fav"></div>
                <div class="del"></div>
              </div>
            </li>
          </ul>
        </scroll-view>
      </div>
      <div class="list-bottom">
        <p @click="hidePlayer()">关闭</p>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollView from "../ScrollView";
export default {
  name: "ListPlayer",
  components: {
    ScrollView,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    showPlayer() {
      this.isShow = true;
    },
    hidePlayer() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/mixin.scss";
@import "../../assets/css/variable.scss";

.list-player {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  @include bg_sub_color();
  .wrapper {
    .list-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .play-mode {
        display: flex;
        align-items: center;
        padding-left: 10px;
        .mode-img {
          width: 56px;
          height: 56px;
          @include bg_img("../../assets/images/small_loop");
        }
        p {
          @include font_size($font_samll);
          @include text_color();
          margin-left: 10px;
        }
      }
      .del {
        width: 84px;
        height: 84px;
        @include bg_img("../../assets/images/small_del");
      }
    }
    .list-middle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item {
        border-top: 1px solid #cccccc;
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        .item-left {
          display: flex;
          align-items: center;

          .play-img {
            width: 56px;
            height: 56px;
            @include bg_img("../../assets/images/small_play");
          }
          p {
            margin-left: 10px;
            @include font_size($font_samll);
            @include text_color();
          }
        }
        .item-right {
          display: flex;
          .fav {
            width: 52px;
            height: 52px;
            @include bg_img("../../assets/images/small_un_favorite");
          }
          .del {
            width: 50px;
            height: 50px;
            @include bg_img("../../assets/images/small_close");
            margin-left: 20px;
          }
        }
      }
    }
    .list-bottom {
      height: 100px;
      line-height: 100px;
      p {
        text-align: center;
        @include bg_color();
        @include font_size($font_medium);
        color: white;
      }
    }
  }
}
</style>
