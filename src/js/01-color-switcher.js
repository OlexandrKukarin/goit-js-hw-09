const elements = {
  colorBody: document.body,
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  timerId: null,
};

elements.btnStart.addEventListener('click', handleStart);
elements.btnStop.addEventListener('click', handleStop);

function handleStart(e) {
  elements.btnStart.disabled = true;
  elements.timerId = setInterval(() => {
    const color = getRandomHexColor();
    elements.colorBody.style.backgroundColor = `${color}`;
  }, 1000);
}

function handleStop(e) {
  clearInterval(elements.timerId);
  elements.btnStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
