const menu = document.getElementById("menu");
const LchBtn = document.getElementById("LchBtn");
const historiBtn = document.getElementById("historiBtn");
const content = document.getElementById("content");
const menuBtn = document.getElementById("menuBtn");
const LchInfov= document.getElementById("LchInfo")
var f = 0;

menuBtn.onclick = function () {
  menuBtn.style.display = "none";
  // menu.style.display = "flex";
  menu.style.width = "300px";
  menu.style.padding="20px 10px 0px 20px"
  f += 1;
};

content.onclick = function () {
  if (f === 2) {
    menuBtn.style.display = "block";
    // menu.style.display = "none";
    menu.style.width = "0px";
    menu.style.padding="0px"
    f=0;
  } else if(f===1){
    f += 1;
  }
};

LchBtn.onclick=function(){
  menuBtn.style.display = "block";
    // menu.style.display = "none";
    menu.style.width = "0px";
    menu.style.padding="0px"
    LchInfov.style.display="flex"
    f=0;
}

document.getElementById("LchExit").onclick=function(){
  LchInfov.style.display="none";
  f=0;
}

document.getElementById("L9").onclick=function(){
  document.getElementById("Zap1").style.display="flex"
}
document.getElementById("ZapRemuve").onclick=function(){
  document.getElementById("Zap1").style.display="none"
}
document.getElementById("ZapPodtverditi").onclick=function(){
  document.getElementById("Zap1").style.display="none"
}