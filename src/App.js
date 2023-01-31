import "./App.css";
import React from "react";
import Display from "./Display";
import ClearButton from "./ClearButton";
import RemoveButton from "./RemoveButton";
import ProcentButton from "./ProcentButton";
import FunctionButton from "./FunctionButton";
import NumberButton from "./NumberButton";
import EqualButton from "./EqualButton";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "0",
      otherNumber: null,
      funcType: null,
      result: "0",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(executor) {
    const obj = executor();
    if (obj) {
      this.setState(obj);
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display
          number={this.state.number}
          otherNumber={this.state.otherNumber}
          funcType={this.state.funcType}
          result={this.state.result}
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
