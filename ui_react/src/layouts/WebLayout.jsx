import React from 'react'
import Navbar from '../components/Public/Navbar'
import Footer from '../components/Public/Footer'
import { Outlet } from 'react-router-dom'


const WebLayout = () => {
  return (
    <>
    <div className='h-screen w-screen p-0 m-0 '>
    <Navbar/>
    <div>
      <Outlet/>
      </div>
    <Footer/>
    </div>
    </>
  )
}

export default WebLayout