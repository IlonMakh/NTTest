import formView from "./views/formView";

export default class App {
  start() {
    const form = new formView();
    form.drawForm();
  }
}