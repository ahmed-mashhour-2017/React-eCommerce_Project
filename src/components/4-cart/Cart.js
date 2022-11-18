import React, {     useLayoutEffect,  useState } from 'react';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { add_to_cart } from './../../store_redux_toolkit/reducers/cart_slice';
import axios from 'axios';
export default function Cart() {
   
    let [total,setTotal] = useState(0);
    const [success,setSuccess ]  = useState(false);
    const{Loggin_state:isLogedIn,user_data}=useSelector(st=>st.user);
    const navigateor=useNavigate();
    let [cartProducts,setcartProducts]  =useState([{item:'',quantity:0}]) ;
   // let dispatch_cart=useDispatch();
  useLayoutEffect(()=>{
    if("cart" in localStorage ) {
 
 
    setcartProducts(JSON.parse(localStorage.getItem("cart") ) )  ; 
 
      
     
      //console.log(cartProducts);
      // let x=JSON.parse(localStorage.getItem("cart")) ;
      // console.log(x);
    }
    getCartTotal()
    //console.log( ...cartProducts);
},[[...cartProducts].quantity ]);
  
useLayoutEffect(()=>{
   getCartTotal()
 
},[[...cartProducts].quantity,cartProducts.length ]);

const getCartTotal=()=> {
  //problem solved after declare var result and didn't use total direct
        let result=0;
        if(cartProducts.length!==0){
          for(let x in cartProducts) {
              setTotal(result += parseInt(cartProducts[x].item.price)  * parseInt( cartProducts[x].quantity)) ;
            }
        }else{
          setTotal(0)
        }
  
}
 

  const addAmount=(index)=> {
    cartProducts[index].quantity++
    getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(cartProducts))
    }
  const minsAmount=(index)=> {
    cartProducts[index].quantity>0?cartProducts[index].quantity--:cartProducts[index].quantity-=0;
    getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(cartProducts))
  }
  const detectChange=(index,value) =>{
    cartProducts[index].quantity=value;
    getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(cartProducts))
  }

  const deleteProduct=(index)=> {
    //[...cartProducts].splice(index ,1)
    let x=[...cartProducts].filter((it,i)=>{
      return i!==index;
    })
    setcartProducts(x)
    getCartTotal()
    localStorage.setItem("cart" , JSON.stringify(cartProducts))
  }
//clearCart
  const clearCart=()=> {
    //must clear cartProducts  in compponent  and local storage  
    let x=[...cartProducts].filter(()=>{
      return false;
    })
    setcartProducts(x) ;
  
    getCartTotal();
    localStorage.setItem("cart" , JSON.stringify([]))
     
  }

const post_product=()=>{
  let products=[...cartProducts].map((it )=>{
    return({  "productId": it.item.id,
    "quantity": it.quantity})

  });
//console.log(list_orders);
let post_cart=
  {
    "userId": user_data[0].id,
    "date":Date().toString(),
    products
  }

//console.log(post_cart);
//dispatch_cart(add_to_cart(post_cart))
axios.post("http://localhost:4000/carts/",post_cart);
}
  const addCart=()=> {
//    let products = cartProducts.map(item => {
//     return {productId:item.item.id , quantity:item.quantity
//     }
//    })
if(total>0){
  post_product();
  setSuccess(true);
   setTimeout(() => {
    setSuccess(false);
    navigateor("/CheckOut")
   }, 3000);
  }else{
    alert("your cart is empty")
  }
}
 
  //problem solved after write ...cartProducts
  let orders=[...cartProducts].map((it,i)=>{
    return(
      <tr  key={i}>
      <td><img src={it.item.image} alt=""/></td>
      <td>{ it.item.title} </td>
      <td>{ it.item.price} L.E</td>
      <td>
          <div className="quantity">
              <button className="btn btn-dark" onClick={()=>{
                  addAmount(i);
              }} >+</button>
              <input className="form-control"  type="number" value={it.quantity}onChange={(e)=>{
                  detectChange(i,parseInt( e.target.value) );
              }} 
             
              
              min="0"/>
              <button className="btn btn-dark" onClick={()=>{
                  minsAmount(i);
              }} >-</button>
          </div>
      </td>
      <td>{it.item.price * it.quantity} L.E</td>
      <td>
          <button className="btn btn-danger" onClick={()=>{
              deleteProduct(i);
          }}  >Delete</button>
      </td>
</tr>  
    )
  });
       

  return (
    <>
    
<div className="cartBox">
    <h1 className="text-danger">Shopping Cart</h1>
  <div className="headCart">
    <p className="lead">You have <b className="text-danger ">{ cartProducts.length  }</b> item in your cart</p>
    <span className="text-danger card-header" onClick={()=>{
      clearCart()
     
    }} >Clear Shopping Cart</span>
  </div>
    <table className="table table-striped">
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th className="w-25">Quantity</th>
                <th>Totle</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            
            {
              
              orders
            }
             
   
        </tbody> 
        <tfoot>
            <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>Total : {total} LE</th>
                <th><button className="btn btn-success" onClick={()=>{
                    
                   if(isLogedIn)  {addCart()}else {alert ("you must be logged in")  ; navigateor('/login') ;} 
                }}>Order Now</button></th>
            </tr>
        </tfoot>
    </table>
    
</div>
{
 success&&<div className="alert alert-success" role="alert"  ><strong>Well done!</strong> Your Order is Successfully Send <br/>Now You Will Redirect To Check Out Payment</div> 
}
    </>
  )
}
