import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const admin_fetch_carts= createAsyncThunk('carts_reducers/admin_fetch_carts', async (items) => {
   
 if(items[1]==="get"){
  const res=await  axios.get(`http://localhost:4000/${items[0]}`);
     //console.log(res.data);
    return res.data;
 }else if(items[1]==="delete"){
   await  axios.delete(`http://localhost:4000/carts/${items[0]}`);
  //console.log(res.data);
  return [];  
 
 }
  
})
export const admin_carts_slice = createSlice({
  name: 'carts_reducers',
  initialState : {
    carts_data:[],    
    status:null,
    
  },
  reducers: {
   
  },
  extraReducers:{
    [admin_fetch_carts.pending]:(state) => {
      state.status="loading";
               
      },
      [admin_fetch_carts.fulfilled]:(state,action) => {
         
        state.carts_data  = action.payload; 
         //console.log( action.payload);
        state.status="success";
        
                 
        },
        [admin_fetch_carts.rejected]:(state) => {
          state.carts_data  = [];
          state.status="error";
                   
          },
  }
})

  
export default admin_carts_slice.reducer
 
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';

//  export const fetch_categories=createAsyncThunk(
//   'categories/fetch_categories',
//   async()=>{
//     const res=await axios.get(`http://localhost:4000/categories`)
//     return res.data
//   }
//  );
// export const categories_slice = createSlice({
//   name: 'categories',
//   initialState : {
//     categories_data:["test"],    
//     status:null,
     
//   },
//   reducers: {
//     // add_categories: (state,action) => {
//     //        state.categories_data = action.payload; 
//     //           console.log(action.payload);
//     // },
//     // start_categories:(state)=>{
//     //   state.loading=true;
//     // },
//     // success_categories:(state,action)=>{
//     //   state.categories_data = action.payload; 
//     //   state.loading=null;
//     // },
//     // error_categories:(state)=>{
//     //   state.loading=false;
//     //   state.error=true;
//     // }
//   },
//   extraReducers:{
//     [fetch_categories.fulfilled]:(state,{payload})=>{
//       state.categories_data=payload;
//       state.status="success";
//     },
//     [fetch_categories.pending]:(state )=>{
      
//       state.status="loading";
//     },
//     [fetch_categories.rejected]:(state )=>{
       
//       state.status="failed";
//     },
//   }
// })

 