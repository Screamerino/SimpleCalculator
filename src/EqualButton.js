
import Button from "./Button";
import clearState from "./clearState";
import doMath from "./doMath";

export default class EqualButton extends Button {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.className = "calculator__key--enter";
    this.buttonValue = "=";
  }

  execute() {
    try {
      const resultMath = doMath(this.props.state);
      return resultMath;
    }
    catch (e) {
      const state = clearState();
      state.result = e.message;
      return state;
    }
  }

  // render() {
  //   return (
  //     <Button
  //       buttonValue="="
  //       className="calculator__key--enter"
  //       onClick={this.props.onClick}
  //       execute={this.execute}
  //     />
  //   );
  // }
}
