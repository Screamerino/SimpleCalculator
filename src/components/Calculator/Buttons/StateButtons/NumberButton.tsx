import StateButton from "./StateButton";

export default class NumberButton extends StateButton {
  execute() {
    let returnState = {};
    const num = this.props.buttonValue;
    const number = this.props.state.number;
    const otherNumber = this.props.state.otherNumber;
    const funcType = this.props.state.funcType;

    const totalExpr = number + (funcType || "") + (otherNumber || "");

    if (this.props.state.funcType === null) {
      if ((!number.includes(".") || num !== ".") && number.length < 8) {
        returnState = {
          number: num === '.' ? number + num : `${(number + num).replace(/^0?(?!\.)/, "")}`,
        };
      }
    } else {
      if (otherNumber === null) {
        returnState = {
          otherNumber: `${num}`,
        };
      } else if (
        (!otherNumber.includes(".") || num !== ".") &&
        totalExpr.length < 12
      ) {
        returnState = {
          otherNumber: `${(otherNumber + num).replace(/^0?(?!\.)/, "")}`,
        };
      }
    }
    return returnState;
  }
}
