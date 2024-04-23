import React, { useState } from 'react'
import defaultProfilePhoto from '../../assets/Images/profile2.png'
const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(defaultProfilePhoto);
  
  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };
  return (
    <div className='flex justify-center items-center'>

    <section class=" bg-gray-100  bg-opacity-50 ">
      
      <div class="mx-auto container shadow-md">
        <div class="bg-gray-100 p-2 border-y-2  bg-opacity-5 border-purple-500 rounded-t">
          <div class="max-w-sm mx-auto md:w-full md:mx-0">
            <div class="inline-flex items-center space-x-4">
              <img
                class="w-12 h-12 object-cover rounded-full"
                alt="User avatar"
                src={profilePhoto}
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
                    value="Admin"
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
                    value="9123456780"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div class="md:inline-flex w-full space-y-4 md:space-y-0 p-5 text-gray-500 items-center">
            <h2 class="md:w-4/12 max-w-sm mx-auto font-semibold">Password</h2>

            <div class="md:w-full w-full md:pl-9 max-w-sm mx-auto space-y-5 md:inline-flex pl-2">
              <div class="w-full inline-flex border-b">
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

            
          </div>
          <div class="w-full flex justify-end p-2 text-right text-gray-500">
          <button
            className="text-white max-w-sm rounded-md text-center bg-purple-500 py-2 px-3 inline-flex justify-center focus:outline-none md:float-right"
            onClick={handleEditClick}>
            Edit profile
          </button>
          </div>
          <br/>
          <hr />

        {/* Popup form */}
        {isEditing && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div class="p-2 md:p-4">
            <div class="w-full px-4 pb-8 mt-4 sm:max-w-xl sm:rounded-lg">
                <h2 class=" text-2xl font-bold sm:text-xl text-center">Admin Profile</h2>

                <div class="grid max-w-2xl mx-auto mt-8">
                    <div class="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">

                        <img class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                            src={profilePhoto}
                            alt="Bordered avatar"/>

<div class="flex flex-col space-y-5 sm:ml-8">
  <input
    type="file"
    accept="image/*"
    onChange={handleProfilePhotoChange}
    className="hidden" 
    id="profile-photo-upload" 
  />
  <label
    htmlFor="profile-photo-upload" // Associate the label with the input element
    className="py-3 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-indigo-700 rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 cursor-pointer"
  >
    Change picture
  </label>
</div>

                    </div>

                    <div class="items-center mt-8 sm:mt-10 text-[#202142]">

                        <div class="mb-2 sm:mb-6">
                            <label for="email"
                                class="block mb-2 text-sm font-medium text-indigo-900">Your
                                email</label>
                            <input type="email" id="email"
                                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your.email@mail.com" value="admin@gmail.com" required/>
                        </div>
                        
                            <div class="mb-2 sm:mb-6">
                                <label for="first_name"
                                    class="block mb-2 text-sm font-medium text-indigo-900 ">Your
                                    full name</label>
                                <input type="text" id="name"
                                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your first name" value="Admin" required/>
                            </div>


                        <div class="mb-2 sm:mb-6">
                            <label for="phone"
                                class="block mb-2 text-sm font-medium text-indigo-900 ">Phone number</label>
                            <input type="text" id="phone"
                                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your profession" value="9345234512" required/>
                        </div>
                        <div class="mb-2 sm:mb-6">
                            <label for="phone"
                                class="block mb-2 text-sm font-medium text-indigo-900 ">Password</label>
                            <input type="password" id="phone"
                                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your profession" value="9345234512" required/>
                        </div>

                        

                        <div class="flex justify-end">
                            <button type="button" onClick={handleCancelClick}
                                class="text-white  bg-red-600  hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Cancel</button>
                            <button type="submit" onClick={handleCancelClick}
                                class="text-white ml-4 bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

              </div>
            </div>
          </div>
        )}  
        </div>
      </div>
    </section>
    </div>
  )
}

export default AdminProfile