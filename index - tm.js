let cdhhz=document.getElementById('aside');
let cdh=cdhhz.getElementsByTagName('li');
let yccdh=document.getElementsByClassName('yccdh');
for (let i = 0; i < cdh.length; i++) {
  cdh[i].onmouseover = function () {
    yccdh[i].style.display = 'block';
  }
  yccdh[i].onmouseover = function () {
    yccdh[i].style.display = 'block';
  }
  cdh[i].onmouseout = function () {
    yccdh[i].style.display = 'none';
  }
  yccdh[i].onmouseout = function () {
    yccdh[i].style.display = 'none';
  }
}
let banner=document.getElementsByClassName('bannerimg');
let bannerimg=banner[0].getElementsByTagName('li');
let banner1=document.getElementsByClassName('banneryq');
let banneryq=banner1[0].getElementsByTagName('li');
let now = 0;
for (let i = 0; i < bannerimg.length; i++) {
  banneryq[i].index = i;
  banneryq[i].onclick = (function (i) {
    return function(){
      bannerimg[now].style.zIndex = 1;
      bannerimg[i].style.zIndex = i+2;
      now=i;
    }
  })(i)
}
let t
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
let bannerz=document.getElementsByClassName('bannerjuzhong');
bannerz[0].onmouseover=function() {
  clearInterval(t);
}
bannerz[0].onmouseout=function() {
  t = setInterval(fn,2000);
}
