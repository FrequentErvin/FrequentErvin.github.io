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

//Blob things: 

var rotation = 0;
function create() {
  var b = document.querySelector('#blob');
  var r1 = 30
  var r2 = 50
  var r3 = 60
  var r4 = 30
  var r11 = remain(r1);
  var r22 = remain(r2);
  var r33 = remain(r3);
  var r44 = remain(r4);
  var coordinates = `${r1}% ${r11}% ${r22}% ${r2}% / ${r3}% ${r4}% ${r44}% ${r33}%`;
  b.style['border-radius'] = coordinates;
  b.style['transform'] = 'rotate(' + rotation + 'deg)';
  image.style.setProperty('--r', -rotation + 'deg');
};
function remain(n) {
  return 100 - n;
}
function create2() {
  var b = document.querySelector('#blob2');
  var r1 = 70
  var r2 = 70
  var r3 = 50
  var r4 = 60
  var r11 = remain(r1);
  var r22 = remain(r2);
  var r33 = remain(r3);
  var r44 = remain(r4);
  var coordinates = `${r1}% ${r11}% ${r22}% ${r2}% / ${r3}% ${r4}% ${r44}% ${r33}%`;
  b.style['border-radius'] = coordinates;
  b.style['transform'] = 'rotate(' + rotation + 'deg)';
  image.style.setProperty('--r', -rotation + 'deg');
};
function remain(n) {
  return 100 - n;
}
create();
create2();