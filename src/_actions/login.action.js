import { CommonAPIServices } from "../Assets/utill/CommonServices";
import * as toastr from "toastr/build/toastr.min.js";
import { history } from "../_helpers";
import { DashboardConstants } from "../_constants";
export const LoginAction = {
  Login
};
function Login(credentials) {
  let response = [];
  CommonAPIServices.getDetails("http://localhost:4000/User_Login").then(
    respAllDetails => {
      if (respAllDetails.data.length > 0) {
        if (respAllDetails.status === 200) {
          const val = respAllDetails.data.filter(
            item =>
              item.username == credentials[0].UserName &&
              item.password == credentials[0].Password
          );
          if (val.length == 0) {
            toastr.error("Invalid Credentials");
            return false;
          }
          CommonAPIServices.getDetails(
            "http://localhost:4000/User_Role?username=" +
              credentials[0].UserName
          ).then(respRole => {
            sessionStorage.setItem("UserName", credentials[0].UserName);
            sessionStorage.setItem("Role", respRole.data[0].role);
          });
          history.push("/Dashboard");
          window.location.reload();
        }
      } else {
        toastr.error("Invalid Credentials");
        return false;
      }
    }
  );
}
