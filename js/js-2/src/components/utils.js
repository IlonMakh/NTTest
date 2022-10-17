export const dateConvert = (time) => {
  const hours =
    new Date(+time).getHours().toString().length < 2
      ? 0 + new Date(+time).getHours().toString()
      : new Date(+time).getHours().toString();
  const minutes =
    new Date(+time).getMinutes().toString().length < 2
      ? 0 + new Date(+time).getMinutes().toString()
      : new Date(+time).getMinutes().toString();
  const fullTime = `${hours}:${minutes}`;
  return fullTime;
};

export const convertDuration = (duration) => {
  let hoursText;
  let minutesText;
  if(duration > 60) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;

    if (hours > 10 && hours < 20) {
      hoursText = `${hours} часов`;
    } else if (+hours[hours.length-1] > 1 && +hours[hours.length-1] < 5) {
      hoursText = `${hourse} часа`;
    } else if (hours === 1 || +hours[hours.length-1] === 1) {
      hoursText = `${hours} час`;
    } else {
      hoursText = `${hours} часов`;
    }

    if (minutes > 10 && minutes < 20) {
      minutesText = `${minutes} минут`;
    } else if (+minutes[minutes.length-1] > 1 && +minutes[minutes.length-1] < 5) {
      minutesText = `${hourse} минуты`;
    } else if (minutes === 1 || +minutes[minutes.length-1] === 1) {
      minutesText = `${minutes} минута`;
    } else {
      minutesText = `${minutes} минут`;
    }

    return `${hoursText} ${minutesText}`;
  } else {
    return `${duration} минут`;
  }

}
