import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { admin_fetch_products } from './../../../store_redux_toolkit/reducers/admin_reducers/admin_products_slice';
import './admin_products.css'
import Selector from './../../2-container/3-selector/Selector';
import { change_category,fetch_categories } from './../../../store_redux_toolkit/reducers/categories_slice';
export default function AdminProducts() {
      
  const dispatch=useDispatch();
  
  const [formDetails,setformDetails]=useState({title:'',price:'',description:""  ,category:'',image:'',rating:{
    "rate":0,
    "count": 0}});
    const [formBtn,setformBtn]=useState("");
  const {current_categry}=useSelector(state=>state.categories)
  const {products_data:data}=useSelector(st=>{if(st.admin_products)
    {return st.admin_products }else return []});
   useLayoutEffect(()=>{
      
          dispatch(admin_fetch_products(["products","get"]));
      
         // console.log(data); 

          dispatch(fetch_categories("categories")); 
 } ,[]);
 useEffect(()=>{
  setformDetails({...formDetails,category:current_categry})
 },[current_categry])
 const update=(item)=>{
  dispatch(change_category(item.category))
  setformDetails({...formDetails,...item})
  console.log(formDetails);
 }
  return (
    <>
    <div className="box mt-5 cartBox">
    <button className="btn btn-success"  data-bs-toggle="modal" data-bs-target="#viewCart"
      onClick={()=>{
        setformBtn("Add Product")

      }}
    >Add Product</button>
    <table className="table table-striped">
        <thead>
            <tr className="text-center">
                <th></th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {/* <tr *ngFor="let item of products; let i = index">
                <td><img src="{{item.image}}" alt=""/></td>
                <td>{{item.title}}</td>
                <td>{{item.category}}</td>
                <td>{{item.price}} L.E</td>
                <td><button className="btn btn-warning"  data-toggle="modal" data-target="#viewCart" (click)="update(item)">Update</button></td>
            </tr> */
            data.map((item,i)=>{
              return(
                <tr key={i} >
                <td><img src="{item.image}" alt=""/></td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.price} L.E</td>
                <td>
                <button className="btn btn-danger"  data-toggle="modal" data-target="#viewCart" 
                    onClick={()=>{
                      dispatch(admin_fetch_products([item.id,"delete"]));
                      dispatch(admin_fetch_products(["products","get"]));
                    }}
                  > delete </button>  
                   &nbsp; &nbsp; 
                  <button className="btn btn-warning"   data-bs-toggle="modal" data-bs-target="#viewCart" 
                    onClick={()=>{
                      setformBtn("update")
                      update(item) ;
                    }}
                  > Update </button>
                  
                  </td>
            </tr>
              )
            })
            }
        </tbody> 
    </table>
</div>



<div className="modal fade " id="viewCart"
 tabindex="-1" 
 aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered max_width"   >
      <div className="modal-content">
        <div className="modal-header w-100">
          
          <h5 className="modal-title " id="exampleModalLabel">Add Product</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
      
        ></button>
      
           
        </div>
        <div className="modal-body">
    
            <form 
            //[formGroup]="form"
             >
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <label >Title</label>
                        <input type="text"
                        // formControlName="title"
                          className="form-control" placeholder="title" value={formDetails.title}
                          onChange={(e)=>{
                            setformDetails({...formDetails,title:e.target.value})
                             
                          }}
                          />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label >Price</label>
                        <input type="number" 
                        // formControlName="price"
                        value={formDetails.price}
                         className="form-control" placeholder="price"
                         onChange={(e)=>{
                          setformDetails({...formDetails,price:e.target.value})
                        
                        }}
                         />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        {/* <app-select [data]="categories" [title]="'Categories'" (selectedValue)="getSelectedCategory($event)" [all]="false" [select]="form.value.category" ></app-select> */}
                    <Selector/>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label  >Image</label>
                        <img src={formDetails.image} alt="" loading="lazy"/>
                        <input type="text" className="form-control"
                        value={formDetails.image}
                        placeholder='image url'
                         onChange={(e)=>{
                          // const file = event.target.files[0];
                          // const reader = new FileReader();
                          // reader.readAsDataURL(file);
                          // reader.onload = () => {
                          //   setbase64(reader.result)  ;
                          //  // form.get('image')?.setValue(base64)
                          //   console.log(base64)
                          //   };
                          setformDetails({...formDetails,image:e.target.value})
                        
                         }} 
                        
                          />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <label  >Description</label>
                        <textarea  className="form-control" 
                        // formControlName="description" 
                         placeholder="type here .. "
                         value={formDetails.description}
                         onChange={(e)=>{
                         
                          setformDetails({...formDetails,description:e.target.value})
                         
                        }}
                         ></textarea>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-3">
                    <button className="btn btn-success"
                    onClick={(e)=>{
                      e.preventDefault()
                      console.log(formDetails);
                      if(formBtn==="update")
                      {
                        dispatch(admin_fetch_products([formDetails,"put"]));
                       
                      }else{
                        dispatch(admin_fetch_products([formDetails,"post"]));
                      }
                     
                      dispatch(admin_fetch_products(["products","get"]));

                    }}
                    // [disabled]="!form.valid" (click)="addProduct()"
                    >{formBtn}</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
