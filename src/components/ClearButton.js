import Button from "./Button";
import clearState from "../utils/clearState"

export default class ClearButton extends Button {
  execute() {
    return clearState();
  }
}
