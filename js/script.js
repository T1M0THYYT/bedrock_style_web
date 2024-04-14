document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

//document.getElementById("buttons").addEventListener("click", function() {

const ore = {
	dialogImage: document.getElementById('dialogImage'),

	button_click: function() {
	  var audio = new Audio('sounds/button_click.ogg');
	  audio.play();
	},

	openUrl: function(url) {
	  open(url, "_blank");
	},

	dialog: function() {
	  dialogImage.style.display = 'block';
	},

	closeDialog: function() {
		dialogImage.style.display = "none";
	}
}