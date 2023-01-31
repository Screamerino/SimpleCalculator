export default function doMath(state) {
  let resultNumber;

  if (state.otherNumber) {
    switch (state.funcType) {
      case "+":
        resultNumber = parseFloat(state.number) + parseFloat(state.otherNumber);
        break;
      case "-":
        resultNumber = parseFloat(state.number) - parseFloat(state.otherNumber);
        break;
      case "*":
        resultNumber = parseFloat(state.number) * parseFloat(state.otherNumber);
        break;
      case "/":
        resultNumber = parseFloat(state.number) / parseFloat(state.otherNumber);
        break;
      default:
        break;
    }
  } else {
    resultNumber = state.number;
  }
  return {
    number: resultNumber + "",
    resultNumber: resultNumber,
    otherNumber: null,
    funcType: null,
  };
}
