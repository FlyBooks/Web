import Vue from 'vue'
import Vuex from 'vuex'

//安装Vuex插件
Vue.use(Vuex)

const moduleA = {
  state: {
    www: 'addOil'
  }
};

import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

const state = {
  cartList: []
};


//创建Store对象并导出
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: moduleA
  }
})
