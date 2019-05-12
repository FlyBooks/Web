function objStr(obj) {
	var addressValue = [];
	obj.t = new Date().getTime();

	for ( var key in obj) {

		addressValue.push(key + '=' + obj[key]);
	}

	return addressValue.join('&');
}

function myPostAjax(url, obj, timeout, success, error) {
	var xhr;
	var timer;
	if (window.XMLHttpRequest) {

		xhr = new XMLHttpRequest();
		alert(xhr);

	}
	else
	{

		xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
   var additionalUrl = objStr(obj);console.log(additionalUrl);
	xhr.open("POST", url,true);
	xhr.send();
//onreadystatechange
	xhr.onreadystatechange(function(ev2) {
		if (xhr.readyState === 4) {
			clearInterval(timer);
			if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
				success(xhr);

			} else {

				error(xhr);
			}
		}

	});

	if (timeout) {
		timer = setInterval(function() {
			xhr.abort();
			clearInterval(timer);
		}, timeout);
	}

}