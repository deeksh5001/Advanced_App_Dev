import { CalendarCheck, CalendarDays, DollarSign, IndianRupee, TabletSmartphone, Users } from 'lucide-react'
import React from 'react'

const AdminDashboard = () => {
  return (
    
    <div className='container px-24 py-8 mx-auto bg-purple-100'>
      <h1 className='text-3xl font-semibold text-center text-purple-800'>Welcome, Admin!</h1><br/><br/>
 

      <div className='grid grid-cols-2 gap-8'>
        {/* First Card */}
        <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <Users size={32} color='#6B46C1' />
          </div>
          <h2 className='text-xl font-semibold text-center'>No. of Users</h2>
          <p className='text-4xl font-semibold text-center text-purple-800'>25</p>
        </div>

        {/* Second Card */}
        <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <TabletSmartphone size={32} color='#6B46C1' />
          </div>
          <h2 className='text-xl font-semibold text-center'>Total Events</h2>
          <p className='text-4xl font-semibold text-center  text-purple-800'>96</p>
        </div>

        {/* Third Card */}
        <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <DollarSign size={32} color='#6B46C1' />
          </div>
          <h2 className='text-xl font-semibold text-center'>No. of Payments made</h2>
          <p className='text-4xl font-semibold text-center  text-purple-800'>15</p>
        </div>

        {/* Fourth Card */}
        <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <CalendarCheck size={32} color='#6B46C1' />
          </div>
          <h2 className='text-xl font-semibold text-center'>No. of Bookings made</h2>
          <p className='text-4xl font-semibold text-center  text-purple-800'>19</p>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard