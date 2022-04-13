var barFill = document.getElementsByClassName("bar-fill")[0];
var barBackground = document.getElementsByClassName("bar-background")[0];
var tick = 10;
var maxTime = 5;
var time = 0;

setInterval(updateBar, tick);

function updateBar() {
  time += tick / 1000;
  if (time >= maxTime) time = 0;

  var fill = time / maxTime;
  var unFill = 1 - fill;
  barFill.style.width = (fill * 100).toString() + "%";
  barBackground.style.width = (unFill * 100).toString() + "%";
}
