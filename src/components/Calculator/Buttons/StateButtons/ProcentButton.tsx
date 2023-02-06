import StateButton from "./StateButton";
import clearState from "../methods/clearState"
import {default as doMath, cutNumber} from "../methods/doMath";

export default class ProcentButton extends StateButton {
  execute() {
    const state = this.props.state;
    
    if (state.funcType) {
      try {
        const resultMath = doMath(state);
        resultMath.result = cutNumber(parseFloat(resultMath.result) / 100) + "";
        resultMath.number = resultMath.result;
        return resultMath;
      }
      catch (e: any) {
        return clearState(e.message);
      }
    }
    else {
      let resultNumber = cutNumber(parseFloat(state.number) / 100);
      return {
        result: resultNumber + "",
        number: resultNumber + "",
      };
    }
  }
}
