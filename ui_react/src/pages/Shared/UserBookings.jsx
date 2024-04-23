
import React, { useState } from 'react';
import '../../assets/CSS/core.css'
import { Calendar, CreditCard, DollarSign, Lock, User } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

    const UserBookings = () => {
        const [showPopup, setShowPopup] = useState(false);

        const handlePayClick = () => {
            setShowPopup(true);
        };
    
        const handleClosePopup = () => {
            setShowPopup(false);
        }
    return (
        <div>
            <div><Toaster/></div>     
            {showPopup && (
                <div className="fixed-overlay w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                <div className='bg-white p-8 rounded-md'>
                  <h2 className="text-2xl font-bold text-black mb-4">Payment Details</h2>
                  <form onSubmit={()=>{toast.success("Payment successful");setShowPopup(false);}}>
                    <div className="mb-6 flex items-center relative">
                      <User className="absolute flex items-center ml-2 text-purple-500" size={24} />
                      <input required type="text" id="cardholderName" placeholder="Cardholder Name" className="w-full p-3 pl-10 bg-grey-800 border border-purple-700 rounded-md focus:outline-none focus:border-purple-500" />
                    </div>
                    <div className="mb-6 flex items-center relative">
                      <DollarSign className="absolute  flex items-center ml-2 text-purple-500" size={24} />
                      <select id="mode"  className="w-full p-3 pl-10 bg-grey-800 border border-purple-700 rounded-md focus:outline-none focus:border-purple-500" >
                        <option className='text-grey-500'>Select Payment mode</option>
                        <option>Cash</option>
                        <option>Credit</option>
                        <option>Online Banking</option>
                        </select>
                    </div>
                    <div className="mb-6 flex items-center relative">
                      <CreditCard className="absolute  flex items-center ml-2 text-purple-500" size={24} />
                      <input required type="text" id="cardNumber" placeholder="Amount" className="w-full p-3 pl-10 bg-grey-800 border border-purple-700 rounded-md focus:outline-none focus:border-purple-500" />
                    </div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-1/2 mr-2 flex flex-row items-center relative">
                        <Calendar className="absolute  flex items-center ml-2 text-purple-500" size={24} />
                        <input required type="date" id="expiryDate" placeholder="Event Date" className="w-full p-3 pl-10 bg-grey-800 border border-purple-700 rounded-md focus:outline-none focus:border-purple-500" />
                      </div>
                      <div className="w-1/2 ml-2 flex items-center relative">
                        <Lock className="absolute  flex items-center ml-2 text-purple-500" size={24} />
                        <input required type="password" id="cvv" placeholder="Password" className="w-full p-3 pl-10 bg-grey-800 border border-purple-700 rounded-md focus:outline-none focus:border-purple-500" />
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button type="submit" className="px-4 py-2 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:bg-purple-700">Pay</button>
                      <button type="button" className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:bg-red-700" onClick={handleClosePopup}>Cancel</button>
                    </div>
                  </form>
                </div>
              </div>
              
            )}
            <h1 className='text-2xl text-center font-bold text-purple-800'>BOOKING DETAILS</h1><br/>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 ">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-purple-800 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Booking Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Event Type
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Submission Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Event Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Participants Count
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mode
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Booking status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-purple-700">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            1
                            </th>
                            <td scope="row" className="px-6 py-4">
                            Conference
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                An insightful conference on AI and future techhnologies.
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                23/02/2024
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                24/04/2024
                            </td>
                            <td className="px-6 py-4">
                                100
                            </td>
                            <td className="px-6 py-4">
                                Offline
                            </td>
                            <td className="px-6 py-4">
                                Confirmed
                            </td>
                            <td className="px-6 py-4">
                                $1999
                            </td>
                        
                            <td className="px-6 py-4">
                            <button
                             className="font-medium text-blue-600 hover:underline"
                             onClick={handlePayClick}>
                            Pay
                             </button>
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-purple-100 border-b dark:border-purple-700">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            2
                            </th>
                            <td scope="row" className="px-6 py-4">
                            Product Launch
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                A thrilling event to announce Zoho's new product/service. 
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                19/02/2024
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                09/04/2024
                            </td>
                            <td className="px-6 py-4">
                                500
                            </td>
                            <td className="px-6 py-4">
                                Offline
                            </td>
                            <td className="px-6 py-4">
                                Confirmed
                            </td>
                            <td className="px-6 py-4">
                                $599
                            </td>
                        
                            <td className="px-6 py-4">
                            <button
                             className="font-medium text-blue-600 hover:underline"
                             onClick={handlePayClick}>
                            Pay
                             </button>
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-purple-700">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            3
                            </th>
                            <td scope="row" className="px-6 py-4">
                            Shareholder Meeting
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                A inspiring meeting to discuss the future of Meta.
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                13/02/2024
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                30/04/2024
                            </td>
                            <td className="px-6 py-4">
                                50
                            </td>
                            <td className="px-6 py-4">
                                Hybrid
                            </td>
                            <td className="px-6 py-4">
                                Pending
                            </td>
                            <td className="px-6 py-4">
                                $199
                            </td>
                            <td className="px-6 py-4  text-blue-500">--</td>
                            
                        </tr>
                        <tr className="odd:bg-white even:bg-purple-100 border-b dark:border-purple-700">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            4
                            </th>
                            <td scope="row" className="px-6 py-4">
                            Company milestones
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                An Exciting celeboratory event to celebrate a company's milestones.
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                10/02/2024
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                04/04/2024
                            </td>
                            <td className="px-6 py-4">
                                700
                            </td>
                            <td className="px-6 py-4">
                                Hybrid
                            </td>
                            <td className="px-6 py-4">
                                Confirmed
                            </td>
                            <td className="px-6 py-4">
                                $399
                            </td>
                            
                            <td className="px-6 py-4">
                            <button
                             className="font-medium text-blue-600 hover:underline"
                             onClick={handlePayClick}>
                            Pay
                             </button>
                            </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-purple-100 border-b dark:border-purple-700">
                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                            5
                            </th>
                            <td scope="row" className="px-6 py-4">
                                Trade shows
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                An event to connect companies with potential customers.
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                03/03/2024
                            </td>
                            <td scope="row" className="px-6 py-4 ">
                                06/04/2024
                            </td>
                            <td className="px-6 py-4">
                                1000
                            </td>
                            <td className="px-6 py-4">
                                Offline
                            </td>
                            <td className="px-6 py-4">
                                Pending
                            </td>
                            <td className="px-6 py-4">
                                $999
                            </td>
                    
                            <td className="px-6 py-4 text-blue-500">
                            --
                            </td>
                        </tr>
                        </tbody>
                </table>
            </div>
            
        </div>
    )
    }

    export default UserBookings