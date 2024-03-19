import React from 'react'

const AddEvent = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-3xl font-bold text-purple-800'>ADD EVENT</h1><br/>
        <form class="w-full max-w-2xl p-8 shadow-lg border-y-2 border-purple-700 ">
        <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Event Type
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-purple-100/2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Description
      </label>
    </div>
    <div class="md:w-2/3">
      <textarea class="bg-purple-100/2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
    </div>
  </div>
  
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Participants count
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-purple-100/2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number" />
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Event Mode
      </label>
    </div>
    <div class="md:w-2/3">
    <select class="block appearance-none w-full bg-purple-100/2 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Select</option>
          <option>Offline</option>
          <option>Hybrid</option>
        </select>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-800 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
        Charges
      </label>
    </div>
    <div class="md:w-2/3">
      <input class="bg-purple-100/2 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="number" />
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button class="shadow bg-purple-800 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        ADD
      </button>
    </div>
  </div>
</form>

    </div>
  )
}

export default AddEvent