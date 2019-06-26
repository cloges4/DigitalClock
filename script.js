const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const digitalClock = () => {
  const currentDate = new Date();

  hour.textContent = currentDate.getHours();
  minute.textContent = currentDate.getMinutes();
  second.textContent = currentDate.getSeconds();
};

setInterval(digitalClock, 1000);

digitalClock();
