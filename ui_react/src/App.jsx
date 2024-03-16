import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
const Contact=lazy(()=>import('./pages/Contact'))
import WebLayout from './layouts/WebLayout'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback='Loading...'>   
    <Routes>
      <Route element={<WebLayout/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
