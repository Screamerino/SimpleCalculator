import React from "react";
import { ResultState } from "../../types/state.type"; 

export interface Props {
  buttonValue: string,
  onClick: (execute: () => ResultState) => void,
  className?: string
}

export type ExecutorFunc = () => ResultState;

export default abstract class Button<P extends Props = Props> extends React.Component<P> {
  abstract execute(): ResultState;
  
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
