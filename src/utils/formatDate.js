const formatTime = time => {
  const minutesInhour = 60;
  const minutesInDay = 60 * 24;
  if (time < minutesInhour) {
    return `${time} minutes`;
  } else if (time > minutesInhour && time < minutesInDay) {
    const minutesLeft =
      time % minutesInhour ? `${time % minutesInhour} minutes` : "";

    return `${Math.floor(time / minutesInhour)} hours ${minutesLeft} `;
  } else if (time > minutesInDay) {
    return `1 day ${(time - minutesInDay) / minutesInhour}`;
  } else {
    return `${time / minutesInhour} hour`;
  }
};

export default formatTime;
