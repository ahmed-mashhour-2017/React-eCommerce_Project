import React from 'react'
import './contact.css'
export default function Contact() {
  return (
    <>
    	<div id="Contact-us" className="  container mycolor  mx-3   border1" >
											<h2>Contact Us</h2>
												<form method="post" action="contact-post.html" className='col-8 border border-1 border-dark  p-4 mx-auto'>
													<div>
														<span><label>Name :       </label></span>
														<br/> 
														<span><input  name="userName" type="text"  className="myspan textbox"/></span>
													</div>
													<div>
														<span><label>E-mail :      </label></span>
														<br/> 
														<span><input name="userEmail" type="text"  className="myspan textbox"/></span>
													</div>
													<div>
														<span><label>Phone : </label></span>
														<br/> 
														<span><input name="userPhone" type="text"  className="myspan textbox"/></span>
													</div>
													<div>
														<span><label>Subject :       </label></span>
														<br/> 
														<span><textarea  className='mytextarea' name="userMsg"/>  </span>
													</div>
												<div>
													<br/> 
														<span><input type="submit" value="Submit"  className="myButton"/></span>
												</div>
												</form>
										</div>
    </>
  )
}
