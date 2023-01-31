import Button from "./Button";
import doMath from "./doMath";
import clearState from "./clearState";

export default class FunctionButton extends Button {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.operator = this.props.buttonValue;
    this.buttonValue = this.props.buttonValue;
    this.className = "calculator__key--operator";
  }

  execute() {
    let resultState = {};
    if (this.props.state.funcType) {
      try {
        resultState = doMath(this.props.state);
      } catch (e) {
        const state = clearState();
        state.result = e.message;
        return state;
      }
    }
    resultState.funcType = this.buttonValue;
    return resultState;
  }
}
