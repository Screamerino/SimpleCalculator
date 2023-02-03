import clearState from "./methods/clearState"
import doMath from "./methods/doMath";
import StateButton from "./StateButton";

export default class EqualButton extends StateButton {  
  execute() {
    try {
      const resultMath = doMath(this.props.state);
      return resultMath;
    } catch (e: any) {
      return clearState(e.message);
    }
  }
}
