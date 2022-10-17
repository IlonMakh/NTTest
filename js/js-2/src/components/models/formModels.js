import { routeProps } from "../constants";


export default class FormModels {

  changeCurrentRoute(value) {
    routeProps.currentRoute = value;
  }

  changeCurrentTime(value) {
    routeProps.currentTime = value;
  }

  changeTicketsAmount(value) {
    routeProps.ticketsAmount = value;
  }
}