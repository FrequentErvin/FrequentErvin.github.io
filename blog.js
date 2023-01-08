document.getElementById("intermediate").onclick=function(){
  location.href="/blogentries/discretecont.html";
};
document.getElementById("EV").onclick=function(){
  location.href="/blogentries/expectedvalue.html";
};
document.getElementById("reflectimo").onclick=function(){
  location.href="/blogentries/reflectonimo.html";
};
document.getElementById("hiooo").onclick=function(){
  location.href="/blogentries/fixedpoints.html";
}
//Get the button
let mybutton = document.getElementById("scroll");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


