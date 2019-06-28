const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const am = document.getElementById("am");
const pm = document.getElementById("pm");

const amPm = () => {
  if (new Date().getHours() > 11) {
    pm.classList.remove("hide");
    am.classList.add("hide");
  } else {
    am.classList.remove("hide");
    pm.classList.add("hide");
  }
};

const digitalClock = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinute = currentDate.getMinutes();
  const currentSecond = currentDate.getSeconds();

  //converts time to 12 hour format
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

  amPm();
};

setInterval(digitalClock, 1000);

digitalClock();
