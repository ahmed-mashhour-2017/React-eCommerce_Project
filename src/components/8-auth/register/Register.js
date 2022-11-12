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
     const [confirm_pass,setconfirm_pass]=useState();
     const [conditions,setconditions]=useState(false);
     const [formValidation,setformValidation]=useState( );
     const navigateor=useNavigate();
      const [errorList,seterrorList]=useState( []);
    const dispatch=useDispatch();
  // const set_loggin=()=>{

  // }
  const  test= async()=>{
    setformValidation( await  schema.validate(user,{abortEarly:false}));
    console.log(  errorList);
  }
  // useEffect(()=>{
  //  //  console.log(user_data +"\n"+status); 
    
  //   
   
 
  // },[])
  const submitData=()=>{
    test()
    //console.log(formValidation);
    if(formValidation.error ||conditions)
    {
      console.log(formValidation.error.details);
       seterrorList(formValidation.error.details)
    }else{
    dispatch(register_login(user));
    navigateor('/login')
    }
    
  }
 
  return (
    <> 
   <div className="container  register">
  <form className="content mt-5 mb-1 p-25 "  
  // [formGroup]="RegisterForm"
    onSubmit={(e)=>{
      e.preventDefault();
      submitData();
    }} 
    >
      {
     // errorList[0].message&&<div>errorList[0].message</div>
      }
    {/* {{usermodel|json}} */}
    <h3 className="text-center">Create account </h3>
    <div className="row">
      <div className="mt-2 mb-2 col-lg-6 col-6">
        {/* <!-- FristName --> */}
        <label>FristName:</label>
        <input type="text" 
       // formControlName="fristname" [(ngModel)]="usermodel.fristname" 
        className="form-control"
          placeholder="Frist Name"
          value={user.first_name}
          onChange={(e)=>{
            setUser({...user,first_name:e.target.value})
            test()
          }}
          />
        {/* <!-- validat**display error  fristname --> */}
        {/* <div *ngIf="fristname?.invalid && (fristname?.touched|| fristname?.dirty)">
          <small className="text-danger" *ngIf="fristname?.errors?.['required']">frist Name is required</small>
          <small className="text-danger" *ngIf="fristname?.errors?.['pattern']">frist Name Length must be only
            characters</small>
          <small className="text-danger" *ngIf="fristname?.errors?.['minLength']">fristName more than 3 characters</small>

        </div> */}
        {/* <!-- end tag error --> */}
      </div>
      <div className="mt-2 mb-2 col-lg-6 col-6">
        {/* <!-- LasttName --> */}
        <label>LastName:</label>
        <input type="text" 
        //</div>formControlName="lastname" 
        // [(ngModel)]="usermodel.lastname"
         className="form-control"
          placeholder="Last Name"
          value={user.last_name}
          onChange={(e)=>{
            setUser({...user,last_name:e.target.value})
            test()
          }}/>
        {/* <!-- validat**display error  lastname --> */}
        {/* <div *ngIf="lastname?.invalid && (lastname?.touched|| lastname?.dirty)">
          <small className="text-danger" *ngIf="lastname?.errors?.['required']">lastname is required</small>
          <small className="text-danger" *ngIf="lastname?.errors?.['pattern']">lastname Length must be only
            characters</small>
          <small className="text-danger" *ngIf="lastname?.errors?.['minLength']">lastname more than 3 characters</small>

        </div>
        <!-- end tag error --> */}
      </div>
      <div className="mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- email --> */}
        <label>Email:</label>
        <input type="text" 
        //formControlName="email" [(ngModel)]="usermodel.email" 
        className="form-control"
          placeholder="Your Email"
          value={user.email}
          onChange={(e)=>{
            setUser({...user,email:e.target.value})
            test()
          }}
          />
        {/* <!-- validat**display error  email --> */}
        {/* <div *ngIf="email?.invalid && (email?.touched|| email?.dirty)">
          <small className="text-danger" *ngIf="email?.errors?.['required']">email is required</small>
          <small className="text-danger" *ngIf="email?.errors?.['email']">email must be invalid </small>

        </div>
        <!-- end tag error --> */}
      </div>
      <div className="mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- phone --> */}
        <label>phone:</label>
        <input type="text" 
       // formControlName="phone"         [(ngModel)]="usermodel.phone"
         className="form-control"
          placeholder="Phone Number"
          value={
              user.phone              
                  }
          onChange={(e)=>{
            setUser({...user,phone:e.target.value})
            test()
          }}/>
        {/* <!-- validat**display error  phone --> */}
        {/* <div *ngIf="phone?.invalid && (phone?.touched|| phone?.dirty)">
          <small className="text-danger" *ngIf="phone?.errors?.['required']">phone is required</small>
          <small className="text-danger" *ngIf="phone?.errors?.['pattern']">phone must be only number </small>
          <small className="text-danger" *ngIf="phone?.errors?.['minLength']">phone number is short </small>
          <small className="text-danger" *ngIf="phone?.errors?.['maxLength']">phone number is max </small>

        </div> */}

        {/* <!-- end tag error --> */}
      </div>
      <div className="mt-2 mb-2 col-lg-12 col-12">
        {/* <!-- password --> */}
        <label>Password:</label>

        <input type="password" 
       //</div> formControlName="password"
        // [(ngModel)]="usermodel.password" 
         className="form-control "
          placeholder="Enter New password"
          value={user.password}
          onChange={(e)=>{
            setUser({...user,password:e.target.value})
            test()
          }}
          />

        {/* <!-- validat**display error  password --> */}
        {/* <div *ngIf="password?.invalid && (password?.touched|| password?.dirty)">
          <small className="text-danger" *ngIf="password?.errors?.['required']">password is required</small>
          <small className="text-danger" *ngIf="password?.errors?.['maxLength']">password is max </small>
          <small className="text-danger" *ngIf="password?.errors?.['minLength']">password is short </small>
        </div>
        <!-- end tag error --> */}
      </div>
      <div className="mt-2 mb-2  col-lg-12 col-12">
        <label>Confirm password:</label>
        <input 
        //</div>[className.is-invalid]="RegisterForm.errors?.['misMatch']" type="password"
         // [(ngModel)]="usermodel.confirmpassword" formControlName="confirmpassword"
           className="form-control"
          placeholder="RE- password"
          value={confirm_pass}
          onChange={(e)=>{
            setconfirm_pass(e.target.value)
            test()
          }}/>
        {/* <!-- validat**display error  confirm password --> */}
        {/* <small className="text-danger" *ngIf="RegisterForm.errors?.['misMatch']">password and confirmPassword not
          macth</small>
        <!-- end tag error --> */}
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