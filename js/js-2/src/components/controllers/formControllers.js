import FormModels from "../models/formModels"
import { dateConvert } from "../utils";
import FormView from "../views/formView";
import ResultsView from "../views/resultsView";

export default class FormControllers {
  constructor() {
    this.formModel = new FormModels();
    this.formView = new FormView(this);
    this.results = new ResultsView();
  }

  listenAll() {
    this.listenRouteChange();
    this.listenTimeChange();
    this.listenTicketsChange();
    this.listenResultBtn();
  }

  listenRouteChange() {
    const route = document.querySelector('#routes__select');
    route.addEventListener('change', () => {
      this.formModel.changeCurrentRoute(route.value);
      this.formView.drawForm();
    })
  }

  listenTimeChange() {
    const time = document.querySelector('#time__select');
    time.addEventListener('change', () => {
      this.formModel.changeCurrentTime(dateConvert(time.value));
      this.formView.drawForm();
    })
  }

  listenTicketsChange() {
    const tickets = document.querySelector('#tickets__amount');
    tickets.addEventListener('change', () => {
      this.formModel.changeTicketsAmount(tickets.value);
    })
  }

  listenResultBtn() {
    const resultBtn = document.querySelector('.results-btn');
    resultBtn.addEventListener('click', (event) => {
      event.preventDefault();
      this.results.drawResults();
    })
  }
}