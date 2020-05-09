<template>
  <div v-if="Object.keys(comments).length !== 0">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多</div>
    </div>

    <div class="info-user">
      <img :src="comments.user.avatar" alt />
      <span>{{comments.user.uname}}</span>
    </div>

    <div class="info-detail">
        <p>{{comments.content}}</p>
        <div class="info-other">
            <span >{{comments.created | showDate}}</span>
            <span>{{comments.style}}</span>
        </div>
        <div class="info-imgs">
            <span v-for="(img,index) in comments.images" :key="index"><img :src="img"></span>
        </div>
    </div>
  </div>
</template>

<script>
import {format} from '../../../common/utils.js';
export default {
  name: "DetailComments",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters:{
      showDate(date){
       let time = new Date(date*1000);
       return format(time,'yyyy-MM-dd');
      }
  }
};
</script>

<style scoped>
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}

.header-title{
    float: left;
    font-size: 15px;
}

.header-more{
    float: right;
    font-size:  15px;
    margin-right:10px;
}

.info-user{
    padding: 10px 0 5px;
}

.info-user img{
    border-radius: 50%;
    margin-left: 3px;
    height: 42px;
    width: 42px;
}

.info-user span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 8px;
}

.info-other span{
    margin-right: 5px;
}

.info-detail{
    padding: 0 5px 15px;
}

.info-detail p {
    font-size:14px;
    color: #777;
    line-height: 1.5;
}

.info-detail .info-other{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
}

.info-imgs{
    margin-top: 10px;
}

.info-imgs img{
    width: 70px;
    height: 70px;
    margin-right: 10px;
}
</style>

