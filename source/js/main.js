var more = document.querySelectorAll('#more');
var moreContainer = document.querySelectorAll('#more-container');

more.onclick = function () {
 if (moreContainer.className == "open") {
  moreContainer.className = "";
  more.innerHTML = "Show More";
 } else {
  moreContainer.className = "open";
  more.innerHTML = "Show Less";
 }
};