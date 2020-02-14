import { UPDATE_DATA, FINISH_LOADING } from "./actionTypes";

export const finishLoading = () => ({
  type: FINISH_LOADING
});

export const updateData = newData => ({
  type: UPDATE_DATA,
  payload: newData
});
