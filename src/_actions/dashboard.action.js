import { CommonAPIServices } from "../Assets/utill/CommonServices";
import { DashboardConstants } from "../_constants";
export const DashnoardAction = {
  DisplayDetails
};
function DisplayDetails(userName, role) {
  return dispatch => {
    try {
      if (role == "Admin") {
        CommonAPIServices.getDetails("http://localhost:4000/UserDetails").then(
          resp => {
            var DashboardDetails = resp.data;
            dispatch(success(DashboardDetails));
          },
          error => {
            dispatch(failure(error));
          }
        );
      } else {
        CommonAPIServices.getDetails(
          "http://localhost:4000/UserDetails?Email=" + userName
        ).then(
          resp => {
            var DashboardDetails = resp.data;
            dispatch(success(DashboardDetails));
          },
          error => {
            dispatch(failure(error));
          }
        );
      }
    } catch (error) {}
  };
  function success(DashboardDetails) {
    return {
      type: DashboardConstants.DASH_DETAILS_SUCCESS,
      DashboardDetails
    };
  }
  function failure(error) {
    return { type: DashboardConstants.DASH_DETAILS_ERROR, error };
  }
}
