import { routeProps } from "../constants";
import { convertDuration, dateConvert } from "../utils";

export default class ResultsView {
  constructor() {
    this.routeText = (route) => {
      let text;
      switch (route) {
        case "AB":
          text = "из А в В";
          break;

        case "BA":
          text = "из B в A";
          break;

        case "ABA":
          text = "из A в B и обратно в A";
          break;

        default:
          break;
      }
      return text;
    };

    this.tickets = (tickets) => {
      if (tickets > 10 && tickets < 20) {
        return `${tickets} билетов`;
      } else if (
        +tickets[tickets.length - 1] > 1 &&
        +tickets[tickets.length - 1] < 5
      ) {
        return `${tickets} билета`;
      } else if (tickets === 1 || +tickets[tickets.length - 1] === 1) {
        return `${tickets} билет`;
      } else {
        return `${tickets} билетов`;
      }
    };

    this.price = () => {
      let commonPrice;
      if (routeProps.currentRoute === "ABA") {
        commonPrice = routeProps.twoDirectionPrice * routeProps.ticketsAmount;
      } else {
        commonPrice = routeProps.oneDirectionPrice * routeProps.ticketsAmount;
      }
      return commonPrice;
    };

    this.duration = () => {
      let commonDuration = routeProps.duration;
      if (routeProps.currentRoute === "ABA") {
        commonDuration = routeProps.duration * 2;
      }
      return convertDuration(commonDuration);
    };

    this.arriving = () => {
      const time = document.querySelector("#time__select").value;
      const arrivingTime = +time + routeProps.duration * 60000;
      if (routeProps.currentRoute === "ABA") {
        const timeBack = document.querySelector("#time-back__select").value;
        const arrivingBackTime = +timeBack + routeProps.duration * 60000;
        return `Из пункта A теплоход отправляется в ${dateConvert(
          time
        )} и прибывает в пункт В в ${dateConvert(
          arrivingTime
        )}. На обратном пути из пункта B теплоход отправляется в ${dateConvert(
          timeBack
        )} и прибывает в пункт A в ${dateConvert(arrivingBackTime)}.`;
      } else {
        return `Теплоход отправляется в ${dateConvert(
          time
        )} и прибывает в пункт назначения в ${dateConvert(arrivingTime)}.`;
      }
    };
  }

  drawResults() {
    const resultsHTML = `
    <div class="results">
      <p class="results__routes">Вы хотите приобрести ${this.tickets(
        routeProps.ticketsAmount
      )} по маршруту ${this.routeText(
      routeProps.currentRoute
    )} на общую стоимость ${this.price()}р.</p>
      <p class="results__duration">Путешествие займет ${this.duration()}.</p>
      <p class="results__arriving">${this.arriving()}</p>
    </div>
    `;
    document.querySelector(".form").insertAdjacentHTML("afterend", resultsHTML);
  }
}
