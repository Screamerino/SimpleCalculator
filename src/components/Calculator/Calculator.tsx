import React from "react";
import { PropsWithChildren } from "react";

import Display from "./Display/Display";
import { State } from "./types/state.type";
import { ExecutorFunc } from "./types/props.type";
import { statelessButtons, stateButtons } from "./Buttons/buttons";


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
          {statelessButtons.map((data) => {
            const {
              Component,
              ...passThroughProps
            } = data;
            return <Component {...passThroughProps} onClick={this.handleClick} />;
          })}
          {stateButtons.map((data) => {
            const {
              Component,
              ...passThroughProps
            } = data;
            return <Component {...passThroughProps} onClick={this.handleClick} state={this.state} />;
          })}
        </div>
      </div>
    );
  }
}