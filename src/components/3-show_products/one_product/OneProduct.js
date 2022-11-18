import React, {   useLayoutEffect } from 'react'
 import './one_product.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetch_products } from './../../../store_redux_toolkit/reducers/products_slice';
import MySpinner from '../../2-container/4-spinner/Spinner';
import { useParams, useNavigate } from 'react-router-dom';
 

export default function OneProduct() {
    const dispatch=useDispatch();
    var {id} = useParams();
    const navigator=useNavigate();
    const {products_data:data}=useSelector(st=>st.products? st.products:[{image:"",title:"",description:"",id:"",rating:{rating:"",count:""},price:"",category:""}]);
    const {status}=useSelector(st=>st.products);
    useLayoutEffect(()=>{
        dispatch(fetch_products("products?id="+id));
         // console.log(data);
           
    },[ ])
    useLayoutEffect(()=>{
        //dispatch(fetch_products("products?id="+id));
          console.log(data);
           
    },[ data])
  return (
    <>
    <div className="box_one_product">
        {
            status!=="loading"&&
            <div className="row" 
             
            >
                <div className="col-md-5 col-sm-12">
                    <img src={data[0].image} alt="sas" loading="lazy"/>
                </div>
                <div className="col-md-7 col-sm-12">
                    <div className="info">
                        <ul className="list-unstyled">
                            <li><strong>Title : </strong>{data[0].title}</li>
                            <li><strong>Category : </strong>{data[0].category}</li>
                            <li><strong>Description : </strong>{data[0].description}</li>
                            <li><strong>Rate : </strong>{data[0].rating.rate}</li>
                            <li><strong>Count : </strong>{data[0].rating.count}</li>
                            <li><strong>Price : </strong>{data[0].price}LE</li>
                            <br/>
                            <button className="navbar-brand btn bg-amazon-header text-amazon-yellow" onClick={()=>{
                           navigator('/home')     
                            }} >Back </button>
        
                        </ul>
                    </div>
                </div>
            </div>
        }
   
    { 
    
    status==="loading"&&
    <div className="text-center">
        <MySpinner/>
    </div>
    }
</div>
    </>
  )
}
