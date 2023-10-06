const container = document.getElementById('container');
const image = document.getElementById('cursor');

container.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    image.style.transform = `translate(${x}px, ${y}px)`;
});

function openWebsite(url) {
  window.open(url, "_blank");
}
