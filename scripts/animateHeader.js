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

//Check if screen is small like in mobile
function checkScreenSize(x) {
  if (x.matches) {
    //Screen is small, header under image
    img.style.float = "none";
    img.style.margin = "0";
    headerContent.style.padding = "4% 0 16% 0";
    headerContent.style.textAlign = "center";
  }
  else {
    //Screen is big enough for horizontal header
    img.style.float = "left";
    img.style.margin = "0 50px 0 0";
    headerContent.style.padding = "8% 0";
    headerContent.style.textAlign = "left";
  }
}

//Get window width and check it when it changes
var x = window.matchMedia("(max-width: 800px)");
checkScreenSize(x);
x.addListener(checkScreenSize);

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
    if (opacity >= 0.85) {
      //Increase width
      width += increase;

      //Compeleted
      if (width >= targetWidth) {
        width = targetWidth;
        clearInterval(timer);
        timer = null;
      }

      //Apply width so it scales
      headerContent.style.width = width.toString() + "px";

      //When completed, add width to 100%
      if (timer == null)
        headerContent.style.width = "100%";
    }
  }, tick)
}
