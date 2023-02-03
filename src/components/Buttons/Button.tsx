import React from "react";
import {ResultState} from "../../App"

export interface Props {
  buttonValue: string,
  onClick: (execute: () => ResultState) => void,
  className?: string
}

export type ExecutorFunc = () => ResultState;

export default abstract class Button extends React.Component {
  abstract execute(): ResultState;
  props!: Props;
  
  render() {
    return (
      <button
        className={
          "calculator__key" +
          (this.props.className ? " " + this.props.className : "")
        }
        type="button"
        onClick={() => this.props.onClick(() => this.execute())}
      >
        {this.props.buttonValue}
      </button>
    );
  }
}
