// import React from "react";
import Button from "./Button";
import clearState from "./clearState";

export default class ClearButton extends Button {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.buttonValue = "AC";
  }

  execute() {
    return clearState();
  }

  // render() {
  //   return (
  //     <Button
  //       buttonValue="AC"
  //       onClick={this.props.onClick}
  //       execute={this.execute}
  //     />
  //   );
  // }
}
