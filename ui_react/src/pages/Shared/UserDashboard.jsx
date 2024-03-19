import React from 'react';
import { CalendarCheck, CalendarDays, IndianRupee, TabletSmartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const nav=useNavigate();
  const handleNav=(e)=>{
    nav('/user/Events')
  }
  return (
    <div className='container px-8 py-8 mx-auto bg-purple-100 '>
      <h1 className='text-2xl font-bold text-center text-purple-900 mb-4'>Welcome, {localStorage.email}!</h1>
      <p className='text-lg font-semibold text-center text-purple-800 mb-8'>Account Details</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {/* First Card */}
        <div className='p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <CalendarDays size={32} color='#6B46C1' />
          </div>
          <h2 className='text-lg font-semibold text-center text-purple-800'>No. of Bookings</h2>
          <p className='text-4xl text-purple-800 font-semibold text-center'>5</p>
        </div>

        {/* Second Card */}
        <div className='p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <CalendarCheck size={32} color='#6B46C1' />
          </div>
          <h2 className='text-lg font-semibold text-center text-purple-800'>Bookings Confirmed</h2>
          <p className='text-4xl text-purple-800 font-semibold text-center'>4</p>
        </div>

        {/* Third Card */}
        <div className='p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <IndianRupee size={32} color='#6B46C1' />
          </div>
          <h2 className='text-lg font-semibold text-center text-purple-800'>No. of Payments</h2>
          <p className='text-4xl text-purple-800 font-semibold text-center'>3</p>
        </div>

        {/* Fourth Card */}
        <div className='p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300'>
          <div className='flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-200 rounded-full'>
            <TabletSmartphone size={32} color='#6B46C1' />
          </div>
          <h2 className='text-lg font-semibold text-center text-purple-800'>Total Events</h2>
          <p className='text-4xl text-purple-800 font-semibold text-center'>96</p>
        </div>
      </div>
<br/><br/><br/>
      <div className='bg-white w-full p-5'>
      <h1 className='text-2xl font-bold text-center text-purple-900 mb-4'>Latest Event Recommendations for you!</h1>  
      <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 ">
          <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-purple-800 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Event Id
              </th>
              <th scope="col" className="px-6 py-3">
                Event Type
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                1
              </th>
              <td scope="row" className="px-6 py-4">
                Conference
              </td>
              <td scope="row" className="px-6 py-4">
                An insightful conference on AI and future technologies.
              </td>
              
              <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={handleNav} 
                >
                  Learn more
                </button>
              </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   2
                </th>
                <td scope="row" className="px-6 py-4">
                   Product Launch
                </td>
                <td scope="row" className="px-6 py-4 ">
                    A thrilling event to announce Zoho's new product/service. 
                </td>
                <td className="px-6 py-4">
                <button
                  className="font-medium text-blue-600 hover:underline"
                  onClick={handleNav}
                >
                  Learn more
                </button>
              </td>
           </tr>
            </tbody>
            </table>
      </div>
    </div>
  );
};

export default UserDashboard;
