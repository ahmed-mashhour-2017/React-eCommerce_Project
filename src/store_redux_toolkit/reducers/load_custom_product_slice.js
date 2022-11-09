import { createSlice } from '@reduxjs/toolkit'

 
export const load_custom_product_slice = createSlice({
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

 export const {  change_category} = load_custom_product_slice.actions

export default load_custom_product_slice.reducer