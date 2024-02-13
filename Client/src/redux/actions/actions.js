// import axios from "axios";
import EducationIt from "../../utils/NetworkingUtils";
import { POST_USER } from "./types";

export function postUser(user) {
  return async function (dispatch) {
    try {
      const { data } = await EducationIt.post("/user", user);
      return dispatch({
        type: POST_USER,
        payload: data,
      });
    } catch (error) {
      alert("Error posting video game: " + error);
    }
  };
}
