 import './App.css';
import Header from './components/1-header/Header';
 
import {BrowserRouter,Routes,Route} from'react-router-dom';
import Footer from './components/6-footer/Footer';
import MainContainer from './components/MainContainer';
import Error from './components/7-othe_components/Error';
import About from './components/7-othe_components/About';
import Contact from './components/7-othe_components/Contact';
import Delivery from './components/7-othe_components/Delivery';
import Cart from './components/4-cart/Cart';
import Login from './components/8-auth/login/Login';
import Register from './components/8-auth/register/Register';
import CheckOut from './components/4-cart/CheckOut';
import { useSelector } from 'react-redux';
import AdminProducts from './components/5-admin/products/AdminProducts';
import AdminCart from './components/5-admin/cart/AdminCart';
 
function App() {

  const{ email}=useSelector((st)=>{if(st.user.user_data[0])
    return st.user.user_data[0];
    else return ""});
  return (
    
    <div className="App">
      <BrowserRouter>
    <Header/>
    
    <Routes>
      {
        email!=="admin@admin.com"&& <> 
         <Route path="" element={<MainContainer/>}/>
        <Route path="home" element={<MainContainer/>}/>
        </>
      
      }
      {
        email==="admin@admin.com"&& <> 
        <Route path="" element={<AdminProducts/>}/>
        <Route path="home" element={<AdminProducts/>}/>
        <Route path="admin" element={<AdminProducts/>}/>
        <Route path="admincart" element={<AdminCart/>}/>
       </>
      }
                     
                      <Route path="Delivery" element={<Delivery/>}/>
                      <Route path="Contact" element={<Contact/>}/>
                      <Route path="About" element={<About/>}/>

                      <Route path="Cart" element={<Cart/>}/>
                      <Route path="CheckOut" element={<CheckOut/>}/>
                      <Route path="Login" element={<Login/>}/>
                      <Route path="Register" element={<Register/>}/>
                     
                      <Route path="*" element={<Error/>}/>
    </Routes>
    
    {/* <BrowserRouter>
//             <Header/>
//             <div className="Comps">
//                 <Routes>
//                     <Route path="students" element={<Students/>}/>
//                     <Route path="*" element={<Error/>}/>
//                     <Route path="" element={<Students/>}/>
//                     <Route path="students/:id" element={<StudentDetails/>}/>
//                     <Route path="profile" element={<Profile/>}/>
//                     <Route path="testlifecycle" element={<TestLifeCycle/>}/>
//                 </Routes>
//             </div>
         </BrowserRouter> */}
   
    <Footer/>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
