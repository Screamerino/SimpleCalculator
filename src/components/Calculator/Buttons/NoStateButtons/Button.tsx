import React from "react";
import { StatelessProps } from "../../types/props.type";
import { ResultState } from "../../types/state.type"; 


export default abstract class Button<P extends StatelessProps = StatelessProps> extends React.Component<P> {
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
