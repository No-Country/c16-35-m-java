// import axios from "axios";
import Educaflex from "../../utils/NetworkingUtils";
import { getLoggedInUser } from "./../../utils/UserUtils";
import { LOGIN } from "./types";

export function signUp(user) {
  return async function (dispatch) {
    try {
      const response = await Educaflex.post("/api/client", user);
      handleUserLogin(response.data.token);

      return dispatch({
        type: LOGIN,
        payload: getLoggedInUser(),
      });
    } catch (error) {
      console.log(error);
    }
  };
}
