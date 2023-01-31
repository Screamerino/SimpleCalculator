import Button from "./Button";
import doMath from "../utils/doMath";
import clearState from "../utils/clearState"

export default class FunctionButton extends Button {
  execute() {
    const buttonValue = this.props.buttonValue;
    let resultState = {};

    if (this.props.state.funcType) {
      try {
        resultState = doMath(this.props.state);
      } catch (e) {
        return clearState(e.message);
      }
    }
    resultState.funcType = buttonValue;
    return resultState;
  }
}
