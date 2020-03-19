import { checkAdminConstant } from "../_constants";

export function chkAccess(state = {}, action) {
  switch (action.type) {
    case checkAdminConstant.CHK_ADMIN_ACCESS:
      return {
        items: action.chkAdminAccess
      };
    case checkAdminConstant.CHK_ADMIN_ACCESS_ERROR:
      return {
        error: action.error
      };
    default:
      return state;
  }
}
