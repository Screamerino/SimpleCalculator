import "./assets/App.css";
import React from "react";
import { PropsWithChildren } from "react";

import Display from "./components/Display/Display";
import ClearButton from "./components/Buttons/ClearButton";
import RemoveButton from "./components/Buttons/RemoveButton";
import ProcentButton from "./components/Buttons/ProcentButton";
import FunctionButton from "./components/Buttons/FunctionButton";
import NumberButton from "./components/Buttons/NumberButton";
import EqualButton from "./components/Buttons/EqualButton";
import { ExecutorFunc } from "./components/Buttons/Button";


export interface State {
  number: string,
  otherNumber: string | null,
  funcType: string | null,
  result: string
}

export type ResultState = {
  [Property in keyof State]+?: State[Property]; 
}

class Calculator extends React.Component {
  state: State;

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
      this.setState(obj);
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

function App() {
  return <Calculator />;
}

export default App;
