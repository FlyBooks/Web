<template>
  <div class="rank">
    <scroll-view>
      <ul>
        <li v-for="(title, key) in rank.titles" :key="key">
          <h3 class="rank-title">{{ title }}</h3>
          <ul class="rank-detail-1" v-if="title === '官方榜'">
            <li
              v-for="topItem in rank[key]"
              :key="topItem.id"
              @click.stop="showDetail(topItem.id)"
            >
              <div class="rank-left">
                <img v-lazy="topItem.rank.coverImgUrl" class="img-cover" />
                <p class="pic-char">{{ topItem.rank.updateFrequency }}</p>
              </div>

              <div class="rank-right">
                <ul class="songs-list">
                  <li
                    v-for="(topItem, index) in topItem.rank.tracks"
                    :key="index"
                  >
                    {{ index + 1 }}.{{ topItem.first }}-{{ topItem.second }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="rank-detail-2" v-else>
            <li
              v-for="topItem in rank[key]"
              :key="topItem.id"
              @click.stop="showDetail(topItem.id)"
            >
              <div class="rank-top">
                <img v-lazy="topItem.rank.coverImgUrl" class="img-cover" />
                <p class="rank-char">{{ topItem.rank.updateFrequency }}</p>
              </div>

              <div class="rank-bottom">
                <p>{{ topItem.rank.name }}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </scroll-view>
    <transition >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getTopLists } from "../api/index";
import ScrollView from "../components/ScrollView.vue";

export default {
  name: "Rank",
  components: {
    ScrollView,
  },
  data() {
    return {
      rank: {},
    };
  },
  created() {
    getTopLists().then((res) => {
      this.rank = res;
    });
  },
  methods: {
    showDetail(id) {
      this.$router.push(`/rank/rankdetail/${id}/rank`);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/mixin.scss";
@import "../assets/css/variable.scss";
.rank {
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  @include bg_sub_color();
  .rank-title {
    @include font_size($font_large);
    @include font_color();
    font-weight: bold;
    padding: 10px 5px;
  }
  .rank-detail-1 {
    li {
      display: flex;
      padding: 10px 15px;
      margin-bottom: 10px;
      box-sizing: border-box;
      @include font_size($font_samll);
      .rank-left {
        position: relative;
        .img-cover {
          width: 200px;
          height: 200px;
          border-radius: 10px;
        }
        .pic-char {
          position: absolute;
          bottom: 10px;
          left: 10px;
          color: white;
          @include font_size($font_samll);
        }
      }
      .rank-right {
        .songs-list {
          margin-left: 20px;
          @include font_color();
          @include font_size($font_medium_s);
        }
      }
    }
  }

  .rank-detail-2 {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px 5px;

    .rank-top {
      position: relative;
      .img-cover {
        width: 200px;
        height: 200px;
        border-radius: 10px;
        margin: 0 5px;
      }
      .rank-char {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: white;
        @include font_size($font_samll);
      }
    }
    .rank-bottom {
      padding: 10px 0px;
      width: 200px;
      @include no-wrap();
      @include font_size($font_samll);
      @include font_color();
      text-align: center;
    }
  }
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
