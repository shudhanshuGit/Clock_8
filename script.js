const hourEl = document.querySelector(".hour");
const minEl = document.querySelector(".min");
const secEl = document.querySelector(".sec");

function updateClock() {
  const currDate = new Date();

  const h = currDate.getHours();
  const m = currDate.getMinutes();
  const s = currDate.getSeconds();

  const hDeg = (h % 12) * 30 + m * 0.5;
  const mDeg = (m / 60) * 360;
  const sDeg = (s / 60) * 360;

  hourEl.style.transform = `rotate(${hDeg}deg)`;
  minEl.style.transform = `rotate(${mDeg}deg)`;
  secEl.style.transform = `rotate(${sDeg}deg)`;
}

updateClock();
setInterval(updateClock, 1000);
