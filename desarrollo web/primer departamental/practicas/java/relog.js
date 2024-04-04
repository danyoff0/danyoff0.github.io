const hora = document.querySelector(".hour");
const minuto = document.querySelector(".min");
const segundo = document.querySelector(".sec");

function getTime() {
  const time = new Date();

  const getHourRot = (360 / 12) * time.getHours();
  const getMinRot = (360 / 60) * time.getMinutes();
  const getSecRot = (360 / 60) * time.getSeconds();

  hora.style.transform = `rotate(${getHourRot}deg)`;
  minuto.style.transform = `rotate(${getMinRot}deg)`;
  segundo.style.transform = `rotate(${getSecRot}deg)`;
}

setInterval(() => {
  getTime();
}, 1000);

getTime();

const relogio = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let min = dateToday.getMinutes();
  let sec = dateToday.getSeconds();
  if (hr < 10) {
    hr = "0" + hr;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
    horas.textContent = hr;
    segundos.textContent = sec;
    minutos.textContent = min;
});

