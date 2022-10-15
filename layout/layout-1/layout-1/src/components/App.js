import TripsView from "./views/tripsView";

export default class App {

  start(){
    const trips = new TripsView();
    trips.drawTrips();
  }
}