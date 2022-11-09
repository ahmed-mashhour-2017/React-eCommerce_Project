import React, { useEffect, useLayoutEffect, useState } from 'react'
import './product.css';
import {addToCart,remove} from '../../../helpers/cart-helper';
export default function Product({  data}) {


 const [addButton,setAddButton]=useState(true);
 let [amount,setAmount]=useState(0);
  let cartProducts  = [];

      useLayoutEffect(()=>{
        if("cart" in localStorage) {
           cartProducts = JSON.parse(localStorage.getItem("cart"));
           let exist = cartProducts.find(it => it.item.id === data.id)
           //console.log(exist);
           if(exist) {
            for(let it of cartProducts)
            {
               if(  it.item.id === data.id)
                  {
                    setAmount(it.quantity);
                    setAddButton(false);
                  }
            }
                 
           }
        }
      },[]);
         useEffect(()=>{
          addToCart(cartProducts,data,amount);
          },[amount]);

                return (         
         <div   className="col-md-3 col-sm-12">
        <div className="item">
            <div >
                <img src={data.image} alt=""/>
                <div className="body">
                    <h4>{ data.title }</h4>
                    <p>{ data.description }</p>
                </div>
            </div>
            {/* <div class="px-3 mb-2 d-flex justify-content-between align-datas-center ">
        <button class="btn btn-success" *ngIf="!addButton" (click)="addButton = true">Add To Cart</button>
        <div class="d-flex w-50" *ngIf="addButton">
            <input type="number" class="form-control" [(ngModel)]="amount">
            <button class="btn btn-danger" (click)="add();addButton = false">Add</button>
        </div>
        <span>{{data.price}} L.E</span>
        <br>
    </div> */}
            <div className="px-3 mb-2 d-flex justify-content-between align-datas-center ">
                {addButton&&<button className="btn btn-success" onClick={()=>{
                    setAddButton(false);
                    setAmount( 1);
              
                    
                }} >Add To Cart</button>}
                <div className="d-flex w-50"  >
                    <input type="number" className="form-control" value={amount} min="0" onInput={(e)=>{
                       
                        setAmount(parseInt( e.target.value));
                        e.target.value>0?setAddButton(false):setAddButton(true);
                    }}/>
                   {!addButton&&<button className="btn btn-danger" onClick={()=>{
                    remove(cartProducts,data);
                    setAddButton(true);
                    setAmount( 0);
                   }} >Remove</button>} 
                </div>
                <span>{data.price} L.E</span>
                <br/>
            </div>
        </div>
        </div>
       
   

  )
}




