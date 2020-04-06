let flag = true;
let name = 'Eva';

export {
	flag,name
}

export let age = 18;
export let height = 1.68;

//导出函数，类
export function sum(num1,num2){
	return num1+num2;
}

export class Person{
	run(){
		console.log('在奔跑！！！');
	}
}

//export default
// const address = '北京市'；
// export default address //只能默认导出一个，当用户导入的时候可以自己随意命名