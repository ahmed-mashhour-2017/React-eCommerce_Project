import React, { useLayoutEffect } from 'react'
 
import { useDispatch, useSelector } from 'react-redux';
 
import { fetch_products } from './../../../store_redux_toolkit/reducers/products_slice';
 
import MySpinner from './../../2-container/4-spinner/Spinner';
import Product from './Product';
 

export default function AllProduct() {
    
    const dispatch=useDispatch();
    const {products_data:data,status}=useSelector(st=>st.products);
    const {current_categry}=useSelector(st=>st.categories);
     useLayoutEffect(()=>{
        if(current_categry==='all')
        {
            dispatch(fetch_products("products"));
        }else{
            dispatch(fetch_products("products?category="+current_categry));
        }
     
     
     // fetch(`http://localhost:4000/categories`)
     // .then((res)=>{return res.json()})
     // .then((d)=>{
     //     // console.log(d)
     //     setData(d);
     // })        
     // .catch((err)=>{console.log(err)});
    
   } ,[current_categry]);
   //console.log(data.length );
   //console.log(current_categry);
   //const products=data.reverse();
   let arr=[...data].reverse() ;
    console.log( );
   let one_produt=data.map((item,i)=>{
return(
     
     <Product key={i.toString()}  data={item}    ></Product>
  
);}    
   );
  
  return (
    <>
    <div className=" m-0 p-4 container ">
     
    <div className="box mt-5 container">
        <div className="my-2 w-25">
           
        </div>
        { 
       (data.length>0&&status!=="loading")&& 
       <div id="products_container" className="row" >
        {one_produt}
       </div>
        }
        {
            
             
        }
       { 
      
        status==="error"&&
           <div className="text-center w-100 text-danger"   >

            <h1>Product Not Found</h1>

          </div>
    }
    {
        status==="loading"&&
           <div className="text-center w-100"  >
            <MySpinner/>
         </div>
    }
    </div>
</div>
    </>
  )
}
