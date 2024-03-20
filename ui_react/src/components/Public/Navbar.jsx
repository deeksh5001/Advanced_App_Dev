import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../assets/CSS/core.css'
import logo from '../../assets/Images/logo1.png'

const Navbar = () => {
  const links=[
    {
      name:'Home',
      path:'/'
    },
    {
      name:'Register',
      path:'/register'
    },
    {
      name:'Login',
      path:'/login'
    },
    {
      name:'Contact',
      path:'/contact'
    },
    
  ]
  return (
    <>
    <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">

    <h1 class="w-3/12">
        <a href="/">
    
        <img src={logo} style={{height:"50px"}}/>

          
        </a>
    </h1>

   
    <nav class="nav font-semibold text-lg">
        <ul class="flex items-center ">
            {
             
              links.map((link,index)=>(
                <li className='p-4 border-b-2 border-purple-900 border-opacity-0 hover:border-opacity-100 hover:text-purple-800 duration-150 cursor-pointer'>
                <NavLink key={index} to={link.path} className='cursor-pointer nav-link'>
                  {link.name}
                </NavLink>
                </li>
    
              ))
    
            }
        </ul>
    </nav>

    
   
</header>
    </>
  )
}

export default Navbar