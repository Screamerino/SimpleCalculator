import Button from "./Button";
import clearState from "../utils/clearState"
import doMath from "../utils/doMath";

export default class EqualButton extends Button {
  execute() {
    try {
      const resultMath = doMath(this.props.state);
      return resultMath;
    } catch (e) {
      return clearState(e.message);
    }
  }
}
