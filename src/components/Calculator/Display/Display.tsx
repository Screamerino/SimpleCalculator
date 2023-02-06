
import React from "react";
import { State } from "../types/state.type";

export default function Display(props: {state: State}) {
  const state = props.state;

  return (
      <div className="calculator__output">
        <h2>
          {state.number + (state.funcType || "") + (state.otherNumber || "")}
        </h2>
        <p>{state.result}</p>
      </div>
    );
  }