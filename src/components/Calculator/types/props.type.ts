import { State, ResultState } from "./state.type";

export type ExecutorFunc = () => ResultState;

type handleClickFunc = (executor: ExecutorFunc) => void;

export type CommonProps = {
  buttonValue: string,
  className?: string;
};

export type StatelessProps = CommonProps & { 
  onClick: handleClickFunc;
};

export type StateProps = StatelessProps & {
  state: State
};