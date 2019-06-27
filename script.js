const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const digitalClock = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  if (currentHour > 12) {
    hour.textContent = currentHour - 12;
  } else {
    hour.textContent = currentHour;
  }

  // add a leading zero to minute of single digit
  if (currentMinute < 10) {
    minute.textContent = "0" + currentMinute;
  } else {
    minute.textContent = currentMinute;
  }

  // add a leading zero to second of single digit
  if (currentSecond < 10) {
    second.textContent = "0" + currentSecond;
  } else {
    second.textContent = currentSecond;
  }
};

setInterval(digitalClock, 1000);

digitalClock();

// TODO toggle am and pm
