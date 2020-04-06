function ajax_get(type,url, obj, timeout, success, error) {
	// 创建一个异步对象
	var xmlhttp;
	var timer;
	var linkData = dealWithData(obj);
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); // 兼容低级浏览器ie
	}

	// 设置请求方式跟请求地址
	if (type === 'GET'){
		xmlhttp.open('GET', url + "?" + linkData, true);
		// 发送请求
		xmlhttp.send();
	}else {
		xmlhttp.open('POST', url, true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		//发送请求
		xmlhttp.send(linkData);
		console.log(linkData);
	}
	


	timer = setInterval(function() {
		xmlhttp.abort();
		clearInterval(timer);
	}, timeout);

	// 监听状态变化
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4) {
			clearInterval(timer);
			if (xmlhttp.status >= 200 && xmlhttp.status < 300
					|| xmlhttp.status === 304) {
				// 成功，处理数据
				success(xmlhttp); // 把xmlhttp对象传入，方便
			} else {
				// 失败，处理数据
				error(xmlhttp);
			}

		}

	}
}

function dealWithData(obj) {
	obj.t = new Date().getTime();
	var arr = [];
	for ( var key in obj) {
		arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
	}

	return arr.join("&");
}