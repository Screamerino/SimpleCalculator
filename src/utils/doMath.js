
export function cutNumber(number) {
  return Math.round(number * 1000) / 1000;
}

export default function doMath(state) {
  let resultNumber;

  if (state.otherNumber) {
    switch (state.funcType) {
      case "+":
        resultNumber = cutNumber(parseFloat(state.number) + parseFloat(state.otherNumber));
        break;
      case "-":
        resultNumber = cutNumber(parseFloat(state.number) - parseFloat(state.otherNumber));
        break;
      case "*":
        resultNumber = cutNumber(parseFloat(state.number) * parseFloat(state.otherNumber));
        break;
      case "/":
        if (state.otherNumber === "0") {
          throw new Error("Zero division error");
        }
        resultNumber = cutNumber(parseFloat(state.number) / parseFloat(state.otherNumber));
        break;
      default:
        break;
    }
  } else {
    resultNumber = state.number;
  }
  return {
    number: resultNumber + "",
    result: resultNumber + "",
    otherNumber: null,
    funcType: null,
  };
}
