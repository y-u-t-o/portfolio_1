const btn = document.querySelector('.menu-button');
const nav = document.querySelector('nav');
const border1 = document.querySelector('.border1');
const border2 = document.querySelector('.border2');
const border3 = document.querySelector('.border3');
const list = document.querySelector('.link');

btn.addEventListener('click', function () {
  nav.classList.toggle('open-menu');
  nav.removeClass('open-menu');
  border1.classList.toggle('open1');
  border2.classList.toggle('open2');
  border3.classList.toggle('open3');
});

if (!("scrollBehavior" in document.documentElement.style)) {
  import("scroll-behavior-polyfill");
}