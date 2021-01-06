<template>
  <div class="search">
    <div class="search-bar">
      <img
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg=="
        alt=""
      />
      <input
        type="text"
        placeholder="搜索歌曲、歌手、专辑"
        v-model="keyword"
        v-debounce="search"
      />
    </div>
    <div class="search-suggestion" v-show="keyword">
      <scroll-view>
        <ul>
          <li
            v-for="(song, index) in songs"
            :key="index"
            @click.stop="broadcast(song.id)"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg=="
              alt=""
            />
            <p>{{ song.name }}-{{ song.artists[0].name }}</p>
          </li>
        </ul>
      </scroll-view>
    </div>
    <div class="hot-search">
      <h3>热门搜索</h3>
      <ul>
        <li
          v-for="hot in hotSearch"
          :key="hot.first"
          @click.stop="seachHot(hot.first)"
        >
          {{ hot.first }}
        </li>
      </ul>
    </div>
    <div class="search-history">
      <ul>
        <li v-for="(keyword, index) in historySearch" :key="keyword">
          <div class="history-left" @click.stop="seachHot(keyword)">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJNMTUgMzBDNi43MTYgMzAgMCAyMy4yODQgMCAxNVM2LjcxNiAwIDE1IDBzMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOEM3LjgyIDIgMiA3LjgyIDIgMTVzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzUzIyLjE4IDIgMTUgMm03IDE2aC04YTEgMSAwIDAgMS0xLTFWN2ExIDEgMCAxIDEgMiAwdjloN2ExIDEgMCAxIDEgMCAyIi8+PC9zdmc+"
              alt=""
            />
            <p>{{ keyword }}</p>
          </div>
          <div class="history-right" @click.stop="delHistory(index)">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJNMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdhLjk3NS45NzUgMCAxIDEtMS4zNzggMS4zNzlMMTIuMDAxIDEzLjM3OCAxLjY2MyAyMy43MTZhLjk3NC45NzQgMCAxIDEtMS4zNzgtMS4zNzlMMTAuNjIzIDEyIC4yODUgMS42NjJBLjk3NC45NzQgMCAxIDEgMS42NjMuMjg0bDEwLjMzOCAxMC4zMzhMMjIuMzM5LjI4NGEuOTc0Ljk3NCAwIDEgMSAxLjM3OCAxLjM3OEwxMy4zNzkgMTIiLz48L3N2Zz4="
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ScrollView from "../components/ScrollView.vue";
import { getSearchList, getHotSearch } from "../api";
import { setLocalStorage, getLocalStorage } from "../tools/tools.js";
import { mapActions } from "vuex";
export default {
  name: "Search",
  components: {
    ScrollView,
  },
  data() {
    return {
      keyword: "",
      songs: [],
      hotSearch: [],
      historySearch: [],
    };
  },
  methods: {
    ...mapActions(["setIsFullpagePlay", "setSongsDetail"]),
    async search() {
      if (!this.keyword) {
        return;
      }
      const res = await getSearchList(this.keyword);
      this.songs = res.data.result.songs;
    },
    broadcast(songid) {
      this.setSongsDetail([songid]);
      this.setIsFullpagePlay(true);
      if (!this.historySearch.includes(this.keyword)) {
        console.log(this.keyword, "keyword");
        this.historySearch.push(this.keyword);
        setLocalStorage("searchHistory", this.historySearch);
      }
    },
    seachHot(keyword) {
      this.keyword = keyword;
      this.search();
    },
    delHistory(index) {
      this.historySearch.splice(index, 1);
      setLocalStorage("searchHistory", this.historySearch);
    },
  },
  directives: {
    debounce: {
      inserted: function(el, obj) {
        let timerId = null;
        el.addEventListener("input", function() {
          timerId && clearTimeout(timerId);
          timerId = setTimeout(function() {
            obj.value(); //obj.value的内容是函数search,obj.value()调用该函数
          }, 1000);
        });
      },
    },
  },
  async created() {
    const res = await getHotSearch();
    this.hotSearch = res.data.result.hots;
    this.historySearch = getLocalStorage("searchHistory") || [];
  },
};
</script>

<style scoped lang="scss">
@import "../assets/css/variable.scss";
@import "../assets/css/mixin.scss";
.search {
  position: fixed;
  top: 184px;
  left: 0;
  right: 0;
  bottom: 0;
  @include bg_sub_color();
  .search-bar {
    display: flex;
    margin: 20px;
    border: 1px solid #cccccc;
    border-radius: 30px;
    align-items: center;
    background: #ebecec;
    img {
      width: 40px;
      height: 40px;
      color: white;
      margin-left: 10px;
    }
    input {
      background: transparent;
      outline: none;
      border: none;
      height: 60px;
      margin-left: 10px;
      @include font_size($font_medium_s);
    }
  }
  .search-suggestion {
    position: fixed;
    top: 280px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 20px;
    overflow: hidden;
    @include bg_sub_color();
    li {
      padding: 10px;
      display: flex;
      align-items: center;
      img {
        width: 40px;
        height: 40px;
      }
      p {
        margin-left: 20px;
        @include font_size($font_medium_s);
        @include font_color();
      }
      border-bottom: 1px solid #cccccc;
    }
  }
  .hot-search {
    h3 {
      @include font_size($font_medium);
      @include font_color();
      padding: 10px 20px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding: 5px 10px;
        border: 1px solid #cccccc;
        border-radius: 20px;
        height: 40px;
        line-height: 40px;
        margin: 5px 10px;
        @include font_size($font_medium_s);
        @include font_color();
      }
    }
  }
  .search-history {
    margin-top: 15px;
    ul {
      padding: 5px 20px;
      li {
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .history-left {
          display: flex;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
          }
          p {
            @include font_size($font_medium_s);
            @include font_color();
            margin-left: 15px;
          }
        }
        .history-right {
          img {
            width: 20px;
            height: 20px;
          }
        }
        border-bottom: 1px solid #cccccc;
      }
    }
  }
}
</style>
