import Button, { Props } from "../NoStateButtons/Button";
import { State } from "../../types/state.type";

export interface PropsWithState extends Props {
  state: State
}

export default abstract class StateButton extends Button<PropsWithState> {
}