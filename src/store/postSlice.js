import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post:[],
}


const postSlice = createSlice({
    name:"post",
    initialState,
    reducers: {
        getAllPost: (state, action) => {
            
        },

    }
});


export const {getAllPost} = authSlice.actions;
export default postSlice.reducer;

