var rotation = 0;
function createy() {
  var b = document.querySelector('#bloby');
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
createy()