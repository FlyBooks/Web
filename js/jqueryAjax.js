function additionUrl(data){
	var additionUrls = [];
	
	data.t = new Date().getTime();
	
	for (var key in data){
		
		additionUrls.push(encodeURIComponent(key)+"="+encodeURIComponent(data[key]));
	}
	
	return additionUrls.join("&");
}

function Ajax(option){
	var xhr;
	var timer;
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest();
	}
	else{
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	
	var additionalUrls = additionUrl(option.data);
	if(option['type'].toLowerCase === "post"){
		clearInterval(timer);	
		xhr.open("POST", option.url, true);
		xhr.setRequestHeader("Content-type", "aoolication/x-222-form-urlencode");
		xhr.send(additionalUrls);	
	}
	else{
		xhr.open("GET",option.url+"?"+additionalUrls,true);
		xhr.send();
	}
	console.log(xhr.readystate);
	xhr.onreadystatechange = function(ev2){
		if(xhr.readystate === 4){
			if(xhr.status >= 200 && xhr.status<300 || xhr.status === 304){
				
				option.success(xhr);
			}else{
				
				option.error(xhr);
			}
			
		}		
	}
	
	if(option.timeout){
		timer = setInterval(function(){
			xhr.abort();
			clearInterval(timer);	
		},option.timeout);
	}
	
	
}