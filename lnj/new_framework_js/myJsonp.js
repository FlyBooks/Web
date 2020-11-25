function myJsonp(options) {
  options = options || {};
  let url = options.url;

  if (options.jsonp) {
    url += `?${options.jsonp}=`;
  } else {
    url += "?callback=";
  }

  let callbackName = ("Jquery" + Math.random()).replace(".", "");

  if (options.jsonpCallback) {
    callbackName = options.jsonpCallback;
  }
  url += callbackName;
  let params = getData(options.data);
  url += `&${params}`;
  // console.log(url);

  //生成跨域数据
  let oScript = document.createElement("script");
  oScript.src = url;
  document.body.appendChild(oScript);

  //定义回调函数
  window[callbackName] = function (data) {
    options.success(data);
  };
}

function getData(params) {
  let arr = [];
  for (let key in params) {
    arr.push(`${key}=${params[key]}`);
  }

  return arr.join("&");
}
