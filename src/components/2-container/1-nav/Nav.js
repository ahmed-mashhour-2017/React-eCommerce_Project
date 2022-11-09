import React, {   useEffect, useLayoutEffect,  useState }  from 'react'
 
import titleCase from '../../../helpers/title_case';
 import './nav.css';
  
import { useDispatch, useSelector } from 'react-redux';
import { change_category, fetch_categories } from './../../../store_redux_toolkit/reducers/categories_slice';
 
 export default function Nav() {

     const dispatch=useDispatch();
      const [searchValue, setSearchValue] = useState("search") ;
     const {categories_data:data,current_categry}=useSelector(state=>state.categories)
     // const search=useRef();
     
    useLayoutEffect(()=>{
      dispatch(fetch_categories("categories")); 
      
       
      // fetch(`http://localhost:4000/categories`)
      // .then((res)=>{return res.json()})
      // .then((d)=>{
      //     // console.log(d)
      //     setData(d);
      // })        
      // .catch((err)=>{console.log(err)});
     
    } ,[]);
    useEffect(()=>{
       setSearchValue(current_categry);
    },[current_categry])
   // console.log("categories_data"+data);
    const detectChanges=(e)=>{
       if(e.target.type==="text")
       {
        //console.log(e.target.value.toLowerCase());
        setSearchValue(e.target.value.toLowerCase())
       // dispatch(change_category(e.target.value.toLowerCase()))
    
      }else{
      // console.log(e.target.name);
       dispatch(change_category(e.target.name))
      }
        
      
    }

    
    let TheItemsLinks=data.filter((item,index)=>{return index<6})
      TheItemsLinks=TheItemsLinks.map((item,i)=>{
      return ( 
       <li className="nav-item" key={i.toString()} id={i} onClick={detectChanges}>
       <a className="nav-link" href="#!" name={  item  }  >{titleCase(item)}</a>
     </li>
      );
  });
   
   let TheItemsList=data.map((item,i)=>{
    return (  
      <option key={i} value={titleCase(item)}   onChange={detectChanges}> </option> 
    );
});
   
  return (
    <>
    <nav className="navbar navbar-expand-sm navbar-dark bg-amazon-nav   "   >
  <div className=" container  ">
    <a className="navbar-brand" onClick={detectChanges} name="all" href="#!">All</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        {/* <li className="nav-item" *ngFor="let category of data;let i=index;">
          <a className="nav-link" onClick={detectChanges} name={{category}} *ngIf="i<7">{{category |titlecase}}</a>
        </li> */}
          {
            TheItemsLinks
          }
      </ul>
      <form className="d-flex">
        <input list="browsers" className="form-control m-0 p-0" type="text" placeholder="search" value={searchValue} 
          onChange={detectChanges}
        //  ref={search} 
        onKeyPress={(e )=>{
          // if(e.keyCode === 13){
          //   e.preventDefault(); // Ensure it is only this code that runs
          //      dispatch(change_category(searchValue))
          //   alert("Enter was pressed was presses");
        // } 
          
           
       // console.log(search.current.value.toLowerCase());
        }}
          />
        <datalist id="browsers">
          {/* <option value="{{option}}" *ngFor="let option of data" onChange={detectChanges}> */}
          {TheItemsList}
        </datalist>
        <button className="btn bg-amazon-yellow" type="button" onClick={()=>{
          dispatch(change_category(searchValue))
       // console.log(search.current.value.toLowerCase());
        }}><i className="fa-solid fa-magnifying-glass"></i></button>
      </form>
    </div>
  </div>
</nav>


    </>
  )
}

