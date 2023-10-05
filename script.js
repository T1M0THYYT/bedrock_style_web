document.getElementById("buttons").addEventListener("click", function() {
//  window.open("https://example.com");
  var audio = new Audio('sounds/button_click.wav');
  audio.play();
});
function openWebsite(url) {
  window.open(url, "_blank");
}
