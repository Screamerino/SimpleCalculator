import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={
          "calculator__key" +
          (this.props.className ? " " + this.props.className : "")
        }
        type="button"
        onClick={() => this.props.onClick(this.props.execute)}
      >
        {this.props.buttonValue}
      </button>
    );
  }
}
