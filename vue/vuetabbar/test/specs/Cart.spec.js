import Vue from 'vue';
import Cart from '../../src/views/cart/Cart.vue';

describe("Cart.vue", ()=>{
    it('should render correct contents',()=>{
        const Constructor = Vue.extend(Cart);
        const vm = new Constructor.$mount();

        expect(vm.$el.querySelect('h1').textContent.to.equal('Cart'));
    })
})