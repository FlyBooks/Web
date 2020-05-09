import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
  state: {
    www: 'addOil'
  }
};

export default new Vuex.Store({
  state: {
    counter: 11,
    students: [
      { id: 110, name: 'Eva', age: 18 },
      { id: 111, name: 'Selena', age: 19 },
      { id: 112, name: 'Taylor', age: 17 },
      { id: 113, name: 'Lauv', age: 20 },
      { id: 114, name: 'Tim', age: 25 },
    ]
  },
  mutations: {
    decrement(state) {

    }
  },
  actions: {
    aUpdateInfo(context) {
      setTimeout(() => {
        context.commit('decrement');
      }, 1000);
    }
  },
  getters: {
    powerCounter(state) {
      return state.counter * state.counter;
    },
    stuMore20(state) {
      return state.students.filter((stu) => {
        return stu.age > 18;
      });
    },
    stuMore20Len(state, getters) {
      return getters.stuMore20.length;
    },
    stuFilterByUser(state) {
      return function (age) {
        return state.students.filter((stu) => stu.age > age);
      }
    }
  },
  modules: {
    a: moduleA
  }
})
