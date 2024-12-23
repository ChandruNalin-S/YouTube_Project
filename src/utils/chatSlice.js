import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Constants";



const chatSlice = createSlice({
  name:"chat",
  initialState:{
    messages:[],
  },
  reducers:{
    addMessage(state,action){
      state.messages.splice(OFFSET_LIVE_CHAT,2);
      state.messages.unshift(action.payload);
    }
  }
});


export const {addMessage} = chatSlice.actions;

export default chatSlice.reducer;