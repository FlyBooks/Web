function getStr(obj) {
	var formatvalue = [];
	obj.t = new Date().getTime();
	for ( var key in obj) {
		//在url中不可以出现中文，如果出现中文则需要转码
		//encodeURIComponent()方法可以实现中文的转码
		//url中只可以出现字母，数字，下划线跟ASCII码
		formatvalue.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
	}
	return formatvalue.join('&');
}

function myAJAX(url, obj, timeout, success, error) {
	// step1 创建异步对象
	var xhr;
	var additionalpath = getStr(obj);
	var timer;
	console.log(timeout);
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP"); // for IE
	}
	// step3 设置请求方式跟地址
	xhr.open("GET", url + "?" + additionalpath);
	xhr.send();
	// step4 监听状态
	xhr.onreadystatechange = function(ev2) {
		if (xhr.readyState === 4) { // ajax请求完成
			clearInterval(timer);
			if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
				// step5 处理返回结果
				success(xhr);
			} else {

				error(xhr);
			}
		}

	}

	if (timeout) { // 添加超时请求
		timer = setInterval(function() {
			xhr.abort();
			clearInterval(timer);
		}, timeout);
	}

}