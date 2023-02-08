import { StatelessProps, StateProps } from "../types/props.type";
import { Renderable } from "../types/renderable.type";
import ClearButton from "./NoStateButtons/ClearButton";
import EqualButton from "./StateButtons/EqualButton";
import FunctionButton from "./StateButtons/FunctionButton";
import NumberButton from "./StateButtons/NumberButton";
import ProcentButton from "./StateButtons/ProcentButton";
import RemoveButton from "./StateButtons/RemoveButton";

export type StatelessButtonType = Renderable<StatelessProps>;
export type StateButtonType = Renderable<StateProps>;

export const statelessButtons: StatelessButtonType[] = [
  {
    buttonValue: "AC",
    Component: ClearButton,
  }
]

export const stateButtons: StateButtonType[] = [
  {
    buttonValue: "<-",
    Component: RemoveButton,
  },
  {
    buttonValue: "%",
    Component: ProcentButton,
  },
  {
    buttonValue: "/",
    Component: FunctionButton,
    className: "calculator__key--operator"
  },
  {
    buttonValue: "7",
    Component: NumberButton,
  },
  {
    buttonValue: "8",
    Component: NumberButton,
  },
  {
    buttonValue: "9",
    Component: NumberButton,
  },
  {
    buttonValue: "*",
    Component: FunctionButton,
    className: "calculator__key--operator"
  },
  {
    buttonValue: "4",
    Component: NumberButton,
  },
  {
    buttonValue: "5",
    Component: NumberButton,
  },
  {
    buttonValue: "6",
    Component: NumberButton,
  },
  {
    buttonValue: "-",
    Component: FunctionButton,
    className: "calculator__key--operator"
  },
  {
    buttonValue: "1",
    Component: NumberButton,
  },
  {
    buttonValue: "2",
    Component: NumberButton,
  },
  {
    buttonValue: "3",
    Component: NumberButton,
  },
  {
    buttonValue: "+",
    Component: FunctionButton,
    className: "calculator__key--operator"
  },
  {
    buttonValue: "0",
    Component: NumberButton,
  },
  {
    buttonValue: ".",
    Component: NumberButton,
  },
  {
    buttonValue: "*",
    Component: EqualButton,
    className: "calculator__key--enter"
  },
]
