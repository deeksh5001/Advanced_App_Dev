import React from 'react'

const UserPayments = () => {
  return (
    <>
    <h1 className='text-2xl text-center font-bold text-purple-800'>PAYMENT DETAILS</h1>
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-black-400 ">
        <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-purple-800 dark:text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Payment Id
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount Paid
                </th>
                <th scope="col" className="px-6 py-3">
                    Payment Date
                </th>
                <th scope="col" className="px-6 py-3">
                    Mode of Payment
                </th>
                
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-purple-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   1
                </th>
                <td scope="row" className="px-6 py-4">
                   Paid
                </td>
                <td scope="row" className="px-6 py-4 ">
                   $2999
                </td>
                <td className="px-6 py-4">
                    10/02/2024
                </td>
                <td className="px-6 py-4">
                    Credit
                </td>
            </tr>
            <tr className="odd:bg-white even:bg-purple-100 border-b dark:border-purple-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   2
                </th>
                <td scope="row" className="px-6 py-4">
                   Paid
                </td>
                <td scope="row" className="px-6 py-4 ">
                   $199
                </td>
                <td className="px-6 py-4">
                    19/02/2024
                </td>
                <td className="px-6 py-4">
                    Online Banking
                </td>
            </tr>
            <tr className="odd:bg-white even:bg-gray-50 border-b dark:border-purple-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   3
                </th>
                <td scope="row" className="px-6 py-4">
                   Paid
                </td>
                <td scope="row" className="px-6 py-4 ">
                   $499
                </td>
                <td className="px-6 py-4">
                    22/03/2024
                </td>
                <td className="px-6 py-4">
                    Cash
                </td>
            </tr>
            <tr className="odd:bg-white even:bg-purple-100 border-b dark:border-purple-700">
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                   4
                </th>
                <td scope="row" className="px-6 py-4">
                   Paid
                </td>
                <td scope="row" className="px-6 py-4 ">
                   $299
                </td>
                <td className="px-6 py-4">
                    02/02/2024
                </td>
                <td className="px-6 py-4">
                    Credit
                </td>
            </tr>
            </tbody>
    </table>
</div>

    </>
  )
}

export default UserPayments