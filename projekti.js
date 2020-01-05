function Rmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("MEshume");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more>>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less<<"; 
    moreText.style.display = "inline";
  }
}
function Rrmore() {
  var dots = document.getElementById("dotss");
  var moreText = document.getElementById("moree");
  var btnText = document.getElementById("MEshumee");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more>>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less<<"; 
    moreText.style.display = "inline";
  }
}
function Rrrmore() {
  var dots = document.getElementById("dotsss");
  var moreText = document.getElementById("moreee");
  var btnText = document.getElementById("MEshumeee");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more>>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less<<"; 
    moreText.style.display = "inline";
  }
}
$(document).ready(function(){
               
               $("#p1").hover(function(){
                  alert("Keni kaluar mbi elementin p1"); 
               });
               $("input").focus(function(){
                  $(this).css("background-color", "#3FC"); 
               });
               $("input").blur(function(){
                  $(this).css("background-color", "#6f6"); 
               });
           });