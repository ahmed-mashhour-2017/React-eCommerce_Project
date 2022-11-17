import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const add_to_cart= createAsyncThunk('cart_reducers/add_to_cart', async (user) => {
 
  
  const res=await  axios.post(" http://localhost:4000/carts/",user);
  //console.log(res.data);
  return res.data;
})
export const cart_slice = createSlice({
  name: 'cart_reducers',
  initialState : {
    user_data:[],    
  status:"",
  Loggin_state:false
  },
  reducers: {
    change_Loggin_state:(state,action)=>{
      state.Loggin_state=action.payload;
      if(!action.payload){
        state.user_data  =[];
        state.status="";
      }
  }
  
  },
  extraReducers:{
    [add_to_cart.pending]:(state) => {
      state.status="loading";
           
      },
      [add_to_cart.fulfilled]:(state,action) => {
        state.user_data  = action.payload; 
        console.log( action.payload);
       
        state.status="success";   
        },
        [add_to_cart.rejected]:(state) => {
          state.user_data  = [];
          state.status="error";
                   
          },
  }
})

export const {  change_Loggin_state} = cart_slice.actions
export default cart_slice.reducer
 