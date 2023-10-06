document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.getElementById("button").addEventListener("click", function() {
  var audio = new Audio('/sounds/button_click.wav');
  audio.play();
});

function openWebsite(url) {
  window.open(url, "_blank");
}
