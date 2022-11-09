//import React, { useState } from 'react'
//import { fetch_categories } from './../../../store_redux_toolkit/fetch_data/fetch_categories';
 import { useSelector } from 'react-redux';
import titleCase from '../../../helpers/title_case';
import { useDispatch } from 'react-redux';
import { change_category } from '../../../store_redux_toolkit/reducers/categories_slice';
import { useLayoutEffect, useState } from 'react';

export default function Selector() {
  // let option_id = [0, 1];
  // let options = [{name: 'a'}, {name: 'b'}];
  // let selectedOptionId = 0;
  const {categories_data,current_categry}=useSelector(state=>state.categories)
  const [search, setSearch] = useState("all");

const dispatch=useDispatch();
   //const [catergories,setCatergories]=useState(  fetch_categories());
   // console.log(catergories);
   //const {categories_data}=useSelector(state=>state.categories)

  // useLayoutEffect(()=>{
    const detectChanges=(e)=>{
      //console.log(e.target.value);
      
      dispatch(change_category(e.target.value))
    }
   //  console.log(categories_data);
  // },[])
  useLayoutEffect(()=>{
    setSearch(current_categry);
  },[current_categry]);
  let TheItemsList=categories_data.map((item,i)=>{
     
    return (  
      <option key={i} value={item}   onChange={detectChanges} >{titleCase(item)}</option> 

    );
  });
   
    
  return (
    <>
    <h2  className="text-center text-amazon-yellow">Select Category :</h2>
    <select className="form-control my-3" onChange={detectChanges} value={search}>
        <option value="all" >All</option>
        {/* <option value="{{option}}" *ngFor="let option of data">{{option}}</option> */
        TheItemsList
        }
       
    </select>
     {/* <select  className="form-control" onChange={detectChanges} defaultValue={i}>
        {option_id.map(id =>
        <option key={id} value={id}>{options[id].name}</option>
        )}
      </select> */}
    </>
  )
}
