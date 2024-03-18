import React from 'react'
import AdminTopbar from '../components/Admin/AdminTopbar'
import AdminLeftbar from '../components/Admin/AdminLeftbar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div>
         <>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <AdminLeftbar />
                <div className='w-screen'>
                    <AdminTopbar />
                    <div className='w-[85vw]h-[95vh] flex flex-col p-2 gap-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default AdminLayout