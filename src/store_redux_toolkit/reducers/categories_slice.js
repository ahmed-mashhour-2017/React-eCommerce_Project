import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetch_categories= createAsyncThunk('user_reducers/fetch_categories', async (items) => {
 
  const res=await  axios.get(`http://localhost:4000/${items}`);
  //console.log(res.data);
  return res.data;
})
export const categories_slice = createSlice({
  name: 'user_reducers',
  initialState : {
    categories_data:[],    
    status:null,
    current_categry: "all",
    
  },
  reducers: {
    change_category:(state,action)=>{
      state.current_categry=action.payload;
  }
  },
  extraReducers:{
    [fetch_categories.pending]:(state) => {
      state.status="loading";
               
      },
      [fetch_categories.fulfilled]:(state,action) => {
        state.categories_data  = action.payload; 
         //console.log("from slice\n"+action.payload);
        state.status="success";
        
                 
        },
        [fetch_categories.rejected]:(state) => {
          state.status="error";
                   
          },
  }
})

export const {  change_category} = categories_slice.actions
export default categories_slice.reducer
