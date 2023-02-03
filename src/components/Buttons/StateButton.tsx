import Button, { Props } from "./Button";
import { State } from "../../App";

export interface PropsWithState extends Props {
  state: State
}

export default abstract class StateButton extends Button {
  props!: PropsWithState;
}