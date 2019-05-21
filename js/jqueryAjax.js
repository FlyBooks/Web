function additionUrl(obj){
	var additionUrls = [];
	
	obj.t = new Date().getTime();
	
	for (var key in obj){
		
		additionUrls.push(key+"="+obj[key]);
	}
	
	return additionUrls.join("&");
}

function Ajax(data){
	var xhr;
	var timer;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}
	else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	
	var additionalUrls = additionUrl(data.obj);
	if(data[type].toLowerCase === "post"){
		clearInterval(timer);	
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "aoolication/x-222-form-urlencode");
		xhr.send(additionalUrls);	
	}
	else{
		xhr.open("GET",url+"?"+additionalUrls,true);
		xhr.send();
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readystate === 4){
			if(xhr.status >= 200 && xhr.status<300 || xhr.status === 304){
				
				data.success(xhr);
			}else{
				
				data.error(xhr);
			}
			
		}		
	}
	
	if(xhr.timeout){
		timer = setInterval(function(){
			xhr.abort();
			clearInterval(timer);	
		},xhr.timeout);
	}
	
	
}