const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
const elementRef = document.body;
let interval = null;

buttonStartRef.addEventListener("click", startChange);
buttonStopRef.addEventListener("click", stopChange);

const randomIntegerFromInterval = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

function changeColor() {
  const bgrColor = colors[randomIntegerFromInterval(colors.length - 1)];
  elementRef.style.backgroundColor = bgrColor;
  localStorage.setItem(`Background-Color`, `${bgrColor}`);
}

function startChange() {
  interval = setInterval(changeColor, 1000);
  buttonStartRef.disabled = true;
}

function stopChange() {
  clearInterval(interval);
  buttonStartRef.disabled = false;
}

const bgrColorSaved = document.getElementsByTagName('body');
if (bgrColorSaved) {
  elementRef.style.backgroundColor = localStorage.getItem(`Background-Color`);
}
