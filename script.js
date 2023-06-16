let counter = 0;

window.addEventListener('wheel', (e) => {
  const deltaY = e.deltaY > 0;
  if (deltaY) {
    counter++;
  } else {
    counter--;
  }

  document.querySelector(`.section-${counter}`).style.left = `${deltaY ? '-100vw' : '0'}`;
});