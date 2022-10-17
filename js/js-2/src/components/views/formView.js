import { ABTime, BATime, routeProps, routes } from "../constants";
import { dateConvert } from "../utils";

export default class FormView {
  constructor(control) {
    this.controllers = control;
    this.currentRouteCheck = () => {
      if (routeProps.currentRoute === "BA") {
        return BATime.map((time) => {
          return `<option ${dateConvert(time) === routeProps.currentTime ? 'selected' : ''} value=${time}>${dateConvert(time)}</option>`;
        }).join("");
      } else {
        return ABTime.map((time) => {
          return `<option ${dateConvert(time) === routeProps.currentTime ? 'selected' : ''} value=${time}>${dateConvert(time)}</option>`;
        }).join("");
      }
    };

    this.currentTimeCheck = () => {
      const timeAB = document.querySelector("#time__select").value;
      const borderTime = +timeAB + routeProps.duration * 60000;
      return BATime.map((time) => {
        if (time - borderTime > 0) {
          return `<option value=${time}>${dateConvert(time)}</option>`;
        }
      }).join("");
    };

    this.selectCheck = (route) =>
      route === routeProps.currentRoute ? "selected" : "";
    this.selectRoutes = () => {
      return routes
        .map((route) => {
          if (route === "AB") {
            return `<option ${this.selectCheck(route)} value=${route}>из A в Б</option>`;
          }
          if (route === "BA") {
            return `<option ${this.selectCheck(route)}  value=${route}>из Б в А</option>`;
          }
          if (route === "ABA") {
            return `<option ${this.selectCheck(route)}  value=${route}>из А в Б и обратно в А</option>`;
          }
        })
        .join("");
    };
  }

  drawForm() {
    const formHTML = `
      <div class="routes">
        <label for="routes__select">Выберите маршрут</label>
        <select name="routes" id="routes__select">
          ${this.selectRoutes()}
          </select>
      </div>
      <div class="time">
        <label for="time__select">Выберите время отправления</label>
        <select name="time" id="time__select">
          ${this.currentRouteCheck()}
        </select>
      </div>
      <div class="tickets">
        <label for="tickets__amount">Количество билетов</label>
        <input value=${routeProps.ticketsAmount} placeholder="Выберите количество билетов" id="tickets__amount" type="number" min="1">
      </div>
      <button class="results-btn">Посчитать</button>
    `;

    document.querySelector(".form").innerHTML = formHTML;
    this.drawBackTime();
    this.controllers.listenAll();
  }

  drawBackTime() {
    let backTimeHTML = '';
    if (routeProps.currentRoute === "ABA") {
      backTimeHTML = `
      <div class="time">
        <label for="time__select">Выберите время отправления обратно</label>
        <select name="time" id="time__select">
          ${this.currentTimeCheck()}
        </select>
      </div>
    `;
    } else {
      backTimeHTML = ``;
    }

    document
      .querySelector(".time")
      .insertAdjacentHTML("afterend", backTimeHTML);
  }
}
