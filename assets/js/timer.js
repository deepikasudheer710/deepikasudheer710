const countdown = () => {
    // Specify the date and time we are counting down to.
    const countDate = new Date("Dec 5, 2024 08:05:00").getTime();
    const now = new Date().getTime();
    const timeFrom = now - countDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const textdays = Math.floor(timeFrom / days);
    const texthours = Math.floor((timeFrom % days) / hours);
    const textminutes = Math.floor((timeFrom % hours) / minutes);
    const textseconds = Math.floor((timeFrom % minutes) / seconds);

    document.querySelector(".days").innerText = textdays;
    document.querySelector(".hours").innerText = texthours;
    document.querySelector(".minutes").innerText = textminutes;
    document.querySelector(".seconds").innerText = textseconds;
  };

  // should use 500 as setInterval won't always run on time.
  setInterval(countdown, 500);