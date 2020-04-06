window.onload = function() {
	// toFixed()方法可把Number四舍五入为指定小数位数的数字
	const app = new Vue({
		el : "#app",
		data : {
			books : [ {
				id : 1,
				book : '算法导论',
				date : '2019-2',
				price : 85.00,
				purchaseNum : 1
			}, {
				id : 2,
				book : 'UNIX编程艺术',
				date : '2015-12',
				price : 55.03,
				purchaseNum : 1
			}, {
				id : 3,
				book : '编程珠玑',
				date : '2009-6',
				price : 39.99,
				purchaseNum : 1
			}, {
				id : 4,
				book : '代码大全',
				date : '2001-11',
				price : 123.50,
				purchaseNum : 1
			} ]
		},
		filters:{
			getPrice(price){
				return '￥'+price.toFixed(2);
			}
		},
		computed:{
			totalPrice:function(){
				let sum = 0;
				for(book of this.books){
					sum+= book.price * parseInt(book.purchaseNum);
				}
				return sum;
			}
		},
		methods:{
			increment(index){
				this.books[index].purchaseNum++;
			},
			decrement(index){
				this.books[index].purchaseNum--;
			},
			removeHandle(index){
				this.books.splice(index,1);
			}
		}

	});
};
