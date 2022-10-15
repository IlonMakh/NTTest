import { trips } from "../data";

export default class TripsView {
  constructor() {
    this.labelCheck = (trip) => {
      return !trip.label ? "" : trip.label === "Новинка" ? "new" : "all-season";
    };

    this.timeCheck = (trip) => {
      if (trip.time.length > 4) {
        const times = trip.time.map((time, index) => {
          return index > 2
            ? `<button class='time__btn hidden'>${time}</button>`
            : `<button class='time__btn'>${time}</button>`;
        });
        times.splice(3, 0, `<button class='more__btn'>eщё...</button>`);
        return times.join("");
      } else {
        return trip.time
          .map((time) => {
            return `<button class='time__btn'>${time}</button>`;
          })
          .join("");
      }
    };

    this.tripCardHTML = (trip) => {
      return `
        <div class='trips__card'>
          <div class='trips__card-img ${this.labelCheck(trip)}'>
            <img src=${trip.img} alt='trip-img'>
          </div>
          <div class='trips__card-info'>
            <div class='card-info__duration'>
              ${
                trip.duration === 1
                  ? `${trip.duration} час`
                  : trip.duration >= 2 && trip.duration < 5
                  ? `${trip.duration} часа`
                  : `${trip.duration} часов`
              }
            </div>
            <h3 class='card-info__title'>${trip.title}</h3>
            <div class='card-info__details'>
              ${trip.details
                .map((detail) => {
                  return detail === "Ближайший рейс сегодня"
                    ? `<div class='details__item-time'>${detail} <div class='today-time'>${this.timeCheck(
                        trip
                      )}</div></div>`
                    : `<div class='details__item'>${detail}</div>`;
                })
                .join("")}
            </div>
            <div class='card-info__about'>
                <div class='about__price'>${trip.price}&#8381;</div>
                <button class='about__btn'>Подробнее</button>
            </div>
          </div>
        </div>
      `;
    };
  }

  drawTrips() {
    const tripsHTML = () => {
      return `${trips.map((trip) => this.tripCardHTML(trip)).join("")}`;
    };
    document
      .querySelector(".trips")
      .insertAdjacentHTML("afterbegin", tripsHTML());
  }
}
