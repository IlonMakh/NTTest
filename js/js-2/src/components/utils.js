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
