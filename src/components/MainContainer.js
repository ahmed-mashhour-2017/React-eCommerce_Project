import React from 'react'
import Selector from './2-container/3-selector/Selector';
import Slider from './2-container/2-slider/Slider';
import AllProduct from './3-show_products/all_product/AllProduct';
import { useSelector } from 'react-redux';
import Nav from './2-container/1-nav/Nav';

export default function MainContainer() {

    const { current_categry}=useSelector(state=>state.categories);
  return (
    <>
   <Nav/>
   
   {(current_categry==="all" )&& <Slider/>}
    <Selector/>
    <AllProduct/>
    </>
  )
}
