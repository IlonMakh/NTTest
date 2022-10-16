import TripsControllers from "./controllers/tripsControllers";
import TripsView from "./views/tripsView";

export default class App {

  start(){
    const trips = new TripsView();
    const controllers = new TripsControllers();
    trips.drawTrips();
    controllers.listenMoreBtn();
  }
}