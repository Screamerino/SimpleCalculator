import Button from "./Button";
import clearState from "./methods/clearState"

export default class ClearButton extends Button {
  execute() {
    return clearState();
  }
}
