import { onGetFooterData, onGetLocalData } from "@/actions/dataSliceActions";
import { createSlice } from "@reduxjs/toolkit";

// export interface DataState {
//   data: BoardsEntity[];
//   // activeColIndex: number;
// }
// export interface BoardsEntity {
//   name: string;
//   isActive: boolean;
//   // columns: ColumnsEntity[];
// }

export interface DataState {
  data: Catalog[];
  footerData: Footer[];
}

export interface Catalog {
  title: string;
  apartments: Apartment[];
}

export interface Apartment {
  id: number;
  title: string;
  address: string;
  img: string;
  price: number;
  bed: number;
  bath: number;
}

export interface Footer {
  title: string;
  links: Link[];
}

export interface Link {
  label: string;
  url: string;
}

const initialState: DataState = {
  data: [],
  footerData: [],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    getLocalData: (state, action) => onGetLocalData(state, action),
    getFooterData: (state, action) => onGetFooterData(state, action),
  },
});

export const { getLocalData, getFooterData } = dataSlice.actions;

export default dataSlice.reducer;
