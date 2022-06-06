import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  change: string;
};
const change: string ="template1";

const initialState: initialStateType = {
    change
};

export const changeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {
    changeTemplate: (state, action: PayloadAction<string>) => {
      state.change = action.payload;
    },
    
  },
});
export const {
    changeTemplate
} = changeSlice.actions;
export default changeSlice.reducer;
