// //import { add_user, error_user, start_user, success_user } from "../reducers/user_slice"
 
// import {   error_categories, start_categories, success_categories } from '../reducers/categories_slice';
 
// export const fetch_categories= ( dispatch)=>{
//   dispatch(start_categories())
//   fetch(`http://localhost:4000/categories` )
//         .then((response)=>{return response.json()})
//         .then((data)=>{
//               console.log(data)
//               dispatch(success_categories(data))
              
//         })
//         .catch((err)=>{
//              console.log(err)
//             dispatch(error_categories())
//         })
// } 

// // import axios from './../../../node_modules/axios/lib/axios';

// // export const fetch_categories=async( dispatch)=>{
// // dispatch(start_user());
 
// // //const res=axios.post(" http://localhost:4000/users",user);
// //  await  axios.get(`http://localhost:4000/categories` )
// //  .then(function (response) {
  
// //     return response.data[0];

// //   }).then((res)=>{
// // console.log(res.firstName);
 
// // dispatch(add_user({name:res.firstName+" "+res.lastName, email:res.email}));
// //  dispatch(success_user());
// //   }).catch(()=>{
// // dispatch(error_user())
// // })
// // }