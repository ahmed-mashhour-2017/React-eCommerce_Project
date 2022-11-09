import { createSlice } from '@reduxjs/toolkit'

 
export const cart_slice = createSlice({
  name: 'counter',
  initialState : {
    current_categry: "all",
  },
  reducers: {
        change_category:(state,action)=>{
            state.current_categry=action.payload;
        }
    // inc_action: (state) => {
    //        state.count += 1
    // },
    // dec_action: (state) => {
    //   state.count -= 1
    // },
    // inc_action_by_val: (state, action) => {
    //   state.count += action.payload
    // },
    // dec_action_by_val: (state, action) => {
    //     state.count -= action.payload
    //   },
   
  },
})

 export const {  change_category} = cart_slice.actions

export default cart_slice.reducer