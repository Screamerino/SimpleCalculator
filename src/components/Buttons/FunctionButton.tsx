import doMath from "./methods/doMath";
import clearState from "./methods/clearState"
import StateButton from "./StateButton";
import { ResultState } from "../../App";

export default class FunctionButton extends StateButton {
  execute() {
    const buttonValue = this.props.buttonValue;
    let resultState: ResultState = {};
    

    if (this.props.state.funcType) {
      try {
        resultState = doMath(this.props.state);
      } catch (e: any) {
        return clearState(e.message);
      }
    }
    resultState.funcType = buttonValue;
    return resultState;
  }
}
