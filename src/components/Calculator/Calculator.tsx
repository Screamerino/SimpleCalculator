import React from "react";
import { PropsWithChildren } from "react";

import Display from "./Display/Display";
import ClearButton from "./Buttons/NoStateButtons/ClearButton";
import RemoveButton from "./Buttons/StateButtons/RemoveButton";
import ProcentButton from "./Buttons/StateButtons/ProcentButton";
import FunctionButton from "./Buttons/StateButtons/FunctionButton";
import NumberButton from "./Buttons/StateButtons/NumberButton";
import EqualButton from "./Buttons/StateButtons/EqualButton";
import { ExecutorFunc } from "./Buttons/NoStateButtons/Button";
import { State } from "./types/state.type";

export default class Calculator extends React.Component<PropsWithChildren, State> {

  constructor(props: PropsWithChildren) {
    super(props);
    this.state = {
      number: "0",
      otherNumber: null,
      funcType: null,
      result: "0",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(executor: ExecutorFunc) {
    const obj = executor();
    if (obj) {
      this.setState(prevState => ({
        ...prevState,
        ...obj
      }));
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display
          state={this.state}
        />
        <div className="calculator__keys">
          <ClearButton buttonValue="AC" onClick={this.handleClick} />
          <RemoveButton
            buttonValue="<-"
            state={this.state}
            onClick={this.handleClick}
          />
          <ProcentButton
            buttonValue="%"
            state={this.state}
            onClick={this.handleClick}
          />
          <FunctionButton
            buttonValue="/"
            className="calculator__key--operator"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="7"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="8"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="9"
            state={this.state}
            onClick={this.handleClick}
          />
          <FunctionButton
            buttonValue="*"
            className="calculator__key--operator"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="4"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="5"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="6"
            state={this.state}
            onClick={this.handleClick}
          />
          <FunctionButton
            buttonValue="-"
            className="calculator__key--operator"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="1"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="2"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="3"
            state={this.state}
            onClick={this.handleClick}
          />
          <FunctionButton
            buttonValue="+"
            className="calculator__key--operator"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="0"
            state={this.state}
            onClick={this.handleClick}
          />
          <NumberButton
            buttonValue="."
            state={this.state}
            onClick={this.handleClick}
          />
          <EqualButton
            buttonValue="="
            className="calculator__key--enter"
            state={this.state}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}