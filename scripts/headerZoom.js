var header = document.getElementsByClassName("header")[0];

setInterval(function() {
  var offset = getYPosition();
  var sizeMult = 100 + offset / 20;
  if (sizeMult > 120) sizeMult = 120;

  var sizeStr = sizeMult.toString() + "%";
  header.style.backgroundSize = sizeStr;
  console.log("Size: " + sizeStr);
}, 10);

function getYPosition() {
  var top = window.pageYOffset || document.documentElement.scrollTop
  return top;
}
