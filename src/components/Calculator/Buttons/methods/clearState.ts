import { State } from "../../types/state.type";

/**
 * Return cleared object representing state in calculator
 * @param {result} optional parameter for result attribute (often used in error cases)
 * @return {Object} calc's state
 */
export default function clearState(result="0"): State {
  return {
    number: "0",
    otherNumber: null,
    funcType: null,
    result: result,
  };
}