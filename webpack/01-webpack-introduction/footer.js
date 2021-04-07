function footer() {
  let oFooter = document.createElement("div");
  oFooter.innerText = "我是底部";
  document.body.appendChild(oFooter);
}

exports.footer = footer;
