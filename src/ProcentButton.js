import React from "react";
import Button from "./Button";

export default class ProcentButton extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
  }

  execute() {
    let resultNumber = parseFloat(this.props.number) / 100;
    return {
      resultNumber: resultNumber,
      number: resultNumber + "",
    };
  }

  render() {
    return (
      <Button
        buttonValue="%"
        onClick={this.props.onClick}
        execute={this.execute}
      />
    );
  }
}
