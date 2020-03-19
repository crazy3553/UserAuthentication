import { history } from "../_helpers";
import * as toastr from "toastr/build/toastr.min.js";
import { CommonAPIServices } from "../Assets/utill/CommonServices";
export const RegistrationAction = {
  Register
};
function Register(regData, role) {
  debugger;
  let name = regData[0].Name;
  let username = regData[0].Email;
  CommonAPIServices.postDetails("http://localhost:4000/UserDetails", regData[0])
    .then(resp => {
      if (resp.status === 201)
        toastr.success("Your Registration Successfull", "Hello " + name);
      history.push("/");
    })
    .then(resp => {
      CommonAPIServices.postDetails("http://localhost:4000/User_Role", {
        username,
        role
      });
    });
}
