import React  from 'react';
import {  NavLink }  from'react-router-dom';
 
import './header.css'
import { useSelector, useDispatch } from 'react-redux';
import { change_Loggin_state } from '../../store_redux_toolkit/reducers/user_slice';
 export default function Header() {
   
    const{Loggin_state:isLogedIn}=useSelector(st=>st.user);
    const{first_name:name,email}=useSelector((st)=>{if(st.user.user_data[0])
        return st.user.user_data[0];
        else return ""});
     const dispatch=useDispatch();
    //const [name,setName]=useState( );
    //const name="asd";
    const removeLoggin=()=>{
       //setIsLogedIn(false);
       dispatch(change_Loggin_state(false));
    }
    // useEffect(()=>{
    //     // console.log("name"+name);
    //    // setName("ahmed");
    //    console.log(user_data);
    //     // console.log(user_data);
    // },[isLogedIn] )
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-amazon-header  ">
    <div className="container px-3">
    <NavLink className="navbar-brand  text-amazon-yellow"  to={"/"} >Made In Egypt</NavLink>
    {/* <NavLink  className="navbar-brand  text-amazon-yellow"   to="">Made In Egypt</NavLink> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="mynavbar">
           {
            email!=="admin@admin.com"&&
                <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link"   to={"/home"}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/Delivery"}>Delivery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link"  to={"/Contact"}>Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/About"}>About Us</NavLink>
                                </li>

                            </ul>

        } 
        {
             email==="admin@admin.com"&&
             <ul className="navbar-nav me-auto">
             <li className="nav-item">
                 <NavLink className="nav-link"   to={"/admin"}>Dashbord</NavLink>
             </li>
            

         </ul>
        }
      



            <ul className="navbar-nav m-auto">
                {
                     email!=="admin@admin.com"&&
                      <li className="nav-item"  >
                        <NavLink className="nav-link " to={"/cart"}><i className="fa-solid fa-cart-arrow-down fa-1x "></i></NavLink>
                      </li>
                }
                  {
                     email==="admin@admin.com"&&
                      <li className="nav-item"  >
                        <NavLink className="nav-link " to={"/admincart"}><i className="fa-solid fa-cart-arrow-down fa-1x "></i></NavLink>
                      </li>
                     }
                
                <li className="nav-item"  >
                    <NavLink className="nav-link" to={"/cart"}> <span className='primary'> </span></NavLink>
                </li>
               


                {/* <div *ngIf="loggin ; then thenBlock; else elseBlock"> */}

                


                {/* <ng-template #elseBlock>
                    <li className="nav-item">
                        <NavLink className="nav-link" routerLink="auth/log">Log in</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" routerLink="auth/register">Register</NavLink>
                    </li>


                </ng-template> */}
                 {!(isLogedIn)&& <><li className="nav-item">
                        <NavLink className="nav-link"  to={"/Login"}>Log in</NavLink>
                    </li>
                    <li className="nav-item"  >
                    <NavLink className="nav-link"  > ||</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link"  to={"/Register"}>Register</NavLink>
                    </li></> }

                {/* <ng-template #thenBlock>
                    <li>
                        <NavLink className="nav-link" routerLink=" "> Hello {{name}}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" (click)="removeLoggin()">Log Out</NavLink>
                    </li>
                </ng-template> */}
                 {isLogedIn&&
                 <>
                  <li>
                        <NavLink className="nav-link" to={"/"}> Hello { name}</NavLink>
                    </li>
                    <li className="nav-item"  >
                    <NavLink className="nav-link" href="#!"> ||</NavLink>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" onClick={removeLoggin}    >Log Out</div>
                    </li></> }
            </ul>
        </div>
    </div>

</nav>    
    </>
  )
}
