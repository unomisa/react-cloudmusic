import { createSlice } from "@reduxjs/toolkit";
import { CommonState } from "@/types/common";

const initialState: CommonState = {
    isLogin: true
};

const CommonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {}
});

// export const {} = CommonSlice.actions;
export default CommonSlice.reducer;
