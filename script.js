const container = document.getElementById('container');
const cursor = document.getElementById('cursor');

container.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
});

function openWebsite(url) {
  window.open(url, "_blank");
}
