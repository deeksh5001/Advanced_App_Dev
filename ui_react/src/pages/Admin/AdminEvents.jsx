import { Pencil, Trash } from 'lucide-react'
import React from 'react'

const AdminEvents = () => {
  return (
    <div>
  <div className='mt-4'>
    <h1 className='text-purple-800 font-bold text-3xl text-center'>ALL EVENTS</h1><br/>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left rtl:text-right text-black">
      <thead class="text-xs text-white uppercase bg-purple-800 dark:text-white">
          <tr>
              <th scope="col" class="px-6 py-3">
                  Event ID
              </th>
              <th scope="col" class="px-6 py-3">
                  Event Type
              </th>
              <th scope="col" class="px-6 py-3">
                  Description
              </th>
              <th scope="col" class="px-6 py-3">
                  Participant Count
              </th>
              <th scope="col" class="px-6 py-3">
                  Event Mode
              </th>
              <th scope="col" class="px-6 py-3">
                  Charges
              </th>
              <th scope="col" class="px-6 py-3">
                  Actions
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="bg-white-500 border-b border-purple-400">
              <th scope="row" class="px-6 py-4 font-medium text-black">
                  1
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-black">
                  Conference
              </th>
              <td class="px-6 py-4">
                 An insightful Conference on AI and future technologies
              </td>
              <td class="px-6 py-4">
                  100
              </td>
              <td class="px-6 py-4">
                  Offline
              </td>
              <td class="px-6 py-4">
                  $1999
              </td>
              <td className="px-6 py-4 flex gap-2">
                   {/* Lucide icon for edit */}
                   <div className="rounded-full bg-purple-200 flex items-center justify-center w-8 h-8">
                    <Pencil size={16} color="black" />
                  </div>
                  {/* Lucide icon for delete */}
                  <div className="rounded-full bg-red-300 flex items-center justify-center w-8 h-8">
                    <Trash size={16} color="black" />
                  </div>
              </td>
          </tr>
          <tr class="bg-purple-100 border-b border-purple-400">
              <th scope="row" class="px-6 py-4 font-medium text-black">
                  2
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-black">
                  Product Launch
              </th>
              <td class="px-6 py-4">
                  A thrilling event to launch Zoho's new product
              </td>
              <td class="px-6 py-4">
                  500
              </td>
              <td class="px-6 py-4">
                  Offline
              </td>
              <td class="px-6 py-4">
                  $599
              </td>
              <td className="px-6 py-4 flex gap-2">
                   {/* Lucide icon for edit */}
                   <div className="rounded-full bg-purple-200 flex items-center justify-center w-8 h-8">
                    <Pencil size={16} color="black" />
                  </div>
                  {/* Lucide icon for delete */}
                  <div className="rounded-full bg-red-300 flex items-center justify-center w-8 h-8">
                    <Trash size={16} color="black" />
                  </div>
              </td>
          </tr>
          <tr class="bg-white-500 border-b border-purple-400">
              <th scope="row" class="px-6 py-4 font-medium text-black">
                  3
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-black">
                  Shareholders Meeting
              </th>
              <td class="px-6 py-4">
                  An inspiring meeting to discuss the future of Meta
              </td>
              <td class="px-6 py-4">
                  50
              </td>
              <td class="px-6 py-4">
                  Hybrid
              </td>
              <td class="px-6 py-4">
                  $199
              </td>
              <td className="px-6 py-4 flex gap-2">
                   {/* Lucide icon for edit */}
                   <div className="rounded-full bg-purple-200 flex items-center justify-center w-8 h-8">
                    <Pencil size={16} color="black" />
                  </div>
                  {/* Lucide icon for delete */}
                  <div className="rounded-full bg-red-300 flex items-center justify-center w-8 h-8">
                    <Trash size={16} color="black" />
                  </div>
              </td>
          </tr>
          <tr class="bg-purple-100 border-b border-purple-400">
              <th scope="row" class="px-6 py-4 font-medium text-black">
                  4
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-black">
                  Company Milestones
              </th>
              <td class="px-6 py-4">
                  An exciting event to celebrate company's Milestones
              </td>
              <td class="px-6 py-4">
                  700
              </td>
              <td class="px-6 py-4">
                 Hybrid
              </td>
              <td class="px-6 py-4">
                 $399
              </td>
              <td className="px-6 py-4 flex gap-2">
                  {/* Lucide icon for edit */}
                  <div className="rounded-full bg-purple-200 flex items-center justify-center w-8 h-8">
                    <Pencil size={16} color="black" />
                  </div>
                  {/* Lucide icon for delete */}
                  <div className="rounded-full bg-red-300 flex items-center justify-center w-8 h-8">
                    <Trash size={16} color="black" />
                  </div>
              </td>
          </tr>
          <tr class="bg-white-500 border-b border-purple-400">
              <th scope="row" class="px-6 py-4 font-medium text-black">
                 5
              </th>
              <th scope="row" class="px-6 py-4 font-medium text-black">
                 Trade shows
              </th>
              <td class="px-6 py-4">
                  An event to connect companies with potential customers
              </td>
              <td class="px-6 py-4">
                  1000
              </td>
              <td class="px-6 py-4">
                  Offline
              </td>
              <td class="px-6 py-4">
                  $999
              </td>
              <td className="px-6 py-4 flex gap-2">
                   {/* Lucide icon for edit */}
                   <div className="rounded-full bg-purple-200 flex items-center justify-center w-8 h-8">
                    <Pencil size={16} color="black" />
                  </div>
                  {/* Lucide icon for delete */}
                  <div className="rounded-full bg-red-300 flex items-center justify-center w-8 h-8">
                    <Trash size={16} color="black" />
                  </div>
        
              </td>
          </tr>
      </tbody>
  </table>
</div>

  </div>

    </div>
  )
}

export default AdminEvents