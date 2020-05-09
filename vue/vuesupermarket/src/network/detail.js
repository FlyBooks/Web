import { request } from './request.js';

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    });
}

export function getRecommend(){
    return request({
        url: '/recommend'
    });
}

export class GoodsInfo {
    constructor(itemInfo, columns, service) {
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.desc = itemInfo.discountDesc;
        this.oldPrice = itemInfo.oldPrice;
        this.nowPrice = itemInfo.highNowPrice;

        this.columns = columns; //记录的是销量之类的数据

        this.service = service; // service的数据在shopInfo里面
    }

}

export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.fans = shopInfo.cFans;
        this.sells = shopInfo.cSells;
        this.score = shopInfo.score;
        this.goodsCount = shopInfo.cGoods;
    }

}

export class GoodParam {
    constructor(info, rule){
      this.image = info.images ? info.images[0] : "";
      this.infos = info.set;
      this.sizes = rule.tables;
    }
}
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// const person1 = new Person('Eva', 18);