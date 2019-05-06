function getStr(obj){
	var formatvalue=[];
	obj.t = new Date().getTime();
	for(var key in obj){
		formatvalue.push(key+'='+obj[key]);
	}
	return formatvalue.join('&');
}

function myAJAX(url,obj, success, error) {
	// step1 创建异步对象
	var xhr;
	var additionalpath = getStr(obj);
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject("Microsoft.XMLHTTP"); // for IE
	}
	// step3 设置请求方式跟地址
	xhr.open("GET", url + "?" +additionalpath);
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