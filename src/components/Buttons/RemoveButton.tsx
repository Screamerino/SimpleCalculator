import Button from "./Button";
import StateButton from "./StateButton";

export default class RemoveButton extends StateButton {
  execute() {
    let returnState;
    
    if (this.props.state.otherNumber) {
      let otherNumber = this.props.state.otherNumber;
      returnState = {
        otherNumber: otherNumber.slice(0, otherNumber.length - 1),
      };
    } else if (this.props.state.funcType) {
      returnState = {
        funcType: null,
      };
    } else {
      let number = this.props.state.number;
      returnState = {
        number: number.slice(0, number.length - 1) || "0",
      };
    }
    return returnState;
  }
}
