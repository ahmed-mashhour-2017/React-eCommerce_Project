import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const add_to_cart= createAsyncThunk('cart_reducers/add_to_cart', async (cart) => {
 
  console.log(cart);
  //const res=await  axios.post(" http://localhost:4000/carts/",cart);
  //console.log(res.data);
 /// return res.data;
})
export const cart_slice = createSlice({
  name: 'cart_reducers',
  initialState : {
    cart_data:[],    
  status:"",
   },
  reducers: {
  //   change_Loggin_state:(state,action)=>{
  //     state.Loggin_state=action.payload;
  //     if(!action.payload){
  //       state.cart_data  =[];
  //       state.status="";
  //     }
  // }
  
  },
  extraReducers:{
    [add_to_cart.pending]:(state) => {
      state.status="loading";
           
      },
      [add_to_cart.fulfilled]:(state,action) => {
        state.cart_data  = action.payload; 
        console.log( action.payload);
       
        state.status="success";   
        },
        [add_to_cart.rejected]:(state) => {
          state.cart_data  = [];
          state.status="error";
                   
          },
  }
})

 export default cart_slice.reducer
 