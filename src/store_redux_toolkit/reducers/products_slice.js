import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetch_products= createAsyncThunk('products_reducers/fetch_products', async (items) => {
 
  const res=await  axios.get(`http://localhost:4000/${items}`);
  // console.log(res.data);
  return res.data;
})
export const products_slice = createSlice({
  name: 'products_reducers',
  initialState : {
    products_data:[],    
    status:null,
    
  },
  reducers: {
   
  },
  extraReducers:{
    [fetch_products.pending]:(state) => {
      state.status="loading";
               
      },
      [fetch_products.fulfilled]:(state,action) => {
        state.products_data  = action.payload; 
      //   console.log("from slice\n"+ action.payload[0].id);
        state.status="success";
        
                 
        },
        [fetch_products.rejected]:(state) => {
          state.products_data  = [];
          state.status="error";
                   
          },
  }
})

  
export default products_slice.reducer
 
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

 