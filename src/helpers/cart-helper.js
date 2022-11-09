
  
export   const   addToCart=( cartProducts,data,amount)=>{
    // console.log(localStorage.getItem("cart"));
     if("cart" in localStorage) {
        cartProducts = JSON.parse(localStorage.getItem("cart"));
       // console.log(amount);
       let exist = cartProducts.find(it => it.item.id === data.id)
       //console.log(exist);
       if(exist) {
        
               let arr=cartProducts.filter(it => it.item.id !== data.id)
                
               cartProducts=arr;
              if(amount!==0){cartProducts.push({item:data,quantity:amount}) }
             
               
               localStorage.setItem("cart" , JSON.stringify(cartProducts))
               // cartProducts.push({item:data,quantity:amount})
             //update_quantity(cartProducts,amount);
               //alert("Product is already in your cart")
       }else {
         if(amount!==0){cartProducts.push({item:data,quantity:amount}) };
         localStorage.setItem("cart" , JSON.stringify(cartProducts))
       }
     } else {
       if(amount!==0){
         cartProducts.push({item:data,quantity:amount})
       localStorage.setItem("cart" , JSON.stringify(cartProducts))
       }
        
     }
   }
   export   const  remove=(cartProducts,data )=>{
   let arr=cartProducts.filter(it => it.item.id !== data.id)
                
   cartProducts=arr;
  
   localStorage.setItem("cart" , JSON.stringify(cartProducts))
   }

   