const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const digitalClock = () => {
  const currentDate = new Date();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  hour.textContent = currentDate.getHours();

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

//TODO  Fix clock box so that it does not change size based off number sizes
//TODO finish styling page to look Good
