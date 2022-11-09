import { add_user, error_user, start_user, success_user } from "../reducers/user_slice"
import axios from './../../../node_modules/axios/lib/axios';

export const add_user_api=async(user,dispatch)=>{
dispatch(start_user());
 
//const res=axios.post(" http://localhost:4000/users",user);
 await  axios.get(" http://localhost:4000/users?email="+user.email )
 .then(function (response) {
  
    return response.data[0];

  }).then((res)=>{
console.log(res.firstName);
 
dispatch(add_user({name:res.firstName+" "+res.lastName, email:res.email}));
 dispatch(success_user());
  }).catch(()=>{
dispatch(error_user())
})
}