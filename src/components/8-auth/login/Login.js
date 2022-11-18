import React, { useEffect, useState } from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'
import './login.css'
import { useSelector, useDispatch } from 'react-redux';
import { change_Loggin_state, user_login } from './../../../store_redux_toolkit/reducers/user_slice';
export default function Login() {
  
  const { user_data,Loggin_state}=useSelector(st=>st.user);
  const {status}    =useSelector(st=>st.user);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch=useDispatch();
  // const set_loggin=()=>{
const navigateor=useNavigate();
  // }
  useEffect(()=>{
    //console.log(user_data +"\n"+status);
  })
  return (
    <> 
    <div className="container login ">
  <form className="content mt-5 mb-1 "   
     >
    { 
    !Loggin_state&&
     <h3 className="text-center">Sign in </h3>
    }
    {
      Loggin_state&&
      <h1 className='text-success'>You Now Is Loggin</h1>
    }
   
    <div className="row">

      <div className="mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- email --> */}
        {
          status==="loading"&&
          <>
          <h4>Loading... <i className="fa-solid fa-spinner fa-spin"></i></h4>
          </>
        }
      {  
      
      ((status===""||status==="success")&&user_data.length===0) &&
        <> 
        <label>Email:</label>
        <input type="text" 
        // formControlName="email"
         className="form-control" placeholder="Your Email"value={email}
         onChange={(e)=>{
          setEmail(e.target.value);
         }}

         />
         {
          status==="success"&&user_data.length===0&&
          <>
          <p className='text-danger'> email not exist</p>
          </>
         }
         <br/>
            <input className="col-lg-12 btn btn-warning" type="submit" value="Next"
             
             onClick={(e)=>{
              e.preventDefault();
              dispatch(user_login(email));
             
            }}
             />
         </>
       
         }
      
      
      </div>
        {
          (status==="success"&&user_data.length!==0)&&!Loggin_state&&
          <>
             <div className="mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- password --> */}
        <label>Password:</label>
        <input type="password"
        //  formControlName="password" 
         className="form-control" placeholder="Enter password"
         value={password}
         onChange={(e)=>{
          setPassword(e.target.value);
         }}
         />
       
      </div>
      <div className=" mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- button --> */}
        <input className="col-lg-12 btn btn-warning" type="submit" value="login" 
        onClick={(e)=>{
          e.preventDefault();
          if(password===user_data[0].password){
            dispatch(change_Loggin_state(true))
            //console.log("ok");
            setTimeout(() => {
               navigateor('/home')
            }, 3000);
           
          }else{
           // console.log("not ok");

           //console.log(user_data[0].password+"\n page\n"+password);
          }
          

        }}
        />
      </div>
          </>
        }
        {
          !Loggin_state&&
          <>
            <div className=" mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- text --> */}
        <h6>By continuing, you agree to Our Conditions of Use and Privacy Notice.
        </h6>
      </div>
      <div className=" mt-2 mb-2 col-lg-12 col-12">
        {/* <!--  --> */}
        <h6> have an account ?

        </h6>
        <NavLink to="/register">Create New Account</NavLink>
      </div>
          </>
        }


    </div>
  </form>

</div>
    </>
  )
}
