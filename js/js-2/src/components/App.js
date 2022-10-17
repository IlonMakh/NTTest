import FormControllers from "./controllers/formControllers";
import FormView from "./views/formView";

export default class App {
  constructor() {
    this.controllers = new FormControllers();
    this.form = new FormView(this.controllers);
  }
  start() {
    this.form.drawForm();
  }
}