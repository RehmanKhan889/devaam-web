import { RepositoryFactory } from "../../repository/RepositoryFactory";
import axios from "axios";
let login = RepositoryFactory.get("login");

export const setLoading = (val) => async (dispatch) => {
  dispatch({
    type: "SET_AUTH_LOADING",
    payload: val,
  });
};

export const logout = () => async (dispatch) => {
  localStorage.clear();
  dispatch({
    type: "SET_AUTH_LOGOUT",
    payload: null,
  });
};

export const loginUser = (obj) => async (dispatch) => {
  try {
    dispatch(setLoading(true));

    let { data } = await login.get({
      request: {
        method: "loginUser",
        data: { user: obj },
      },
    });
    console.log(data);
    console.log(data?.response?.status?.statusCode);
    if (data?.response?.status?.statusCode != 200) {
      alert(data?.response?.data?.error);
      dispatch(setLoading(false));

      return;
    }
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data?.response?.data?.user,
    });

    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
    alert("Something went wrong");
  }
};
