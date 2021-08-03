const timer = (id, deadline) => {
  function getRemainingTime(endtime) {
    //gets the time and finds remaining then returns it in object form
    const t = Date.parse(deadline) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / (1000 * 60)) % 60),
      seconds = Math.floor((t / 1000) % 60);

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function addZero(n) {
    if (n < 10) {
      return `0${n}`;
    } else {
      return n;
    }
  }
  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      days = timer.querySelector("#days"),
      seconds = timer.querySelector("#seconds"),
      Interval = setInterval(updateClock, 1000);

    updateClock();

    //runs updateclock in every 1 seconds
    function updateClock() {
      const t = getRemainingTime(endtime);
      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);
      //calls getTimeRemaining then sets time by innerHTML

      if (t.total <= 0) {
        clearInterval(Interval);
      }
    }
  }
  getRemainingTime(deadline);
  setClock(id, deadline);
};

export default timer;
