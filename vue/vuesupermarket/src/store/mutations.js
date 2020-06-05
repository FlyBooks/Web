export default { //mutations唯一的目的就是修改state中的状态, mutations中的每一个方法尽可能完成比较单一的事件
    decrement() { },
    addCart(state, payload) {
        state.cartList.push(payload);
        console.log(state.cartList);
    },
    addCount(state, payload) {
        payload.num++;
    }
}