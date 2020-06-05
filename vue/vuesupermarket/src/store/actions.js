export default {
    addCartInfo(context, cart) {
        //法一： 用for of 循环
        // let flag = true;
        // for (let shop of state.cartList) {
        //   if (shop.id === cart.id) {
        //     shop.num++;
        //     flag = false;
        //   }
        // }
        // if (flag) {
        //   state.cartList.push(cart);
        // }
        //法二： 用find函数
        let shop = context.state.cartList.find((cartObj) => {
            return cartObj.id === cart.id;
        });

        if (!shop) {
            //state.cartList.push(cart);
            context.commit('addCart', cart);
        } else {
            // shop.num++;
            context.commit('addCount', shop);
        }

    }
}