/**
 * android 拦截 htmm:// 协议 并调用 原生方法
 * */
const btn = document.getElementById("btn");
const displayA = document.getElementById("displayA")
let a = 1
btn.onclick = function () {
  displayA.innerText = String(++a)
  let iframe = document.createElement("iframe")
  iframe.style.display = 'none'
  iframe.src = "htmm://test.com/aaa"
  document.body.appendChild(iframe)
  setTimeout(function () {
    document.body.removeChild(iframe)
    iframe = null
  }, 3000)
}


