import { CommonAPIServices } from "../Assets/utill/CommonServices";
import { checkAdminConstant } from "../_constants";
export const CheckAdminAccount = {
  AdminAccountAccess
};
function AdminAccountAccess() {
  return dispatch => {
    try {
      CommonAPIServices.getDetails("http://localhost:4000/UserDetails").then(
        chkAdminAccess => {
          if (chkAdminAccess.data.length > 0) dispatch(success(false));
          else dispatch(success(true));
        },
        error => {
          dispatch(failure(error));
        }
      );
    } catch (error) {
      failure(error);
    }
  };
  function success(chkAdminAccess) {
    return {
      type: checkAdminConstant.CHK_ADMIN_ACCESS,
      chkAdminAccess
    };
  }
  function failure(error) {
    return { type: checkAdminConstant.CHK_ADMIN_ACCESS_ERROR, error };
    return error;
  }
}
