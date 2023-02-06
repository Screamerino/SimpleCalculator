export interface State {
  number: string,
  otherNumber: string | null,
  funcType: string | null,
  result: string
}

export type ResultState = {
  [Property in keyof State]+?: State[Property]; 
}
