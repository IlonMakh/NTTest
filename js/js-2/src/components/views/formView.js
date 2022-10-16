export default class formView {
  constructor() {
    this.ABtime = [
      Date.parse("2022-10-21 18:00:00"),
      Date.parse("2022-10-21 18:30:00"),
      Date.parse("2022-10-21 18:45:00"),
      Date.parse("2022-10-21 19:00:00"),
      Date.parse("2022-10-21 19:15:00"),
      Date.parse("2022-10-21 21:00:00"),
    ];
    this.BAtime = [
      Date.parse("2022-10-21 18:30:00"),
      Date.parse("2022-10-21 18:45:00"),
      Date.parse("2022-10-21 19:00:00"),
      Date.parse("2022-10-21 19:15:00"),
      Date.parse("2022-10-21 19:35:00"),
      Date.parse("2022-10-21 21:50:00"),
      Date.parse("2022-10-21 21:55:00"),
    ];
    this.routeDuration = 50;
    this.currentRouteValue = "ABA";
    this.currentRouteCheck = () => {
      if (this.currentRouteValue === "BA") {
        return this.BAtime.map((time) => {
          const hours =
            new Date(time).getHours().toString().length < 2
              ? 0 + new Date(time).getHours().toString()
              : new Date(time).getHours().toString();
          const minutes =
            new Date(time).getMinutes().toString().length < 2
              ? 0 + new Date(time).getMinutes().toString()
              : new Date(time).getMinutes().toString();
          const fullTime = `${hours}:${minutes}`;
          return `<option value=${time}>${fullTime}</option>`;
        }).join("");
      } else {
        return this.ABtime.map((time) => {
          const hours =
            new Date(time).getHours().toString().length < 2
              ? 0 + new Date(time).getHours().toString()
              : new Date(time).getHours().toString();
          const minutes =
            new Date(time).getMinutes().toString().length < 2
              ? 0 + new Date(time).getMinutes().toString()
              : new Date(time).getMinutes().toString();
          const fullTime = `${hours}:${minutes}`;
          return `<option value=${time}>${fullTime}</option>`;
        }).join("");
      }
    };

    this.currentTimeCheck = () => {
      const timeAB = document.querySelector("#time__select").value;
      const borderTime = +timeAB + this.routeDuration * 60000;
      return this.BAtime.map((time) => {
        if (time - borderTime > 0) {
          const hours =
            new Date(time).getHours().toString().length < 2
              ? 0 + new Date(time).getHours().toString()
              : new Date(time).getHours().toString();
          const minutes =
            new Date(time).getMinutes().toString().length < 2
              ? 0 + new Date(time).getMinutes().toString()
              : new Date(time).getMinutes().toString();
          const fullTime = `${hours}:${minutes}`;
          return `<option value=${time}>${fullTime}</option>`;
        }
      }).join("");
    };
  }

  drawForm() {
    const formHTML = `
      <div class="routes">
        <label for="routes__select">Выберите маршрут</label>
        <select name="routes" id="routes__select">
          <option value="AB">из A в Б</option>
          <option value="BA">из Б в A</option>
          <option value="ABA">из A в Б и обратно в А</option>
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
        <input id="tickets__amount" type="number" min="1">
      </div>
      <button class="results-btn">Посчитать</button>
    `;

    document.querySelector(".form").insertAdjacentHTML("afterbegin", formHTML);
  }

  drawBackTime() {
    const backTimeHTML = `
      <div class="time">
        <label for="time__select">Выберите время отправления обратно</label>
        <select name="time" id="time__select">
          ${this.currentTimeCheck()}
        </select>
      </div>
    `;

    document
      .querySelector(".time")
      .insertAdjacentHTML("afterend", backTimeHTML);
  }
}
