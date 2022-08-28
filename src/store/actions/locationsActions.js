import { RepositoryFactory } from "../../repository/RepositoryFactory";

let location = RepositoryFactory.get("location");

export const setLocationLoading = (val) => async (dispatch) => {
  dispatch({ type: "SET_LOCATION_LOADING", payload: val });
};

export const getAllLocations = (id) => async (dispatch) => {
  try {
    let { data } = await location.get({
      request: {
        method: "getLocationByCompany",
        data: {
          company_code: id,
        },
      },
    });

    dispatch({
      type: "GET_ALL_LOCATIONS",
      payload: data?.response?.data?.locations,
    });
  } catch (error) {
    console.log("Error");
  }
};

export const addLocation =
  (obj, onSuccess = () => {}) =>
  async (dispatch) => {
    await dispatch(setLocationLoading(true));
    try {
      let { data } = await location.add({
        request: {
          method: "saveLocation",
          data: obj,
        },
      });
      await dispatch(setLocationLoading(false));
      onSuccess();
      alert("Location added successfully!");
    } catch (error) {
      await dispatch(setLocationLoading(false));
    }
  };

export const updateLocation =
  (obj, onSuccess = () => {}) =>
  async (dispatch) => {
    await dispatch(setLocationLoading(true));
    try {
      let { data } = await location.update({
        request: {
          method: "updateLocation",
          data: obj,
        },
      });
      await dispatch(setLocationLoading(false));
      onSuccess();
      alert("Location updated successfully!");
    } catch (error) {
      await dispatch(setLocationLoading(false));
    }
  };

export const deleteLocation =
  (obj, onSuccess = () => {}) =>
  async (dispatch) => {
    await dispatch(setLocationLoading(true));
    try {
      let { data } = await location.delete({
        request: {
          method: "deleteLocation",
          data: obj,
        },
      });
      await dispatch(setLocationLoading(false));
      onSuccess();
      alert("Location deleted successfully!");
    } catch (error) {
      await dispatch(setLocationLoading(false));
    }
  };
