import axios from "axios";
export const CommonAPIServices = {
  postDetails,
  getDetails
};
function postDetails(url, data) {
  debugger;
  return axios({
    method: "POST",
    url: url,
    data: data,
    mode: "cors",
    cache: "no-cache",
    withCredentials: true,
    credentials: "same-origin",
    config: { headers: { "Content-Type": "application/json" } }
  });
}
function getDetails(url) {
  return axios({
    method: "GET",
    url: url,
    mode: "cors",
    cache: "no-cache",
    withCredentials: true,
    credentials: "same-origin",
    config: { headers: { "Content-Type": "application/json" } }
  });
}
