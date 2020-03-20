import { DashboardConstants } from "../_constants";

export function dashDetails(state = {}, action) {
  switch (action.type) {
    case DashboardConstants.DASH_DETAILS_SUCCESS:
      return {
        items: action.DashboardDetails
      };
    case DashboardConstants.DASH_DETAILS_ERROR:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
