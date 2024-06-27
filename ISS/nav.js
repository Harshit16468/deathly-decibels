const nav = document.querySelector("nav");
const li = nav.querySelectorAll("li");

li[0].addEventListener("mouseover", function() {
  this.style.backgroundColor = "gray";
});

li[0].addEventListener("mouseout", function() {
  this.style.backgroundColor = "black";

});


li[1].addEventListener("mouseover", function() {
  this.style.backgroundColor = "gray";
});

li[1].addEventListener("mouseout", function() {
  this.style.backgroundColor = "black";

});
li[2].addEventListener("mouseover", function() {
  this.style.backgroundColor = "gray";

});

li[2].addEventListener("mouseout", function() {
  this.style.backgroundColor = "black";

});
li[3].addEventListener("mouseover", function() {
  this.style.backgroundColor = "gray";

});

li[3].addEventListener("mouseout", function() {
  this.style.backgroundColor = "black";

});
li[4].addEventListener("mouseover", function() {
  this.style.backgroundColor = "gray";

});

li[4].addEventListener("mouseout", function() {
  this.style.backgroundColor = "black";

});
var i = 0;
var txt = 'Deathly Decibels'; /* The text */
var speed = 100; /* The speed/duration of the effect in milliseconds */
const text=document.getElementsByClassName("typing")[0];
const image=text.getElementsByClassName("div3")[0];

var timeoutId;

function typeWriter() {
  if (i < txt.length) {
    text.getElementsByClassName("glow")[0].innerHTML += txt.charAt(i);
    i++;
    timeoutId = setTimeout(typeWriter, speed);
  }
}

function typeWriter1() {
  if (i > 0) {
    text.getElementsByClassName("glow")[0].innerHTML = txt.substring(0, i - 1);
    i--;
    setTimeout(typeWriter1, speed);
  } else {
    text.getElementsByClassName("glow")[0].innerHTML = ""; // remove text when i = 0
  }
}


image.addEventListener("mouseover", typeWriter);
image.addEventListener("mouseout", function() {
  clearTimeout(timeoutId);
  typeWriter1();
});



