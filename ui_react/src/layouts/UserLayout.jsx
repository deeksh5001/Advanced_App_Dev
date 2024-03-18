import React from 'react'
import UserTopbar from '../components/Shared/UserTopbar'
import UserLeftbar from '../components/Shared/UserLeftbar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
         <>
            <div className='m-0 p-0 flex flex-row h-[100vh] w-[100vw] overflow-hidden'>
                <UserLeftbar />
                <div className='w-screen'>
                    <UserTopbar />
                    <div className='w-[85vw]h-[95vh] flex flex-col p-2 gap-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    </div>
  )
}

export default UserLayout