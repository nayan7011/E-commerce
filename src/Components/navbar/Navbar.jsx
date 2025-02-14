import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assests/logo.png'
import cart_icon from  "../Assests/cart_icon.png"
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'
import nav from '../Assests/nav.png'
const Navbar = () => {

        const [menu,setMenu]=useState("shop")
        const {getTotalCartItems} = useContext(Shopcontext)
        const menuRef =useRef();

        const dropdown_toggle =(e)=>{
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');


        }
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <img src={logo} alt="" />
      <p>SHOPKRO</p>

      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav} alt="" style={{height:"50px"}} />
      <ul  ref={menuRef} className="nav-menu">
        <li onMouseMove={()=>{setMenu("Shop")}}><Link style={{textDecoration:"none"}} to='/'>Shop</Link>{menu==="Shop"?<hr/>:<></>}</li>
        <li onMouseMove={()=>{setMenu("Mens")}}><Link style={{textDecoration:"none"}} to='/Mens'>Men</Link>{menu==="Mens"?<hr/>:<></>}</li>
        <li onMouseMove={()=>{setMenu("Women")}}><Link style={{textDecoration:"none"}} to='/Women'>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onMouseMove={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none"}} to='/Kids'>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
       
      </ul>
      <div className='nav-login-cart'>
      <Link to='/login'> <button>Login</button></Link> 
       <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
