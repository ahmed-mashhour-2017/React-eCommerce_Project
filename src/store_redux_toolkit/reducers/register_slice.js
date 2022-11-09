import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const register_login= createAsyncThunk('user_reducers/register_login', async (user) => {
 
  
  const res=await  axios.post(" http://localhost:4000/users/",user);
  //console.log(res.data);
  return res.data;
})
export const user_slice = createSlice({
  name: 'user_reducers',
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
    // register_login: (state,action) => {
    //        state.user_data  = action.payload; 
             
    // },
    // start_user:(state)=>{
    //   state.loading=true;
    // },
    // success_user:(state)=>{
    //   state.error=false;
    //   state.loading=null;
    // },
    // error_user:(state)=>{
    //   state.loading=false;
    //   state.error=true;
    // }
  },
  extraReducers:{
    [register_login.pending]:(state) => {
      state.status="loading";
           
      },
      [register_login.fulfilled]:(state,action) => {
        state.user_data  = action.payload; 
        console.log( action.payload);
       
        state.status="success";   
        },
        [register_login.rejected]:(state) => {
          state.user_data  = [];
          state.status="error";
                   
          },
  }
})

export const {  change_Loggin_state} = user_slice.actions
export default user_slice.reducer
// import { createSlice } from '@reduxjs/toolkit'

 
// export const user_slice = createSlice({
//   name: 'user_reducers',
//   initialState : {
//     user_data:{
//       name: "",
//       email:"" 
//   },    
//     loading:null,
//     error:false
//   },
//   reducers: {
//     register_login: (state,action) => {
//            state.user_data  = action.payload; 
             
//     },
//     start_user:(state)=>{
//       state.loading=true;
//     },
//     success_user:(state)=>{
//       state.error=false;
//       state.loading=null;
//     },
//     error_user:(state)=>{
//       state.loading=false;
//       state.error=true;
//     }
//   },
// })

//  export const { register_login,start_user,success_user,error_user} = user_slice.actions

// export default user_slice.reducer