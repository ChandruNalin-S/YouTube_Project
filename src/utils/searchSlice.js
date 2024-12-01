import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name:'search',
  initialState:{

  },
  reducers:{
    cacheResults:(state,action)=>{
      state = Object.assign(state, action.payload)// this code purpose is merging two objects and storing into the state object.
    },
  },
});


export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;