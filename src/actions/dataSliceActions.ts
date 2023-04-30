import { DataState } from "@/reducers/dataSlice";
import { AnyAction, current } from "@reduxjs/toolkit";

export const onGetLocalData = (state: DataState, action: AnyAction) => {
  return { ...state, data: action.payload };
};
export const onGetFooterData = (state: DataState, action: AnyAction) => {
  return { ...state, footerData: action.payload };
};
