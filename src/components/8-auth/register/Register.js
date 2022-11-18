import React, {   useState  } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
  import { useSelector, useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { change_Loggin_state, user_login } from './../../../store_redux_toolkit/reducers/user_slice';
import Joi from 'joi';
import './register.css'
import { register_login } from '../../../store_redux_toolkit/reducers/register_slice';
export default function Register()  {
  
   const { status}=useSelector(st=>st.register);
  // const {status}    =useSelector(st=>st.user);
     const [user,setUser]=useState({first_name:'',last_name:'',phone:""  ,email:'',password:''});
     const [confirm_pass,setconfirm_pass]=useState('');
     const [conditions,setconditions]=useState(false);
     const [formValid,setformValid]=useState(false );
     const navigateor=useNavigate();
     const dispatch=useDispatch();
  // const set_loggin=()=>{

  // }
  const  test= ()=>{
    setformValid(   schema.validate(user,{abortEarly:false}).error?false:true);
     //console.log(  formValid);
  }
  // useEffect(()=>{
  //  //  console.log(user_data +"\n"+status); 
    
  //   
   
 
  // },[])
  const submitData=()=>{
    test()
    //console.log(formValid);
    if(formValid&&conditions&&(confirm_pass=== user.password))
    {
      dispatch(register_login(user));
      navigateor('/login')
      //console.log(formValid.error.details);
       //seterrorList(formValid.error.details)
       
    }else{
      alert("complete the form requirements")
    }
    
  }
 
  return (
    <> 
   <div className="container  register">
  <form className="content mt-5 mb-1 p-25 "  
     onSubmit={(e)=>{
      e.preventDefault();
      submitData();
    }} 
    >
      {
       }
     <h3 className="text-center">Create account </h3>
    <div className="row">
      <div className="mt-2 mb-2 col-lg-6 col-6">
        {/* <!-- FristName --> */}
        <label>FristName:</label>
        <input type="text" 
         className="form-control"
          placeholder="Frist Name"
          value={user.first_name}
          onChange={(e)=>{
            setUser({...user,first_name:e.target.value})
          }}
          
          />
           
          {
            user.first_name!==''&&Joi.string().alphanum().required().validate( user.first_name).error&&
            <small className= 'text-danger' > name should contain on letters and number only</small>
          }
       
            {
            user.first_name!==''&&Joi.string().min(3)
           .validate( user.first_name).error&&
            <small className= 'text-danger' > name is short</small>
          }
             {
            user.first_name!==''&&Joi.string()
            .max(30).validate( user.first_name).error&&
            <small className= 'text-danger' > name is long</small>
          }
        
         
      </div>
      <div className="mt-2 mb-2 col-lg-6 col-6">
        {/* <!-- LasttName --> */}
        <label>LastName:</label>
        <input type="text" 
       
         className="form-control"
          placeholder="Last Name"
          value={user.last_name}
          onChange={(e)=>{
            setUser({...user,last_name:e.target.value})
        
          }}/>

{
            user.last_name!==''&&Joi.string().alphanum().required().validate( user.last_name).error&&
            <small className= 'text-danger' > name should contain on letters and number only</small>
          }
       
       {
            user.last_name!==''&&Joi.string().min(3)
           .validate( user.last_name).error&&
            <small className= 'text-danger' > name is short</small>
          }
             {
            user.last_name!==''&&Joi.string()
            .max(30).validate( user.last_name).error&&
            <small className= 'text-danger' > name is long</small>
          }

    
      </div>
      <div className="mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- email --> */}
        <label>Email:</label>
        <input type="text" 
         className="form-control"
          placeholder="Your Email"
          value={user.email}
          onChange={(e)=>{
            setUser({...user,email:e.target.value})
        
          }}
          />
            {
            user.email!==''&&Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).validate( user.email).error&&
            <small className= 'text-danger' > email must be  valid </small>
          }

        
      </div>
      <div className="mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- phone --> */}
        <label>phone:</label>
        <input type="text" 
          className="form-control"
          placeholder="Phone Number"
          value={
              user.phone              
                  }
          onChange={(e)=>{
            setUser({...user,phone:e.target.value})
            
          }}/>

          {
            user.phone!==''&&Joi.string().length(11).pattern(/^[0-9]+$/).required().validate( user.phone).error&&
            <small className= 'text-danger' > phone must be  valid </small>
          }
    

        {/* <!-- end tag error --> */}
      </div>
      <div className="mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- password --> */}
        <label>Password:</label>

        <input type="password" 
 
         className="form-control "
          placeholder="Enter New password"
          value={user.password}
          onChange={(e)=>{
            setUser({...user,password:e.target.value})
            
          }}
          />
          {
            user.password!==''&&Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).validate( user.password).error&&
            <small className= 'text-danger' > password must be  valid </small>
          }
 
      </div>
      <div className="mt-2 mb-2  col-lg-12 col-12">
        <label>Confirm password:</label>
        <input 
        type="password" 
             className="form-control"
          placeholder="RE- password"
          value={confirm_pass}
          onChange={(e)=>{
            setconfirm_pass(e.target.value)
            
          }}/>
           {
            confirm_pass!==''&&Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).validate( confirm_pass).error&&
            <small className= 'text-danger' > password must be  valid </small>
          }
          <br/>
            {
            confirm_pass!==''&&confirm_pass!== user.password&&
            <small className= 'text-danger' > two password must be matched </small>
          }
        
      </div>
      <div className=" mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- button --> */}
        {
          status==="loading"&&
          <>
          <h4>Loading... <i className="fa-solid fa-spinner fa-spin"></i></h4>
          </>
        }
         {
          status!=="loading"&&
          <>
           <input className="col-lg-12 btn btn-warning" type="submit" value="Register"/>
          </>
        }
       
      </div>
      <div className=" mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- text --> */}
        <h6><input type="checkbox" id="myCheck" onClick ={(e)=>{
          e.target.checked===true?setconditions(true):setconditions(false);
          console.log(e.target.checked);
        }}/>
        {
           !conditions&&<span className= 'text-danger' > By creating an account, you agree to Our Conditions of Use and Privacy Notice.</span>
        }
         {
            conditions&&<span className= 'text-success' > By creating an account, you agree to Our Conditions of Use and Privacy Notice.</span>
        }
         
        </h6>
      </div>
      <div className=" mt-2 mb-2 col-lg-12 col-12">
        {/* <!--  --> */}
        <h6>Already have an account? <NavLink to={"/login"}>Login</NavLink>
        </h6>
      </div>

    </div>
  </form>
</div>
    </>
  )
}
 
const schema = Joi.object({
  first_name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
      last_name: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),

  password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  repeat_password: Joi.ref('password'),

  phone:Joi.string().length(11).pattern(/^[0-9]+$/).required(),

  
  email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})