function content() {
  let oContent = document.createElement("div");
  oContent.innerText = "我是内容部分";
  document.body.appendChild(oContent);
}

exports.content = content;
