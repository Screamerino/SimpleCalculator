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
      resultNumber: "0",
    };
  }

  addNumber(num) {
    if (this.state.funcType === null) {
      if (!this.state.number.includes(".") || num !== ".") {
        this.setState({
          number: `${(this.state.number + num).replace(/^0+/, "")}`,
        });
      }
    } else {
      if (this.state.otherNumber === null) {
        this.setState({
          otherNumber: `${num}`,
        });
      } else if (!this.state.otherNumber.includes(".") || num !== ".") {
        this.setState({
          otherNumber: `${this.state.otherNumber + num}`,
        });
      }
    }
    console.log(this.state);
  }

  addFuncCharacter(op) {
    if (this.state.funcType) {
      this.doMath();
    }
    this.setState({
      funcType: op,
    });
  }

  calculateProcent() {
    let resultNumber = parseFloat(this.state.number) / 100;
    this.setState({
      resultNumber: resultNumber,
      number: resultNumber + '',
    });
  }

  removeCharacter() {
    if (this.state.otherNumber) {
      let otherNumber = this.state.otherNumber;
      this.setState({
        otherNumber: otherNumber.slice(0, otherNumber.length - 1),
      });
    } else if (this.state.funcType) {
      this.setState({
        funcType: null,
      });
    } else {
      let number = this.state.number;
      this.setState({
        number: number.slice(0, number.length - 1),
      });
    }
  }

  doMath() {
    let resultNumber;

    if (this.state.otherNumber) {
      switch (this.state.funcType) {
        case '+':
          resultNumber = parseFloat(this.state.number) + parseFloat(this.state.otherNumber);
          break;
        case '-':
          resultNumber = parseFloat(this.state.number) - parseFloat(this.state.otherNumber);
          break;
        case '*':
          resultNumber = parseFloat(this.state.number) * parseFloat(this.state.otherNumber);
          break;
        case '/':
          resultNumber = parseFloat(this.state.number) / parseFloat(this.state.otherNumber);
          break;
      }
    }
    else {
      resultNumber = this.state.number;
    }
    this.setState({
      number: resultNumber + '',
      resultNumber: resultNumber,
      otherNumber: null,
      funcType: null,
    })
  }

  clearDisplay() {
    this.setState({
      number: "0",
      otherNumber: null,
      funcType: null,
      resultNumber: "0",
    });
  }

  render() {
    return (
      <div className="calculator">
        <Display
          number={this.state.number}
          otherNumber={this.state.otherNumber}
          funcType={this.state.funcType}
          resultNumber={this.state.resultNumber}
        />
        <div className="calculator__keys">
          <ClearButton onClick={() => this.clearDisplay()} />
          <RemoveButton onClick={() => this.removeCharacter()} />
          <ProcentButton buttonValue="%" onClick={() => this.calculateProcent()}/>
          <FunctionButton buttonValue="/" onClick={() => this.addFuncCharacter("/")} />
          <NumberButton buttonValue="7" onClick={() => this.addNumber("7")} />
          <NumberButton buttonValue="8" onClick={() => this.addNumber("8")} />
          <NumberButton buttonValue="9" onClick={() => this.addNumber("9")} />
          <FunctionButton buttonValue="*" onClick={() => this.addFuncCharacter("*")} />
          <NumberButton buttonValue="4" onClick={() => this.addNumber("4")} />
          <NumberButton buttonValue="5" onClick={() => this.addNumber("5")} />
          <NumberButton buttonValue="6" onClick={() => this.addNumber("6")} />
          <FunctionButton buttonValue="-" onClick={() => this.addFuncCharacter("-")} />
          <NumberButton buttonValue="1" onClick={() => this.addNumber("1")} />
          <NumberButton buttonValue="2" onClick={() => this.addNumber("2")} />
          <NumberButton buttonValue="3" onClick={() => this.addNumber("3")} />
          <FunctionButton buttonValue="+" onClick={() => this.addFuncCharacter("+")} />
          <NumberButton buttonValue="0" onClick={() => this.addNumber("0")} />
          <NumberButton buttonValue="." onClick={() => this.addNumber(".")} />
          <EqualButton onClick={() => this.doMath()}/>
        </div>
      </div>
    );
  }
}

function App() {
  return <Calculator />;
}

export default App;
