import Button from "./Button";
import clearState from "./clearState";
import doMath from "./doMath";

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
