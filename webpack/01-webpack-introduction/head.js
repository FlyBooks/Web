function addHeader() {
  let header = document.createElement("div");
  header.innerText = "我是头部";
  document.body.appendChild(header);
}

exports.addHeader = addHeader;
