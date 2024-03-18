import React from 'react';
import { CalendarCheck, CalendarDays, IndianRupee, TabletSmartphone } from 'lucide-react';

const UserDashboard = () => {
  return (
    <div className='container px-24 py-8 mx-auto bg-purple-100'>
      <h1 className='text-3xl font-semibold text-center'>Welcome, {localStorage.email}!</h1>
      <p className='text-lg font-semibold text-center mb-8'>Account Details</p>

      <div className='grid grid-cols-2 gap-8'>
        {/* First Card */}
        <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <CalendarDays size={32} color='#6B46C1' />
          </div>
          <h2 className='text-xl font-semibold text-center'>No. of Bookings</h2>
          <p className='text-lg font-semibold text-center'>5</p>
        </div>

        {/* Second Card */}
        <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <CalendarCheck size={32} color='#6B46C1' />
          </div>
          <h2 className='text-xl font-semibold text-center'>Bookings Confirmed</h2>
          <p className='text-lg font-semibold text-center'>4</p>
        </div>

        {/* Third Card */}
        <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <IndianRupee size={32} color='#6B46C1' />
          </div>
          <h2 className='text-xl font-semibold text-center'>No. of Payments</h2>
          <p className='text-lg font-semibold text-center'>3</p>
        </div>

        {/* Fourth Card */}
        <div className='p-8 bg-white rounded-lg shadow-lg hover:shadow-xl'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <TabletSmartphone size={32} color='#6B46C1' />
          </div>
          <h2 className='text-xl font-semibold text-center'>Total Events</h2>
          <p className='text-lg font-semibold text-center'>96</p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
