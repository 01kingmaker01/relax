var container = document.querySelector(".container");
var text = document.querySelector("#text");

var totalTime = 7500;
var breathe = (totalTime / 5) * 2;
var hold = totalTime / 5;

breatheAnimation();

function breatheAnimation() {
  text.innerHTML = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Hold!";

    setTimeout(() => {
      text.innerHTML = "Breathe Out!";
      container.className = "container shrink";
    }, hold);
  }, breathe);
}
setInterval(breatheAnimation, totalTime);
