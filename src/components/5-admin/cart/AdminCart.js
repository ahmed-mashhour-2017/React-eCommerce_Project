import React, {   useLayoutEffect, useState } from 'react'
import './admin_cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { admin_fetch_carts } from './../../../store_redux_toolkit/reducers/admin_reducers/admin_carts_slice';
import { admin_fetch_products } from '../../../store_redux_toolkit/reducers/admin_reducers/admin_products_slice';
export default function AdminCart() {
         
  const dispatch=useDispatch();
    
  const {carts_data:data}=useSelector(st=>{if(st.admin_carts )
    {return st.admin_carts }else return []});

    const {products_data}=useSelector(st=>{if(st.admin_products)
        {return st.admin_products }else return []});
        
      const [current_carts,setcurrent_carts]=useState([]);
         
   useLayoutEffect(()=>{
       
          dispatch(admin_fetch_carts(["carts","get"]));
          dispatch(admin_fetch_products(["products","get"]));
      
        //   console.log(data); 
        //  console.log(current_carts); 
        //   console.log(products_data); 


           
 } ,[]);
  return (
   <>
   
    <div className="cartBox">
        
    
            
        <table className="table table-striped">
            <thead>
                <tr className="text-center">
                    <th></th>
                    <th>Date</th>
                    <th >Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            
                  {
                                data.map((item,i)=>{
                                    return (
                                        <tr key={i}  >
                                        <td></td>
                                        <td>{item.date  }</td>
                                        <td>
                                          {item.products.length}
                                        </td>
                                        <td >
                                            <button className="btn btn-danger mx-2" onClick={()=>{

                                            dispatch(admin_fetch_carts([item.id,"delete"]));
                                            dispatch(admin_fetch_carts(["carts","get"]));

                                            }}>Delete</button>
                                            <button className="btn btn-primary" 
                                            data-bs-toggle="modal" data-bs-target="#viewCart"
                                              onClick={()=>{
                                                setcurrent_carts(item.products)
                                             }}
                                             >View</button>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
            </tbody> 
        </table>
        
    </div>



      <div className="modal fade " id="viewCart" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered max_width"  >
          <div className="modal-content">
            <div className="modal-header w-100">
              

              <h5 className="modal-title " id="exampleModalLabel">Cart Details</h5>
        <button type="button" className="btn-close " data-bs-dismiss="modal" aria-label="Close" >
        
        </button>
      
              
            </div>
            <div className="modal-body">
                <div className="cartBox">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className='w-25'>Quantity</th>
                                <th>Totle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <tr *ngFor="let item of products; let i = index">
                                <td><img src="{{item.item.image}}" alt=""></td>
                                <td>{{item.item.title}}</td>
                                <td>{{item.item.price}} L.E</td>
                                <td>
                                    {{item.quantity}}
                                </td>
                                <td>{{item.item.price * item.quantity }} L.E</td>
                            </tr> */}
                          {
                            [...current_carts].map((item,i)=>{ 
                                return(
                                    <tr key={i}>
                                    <td><img src= {products_data[item.productId].image}  alt="" /></td>
                                    <td>{products_data[item.productId].title}</td>
                                    <td>{products_data[item.productId].price} L.E</td>
                                    <td>
                                        {item.quantity}
                                    </td>
                                    <td>{products_data[item.productId].price * item.quantity } L.E</td>
                                </tr>
                                )
                            })
                          }
                        </tbody> 
                    </table>
                </div>
                
            </div>
          </div>
        </div>
      </div>
   </>
  )
}
