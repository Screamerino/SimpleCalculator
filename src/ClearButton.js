import Button from "./Button";
import clearState from "./clearState";

export default class ClearButton extends Button {
  execute() {
    return clearState();
  }
}
