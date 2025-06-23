const noBtn  = document.getElementById('no-button');
const yesBtn = document.getElementById('yes-button');

function moveButton() {
  const btnWidth  = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const vw = document.documentElement.clientWidth;
  const vh = document.documentElement.clientHeight;

  const x = Math.random() * (vw - btnWidth  - 20) + 10;
  const y = Math.random() * (vh - btnHeight - 20) + 10;

  noBtn.style.position = 'fixed';
  noBtn.style.left     = `${x}px`;
  noBtn.style.top      = `${y}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click',      moveButton);

yesBtn.addEventListener('click', () => {
  window.location.href = 'flower.html';
});
