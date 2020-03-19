import { registrationConstants } from "../_constants";

export function registration(state = {}, action) {
  switch (action.type) {
    case registrationConstants.REG_SUCCESS:
      return {
        items: action.registrationDetails
      };
    case registrationConstants.REG_ERROR:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
