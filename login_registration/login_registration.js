const div1 = document.getElementById("login");
const div2 = document.getElementById("regist");
const btn = document.getElementById("buttonAssText");
btn.onclick = function () {
  div1.style.display = "none";
  div2.style.display = "block";
};