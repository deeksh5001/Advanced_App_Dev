import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
const Contact=lazy(()=>import('./pages/Contact'))
import WebLayout from './layouts/WebLayout'
import Terms from './pages/Terms'
import UserDashboard from './pages/Shared/UserDashboard'
import UserLayout from './layouts/UserLayout'
import UserEvents from './pages/Shared/UserEvents'
import UserBookings from './pages/Shared/UserBookings'
import UserPayments from './pages/Shared/UserPayments'
import UserProfile from './pages/Shared/UserProfile'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AddEvent from './pages/Admin/AddEvent'
import AdminEvents from './pages/Admin/AdminEvents'
import AdminPayments from './pages/Admin/AdminPayments'
import AllUsers from './pages/Admin/AllUsers'
import AdminBookings from './pages/Admin/AdminBookings'
import AdminProfile from './pages/Admin/AdminProfile'




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
        <Route path='/terms' element={<Terms/>}></Route>
      </Route>
      <Route element={<UserLayout/>}>
        <Route path='/userDashboard' element={<UserDashboard/>}/>
        <Route path='/userEvents' element={<UserEvents/>}/>
        <Route path='/userBookings' element={<UserBookings/>}/>
        <Route path='/userPayments' element={<UserPayments/>}/>
        <Route path='/userProfile' element={<UserProfile/>}/>
      </Route>
      <Route element={<AdminLayout/>}>
        <Route path='/admin/Dashboard' element={<AdminDashboard/>}/>
        <Route path='/admin/addEvent' element={<AddEvent/>}/>
        <Route path='/admin/Events' element={<AdminEvents/>}/>
        <Route path='/admin/Payments' element={<AdminPayments/>}/>
        <Route path='/admin/Bookings' element={<AdminBookings/>}/>
        <Route path='/admin/users' element={<AllUsers/>}/>
        <Route path='/admin/Profile' element={<AdminProfile />}/>
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App
