//Header texts
var h1 = document.getElementsByClassName("animate")[0];
var h3 = document.getElementsByClassName("animate")[1];

//Image on header
var header = document.getElementsByClassName("header")[0];
var img = header.getElementsByTagName("img")[0];
img.style.float = "none";
img.style.opacity = "0";
var opacity = 0;

//Header content for width
var headerContent = document.getElementsByClassName("header-content")[0];
var targetWidth = headerContent.offsetWidth;
headerContent.style.textAlign = "center";
headerContent.style.width = "200px";
var width = 200;

//Fist fade icon in
animateIcon();

//Then start scaling content
scaleContent();

//Start animating text
animateText(h1);
animateText(h3);

//Animates icon by fading it in
function animateIcon() {
  const timeToAnimate = 750;
  const increase = 1 * 10 / timeToAnimate;

  let timer = setInterval(function() {
    opacity += increase;

    //Compeleted fading
    if (opacity >= 1){
      opacity = 1;

      clearInterval(timer);
      timer = null;
    }

    img.style.opacity = opacity;
  }, 10)
}

//Animates text by inserting characters to it
function animateText(text) {
  const timeToAnimate = 750;
  var string = text.textContent;
  var animateTime = timeToAnimate / string.length;
  text.textContent = ""; //First letter is only shown

  var index = -1;
  let timer = setInterval(function() {
    if (opacity == 1) {
      if (index < string.length - 1) {
        index++;
        text.textContent += string[index];
      }
      else {
        clearInterval(timer);
        timer = null;
      }
    }
  }, animateTime)
}

//Scales width of the header content
function scaleContent() {
  const tick = 10;
  const timeToAnimate = 750;
  var difference = targetWidth - width;
  var increase = difference / timeToAnimate * tick;

  let timer = setInterval(function() {
    if (opacity >= 0.9) {
      //Increase width
      width += increase;

      if (width >= targetWidth) {
        width = targetWidth;
        clearInterval(timer);
        timer = null;
      }

      headerContent.style.width = width.toString() + "px";

      //Set float & text align
      img.style.float = "left";
      headerContent.style.textAlign = "left";
    }
  }, tick)
}
