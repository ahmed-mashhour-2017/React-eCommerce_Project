import { configureStore } from '@reduxjs/toolkit'
import   user_login   from './reducers/user_slice';
import  categories_slice   from './reducers/categories_slice';
import products_slice from './reducers/products_slice';
import   load_custom_product_slice   from './reducers/load_custom_product_slice';
import cart_slice from './reducers/cart_slice';
import  register_login   from './reducers/register_slice';
import admin_products_slice from './reducers/admin_reducers/admin_products_slice';
import admin_carts_slice from './reducers/admin_reducers/admin_carts_slice';
 
export const store = configureStore({
  reducer: {
 user:user_login,
 register:register_login,
 categories:categories_slice,
 products:products_slice,
 custom_category:load_custom_product_slice,
 cart:cart_slice,
 admin_products:admin_products_slice,
 admin_carts:admin_carts_slice
  }, 
})
