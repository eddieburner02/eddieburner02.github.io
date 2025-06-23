const noBtn  = document.getElementById('no-button');
const yesBtn = document.getElementById('yes-button');

function moveButton() {
  const w = noBtn.offsetWidth;
  const h = noBtn.offsetHeight;
  const maxX = window.innerWidth  - w - 20;
  const maxY = window.innerHeight - h - 20;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.position = 'absolute';
  noBtn.style.left =  `${x}px`;
  noBtn.style.top  =  `${y}px`;
}

noBtn.addEventListener('click', moveButton);

yesBtn.addEventListener('click', () => {
  window.location.href = 'success.html';
});
