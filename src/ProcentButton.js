import Button from "./Button";
import clearState from "./clearState";
import {default as doMath, cutNumber} from "./doMath";

export default class ProcentButton extends Button {
  execute() {
    const state = this.props.state;
    
    if (state.funcType) {
      try {
        const resultMath = doMath(state);
        resultMath.result = cutNumber(parseFloat(resultMath.result) / 100);
        resultMath.number = resultMath.result;
        return resultMath;
      }
      catch (e) {
        return clearState(e.message);
      }
    }
    else {
      let resultNumber = cutNumber(parseFloat(state.number) / 100);
      return {
        result: resultNumber,
        number: resultNumber + "",
      };
    }
  }
}
