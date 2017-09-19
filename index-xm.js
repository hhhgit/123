function $(select){
var first = select.charAt(0);
  if(first == '.'){
      return document.getElementsByClassName(select.substring(1));
  }else if(first == '#'){
      return document.getElementById(select.substring(1));
  }else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
      return document.getElementsByTagName(select);
  }
}

let cdhli=$('.cdhli');
let cdhdiv=$('.cdhdiv');
for (let i = 0; i < cdhli.length; i++) {
  cdhli[i].onmouseover = function () {
    cdhdiv[i].style.display = 'block';
  }
  cdhdiv[i].onmouseover = function () {
    cdhdiv[i].style.display = 'block';
  }
  cdhli[i].onmouseout = function () {
    cdhdiv[i].style.display = 'none';
  }
  cdhdiv[i].onmouseout = function () {
    cdhdiv[i].style.display = 'none';
  }
}





let zuo=$('.bannerzuo');
let yuo=$('.banneryou');
let bannerhz=$('.banner');
let bannerimg=bannerhz[0].getElementsByTagName('li');
let banner1=document.getElementsByClassName('banneryuan');
let banneryq=banner1[0].getElementsByTagName('li');
let now = 0;
for (let i = 0; i < bannerimg.length; i++) {
  banneryq[i].index = i;
  banneryq[i].onmouseover = (function (i) {
    return function(){
      bannerimg[now].style.zIndex = 1;
      bannerimg[i].style.zIndex = i+2;
      now=i;
    }
  })(i)
}
let t;
t = setInterval(fn,2000);
let num=0;
function fn(){
  num++;
  if (num==bannerimg.length) {
    num=0;
  }
  bannerimg[now].style.zIndex = 1;
  bannerimg[num].style.zIndex = 5;
  now=num;
}
function fu(){
  num--;
  if (num==-1) {
    num=0;
  }
  bannerimg[now].style.zIndex = 1;
  bannerimg[num].style.zIndex = 5;
  now=num;
}
let bannerz=document.getElementsByClassName('bannerbox');
bannerz[0].onmouseover=function() {
  clearInterval(t);
}
bannerz[0].onmouseout=function() {
  t = setInterval(fn,2000);
}
zuo.onclick = function(){
  fu()
}
yuo.onclick = function(){
  fn()
}
console.log(zuo);
