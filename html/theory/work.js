var onmessage = function(event) {
	console.log('分线程监视...');
	console.log(event, 'event');

	// 获取主线程发送过来的信息数据
	var data = event.data;

	// 分线程处理数据
	data = data.toUpperCase();
	
	//将处理完的数据转交给主线程
	
};