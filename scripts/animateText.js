var h1 = document.getElementsByClassName("animate")[0];
var h3 = document.getElementsByClassName("animate")[1];

if (h1 != null) animate(h1);
if (h3 != null) animate(h3);

function animate(text) {
  const timeToAnimate = 1000;
  var string = text.textContent;
  var animateTime = timeToAnimate / string.length;
  text.textContent = ""; //First letter is only shown

  var index = -1;
  let timer = setInterval(function() {
    if (index < string.length - 1) {
      index++;
      text.textContent += string[index];
    }
    else {
      clearInterval(timer);
      timer = null;
    }
  }, animateTime)
}
