import React from 'react'

const AdminProfile = () => {
  return (
    <div>
        <div className='flex justify-center items-center'>

<section class=" bg-gray-100  bg-opacity-50 ">
  
  <div class="mx-auto container  shadow-md">
    <div class="bg-gray-100 p-4 border-t-2 bg-opacity-5 border-purple-400 rounded-t">
      <div class="max-w-sm mx-auto md:w-full md:mx-0">
        <div class="inline-flex items-center space-x-4">
          <img
            class="w-10 h-10 object-cover rounded-full"
            alt="User avatar"
            src="https://avatars3.githubusercontent.com/u/72724639?s=400&u=964a4803693899ad66a9229db55953a3dbaad5c6&v=4"
          />

          <h1 class="text-gray-600 font-semibold">Admin profile</h1>
        </div>
      </div>
    </div>
    <div class="bg-white space-y-6">
      <div class="md:inline-flex space-y-4 md:space-y-0 w-full p-3 text-gray-500 items-center">
        <h2 class="md:w-1/3 max-w-sm mx-auto font-semibold">Account</h2>
        <div class="md:w-2/3 max-w-sm mx-auto">
          <label class="text-sm text-gray-400 font-semibold">Email</label>
          <div class="w-full inline-flex border">
            <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
              <svg
                fill="none"
                class="w-6 text-gray-400 mx-auto"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <input
              type="email"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              placeholder="email@example.com"
              value="admin@gmail.com"
              readOnly
            />
          </div>
        </div>
      </div>

      <hr />
      <div class="md:inline-flex  space-y-4 md:space-y-0  w-full p-3 text-gray-500 items-center">
        <h2 class="md:w-1/3 mx-auto max-w-sm font-semibold">Personal info</h2>
        <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
          <div>
            <label class="text-sm text-gray-400 font-semibold">Full name</label>
            <div class="w-full inline-flex border">
              <div class="w-1/12 pt-2 bg-gray-100">
                <svg
                  fill="none"
                  class="w-6 text-gray-400 mx-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <input
                type="text"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                placeholder="Charly Olivas"
                value="Deeksha S"
                readOnly
              />
            </div>
          </div>
          <div>
            <label class="text-sm text-gray-400 font-semibold">Phone number</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100">
                <svg
                  fill="none"
                  class="w-6 text-gray-400 mx-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                type="text"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                placeholder="12341234"
                value="9345996780"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-5 text-gray-500 items-center">
        <h2 class="md:w-4/12 max-w-sm mx-auto font-semibold">Password</h2>

        <div class="md:w-5/12 w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
          <div class="w-full inline-flex border-b">
            <div class="w-1/12 pt-2">
              <svg
                fill="none"
                class="w-6 text-gray-400 mx-auto"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type="password"
              class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
              placeholder="New"
              value="*************"
              readOnly
            />
          </div>
        </div>

        <div class="md:w-3/12 text-center md:pl-6">
          <button class="text-white w-full mx-auto max-w-sm rounded-md text-center bg-purple-800 py-2 px-2 inline-flex justify-center focus:outline-none md:float-right">
            
            Change
          </button>
        </div>
      </div>
      <div class="w-full flex justify-start p-2 text-right text-gray-500">
       
          <button class="text-white  max-w-sm rounded-md text-center bg-purple-800 py-2 px-3 inline-flex justify-center focus:outline-none md:float-right">
            Edit profile
          </button>
      </div>
      <br/>
      <hr />
      
    </div>
  </div>
</section>
</div>
    </div>
  )
}

export default AdminProfile