import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={
          "calculator__key" + (this.className ? " " + this.className : "")
        }
        type="button"
        onClick={() => this.props.onClick(this.execute)}
      >
        {this.buttonValue}
      </button>
    );
  }
}
