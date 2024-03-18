import { UserIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminTopbar = () => {
    const links=[
        
        {
          name:'My Profile',
          path:'/admin/Profile',
          icon: <UserIcon/>
        },
        
    ]
  return (
    <>
    <header class="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">

    <h1 class="w-3/12">
        
    </h1>

   
    <nav class="nav font-semibold text-lg">
        <ul class="flex items-center ">
            {
             
              links.map((link,index)=>(
                <li className='p-4 border-b-2 border-purple-800 border-opacity-0 hover:border-opacity-100 hover:text-purple-500 duration-100 cursor-pointer'>
                <NavLink key={index} to={link.path} className='cursor-pointer nav-link'>
                  {link.icon}
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

export default AdminTopbar