function myAJAX(url, success, error) {
	// step1 创建异步对象
	var xhr;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP"); // for IE
	}
	// step3 设置请求方式跟地址
	xhr.open("GET", url + "?t=" + (new Date().getTime()), true);
	xhr.send();
	// step4 监听状态
	xhr.onreadystatechange = function(ev2) {
		if (xhr.readyState === 4) { // ajax请求完成
			if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
				// step5 处理返回结果
				success(xhr);
			} else {

				error(xhr);
			}
		}

	}

}