import { RepositoryFactory } from "../../repository/RepositoryFactory";

let company = RepositoryFactory.get("company");

export const setLoading = (val) => async (dispatch) => {
  dispatch({
    type: "SET_LOADING",
    payload: val,
  });
};  

export const saveCompany =
  (obj, onSuccess = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setLoading(true));
      let data = await company.get({
        request: {
          method: "saveUser",
          data: {
            user: obj,
          },
        },
      });
      dispatch({
        type: "SAVE_COMPANY",
        payload: data.data?.response?.data?.user,
      });
      if (
        data.data?.response?.data?.user ==
        "User already registered with this Email"
      ) {
        alert(data.data?.response?.data?.user);
      } else {
        alert("Company Added successfully");
        onSuccess();
        dispatch(getCompanies());
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
      alert("Something went wrong");
    }
  };

export const getCompanies = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    let { data } = await company.get({
      request: {
        method: "getUsers",
        data: {},
      },
    });
    dispatch({
      type: "GET_COMPANIES",
      payload: data.response?.data?.users_all,
    });
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
  }
};

export const deleteCompany = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    let { data } = await company.get({
      request: {
        method: "deleteUser",
        data: {
          _id: id,
        },
      },
    });
    alert("Deleted Successfully");
    dispatch(getCompanies());
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setLoading(false));
    console.log(error);
    alert("Something Went Wrong");
  }
};

export const editCompany =
  (obj, onSuccess = () => {}) =>
  async (dispatch) => {
    console.log("obj=>", obj);
    try {
      dispatch(setLoading(true));
      let { data } = await company.get({
        request: {
          method: "updateUser",
          data: {
            user: obj,
          },
        },
      });
      alert("Updated Successfully");
      onSuccess();
      dispatch(getCompanies());
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
      alert("Something Went Wrong");
    }
  };
