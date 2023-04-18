let menu = document.querySelector(".menuIcon");
let arrow = document.querySelector(".arrowDown");
let watch = document.querySelector(".watch");
let body = document.getElementsByTagName("body")[0];
menu.addEventListener("click", function () {
  document.querySelector(".header-menu").classList.toggle("appear");
  document.querySelector(".serie").classList.toggle("out");
  document.querySelector(".watch").classList.toggle("out");
});
arrow.addEventListener("click", function () {
  body.style.cssText = "overflow:auto";
});
watch.addEventListener("click", function () {
  body.style.cssText = "overflow:auto";
});
