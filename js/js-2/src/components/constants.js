export const routes = ["AB", "BA", "ABA"];
export const ABTime = [
  Date.parse("2022-10-21 18:00:00"),
  Date.parse("2022-10-21 18:30:00"),
  Date.parse("2022-10-21 18:45:00"),
  Date.parse("2022-10-21 19:00:00"),
  Date.parse("2022-10-21 19:15:00"),
  Date.parse("2022-10-21 21:00:00"),
];
export const BATime = [
  Date.parse("2022-10-21 18:30:00"),
  Date.parse("2022-10-21 18:45:00"),
  Date.parse("2022-10-21 19:00:00"),
  Date.parse("2022-10-21 19:15:00"),
  Date.parse("2022-10-21 19:35:00"),
  Date.parse("2022-10-21 21:50:00"),
  Date.parse("2022-10-21 21:55:00"),
];
export const routeProps = {
  currentRoute: "AB",
  currentTime: "18:00",
  duration: 50,
  ticketsAmount: 1,
  oneDirectionPrice: 700,
  twoDirectionPrice: 1200,
}
