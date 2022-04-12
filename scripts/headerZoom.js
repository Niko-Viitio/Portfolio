var header = document.getElementsByClassName("header")[0];

setInterval(function() {
  //Get y offset for zooming the background
  var offset = getYPosition();
  var sizeMult = 100 + offset / 20;
  if (sizeMult > 120) sizeMult = 120;

  //Get window width for scaling the background
  var windowWidth = window.innerWidth;
  var widthMult = (1920 / windowWidth) * 0.4;
  if (widthMult < 1) widthMult = 1;
  else if (widthMult > 1.5) widthMult = 1.5;

  //console.log("Width mult: " + widthMult);
  sizeMult *= widthMult;

  //Apply zoom multiplier to the background
  var sizeStr = sizeMult.toString() + "%";
  header.style.backgroundSize = sizeStr;
  //console.log("Screen width: " + windowWidth + " Size: " + sizeStr);
}, 10);

function getYPosition() {
  var top = window.pageYOffset || document.documentElement.scrollTop
  return top;
}
