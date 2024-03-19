import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const nav=useNavigate();
  const [errors, setErrors] = useState({
    email: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
    for (const field in formData) {
      if (formData[field].trim() === '') {
        alert(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
        return;
      }
    }
    // Proceed with form submission if all fields are filled
    if (!validateEmail(formData.email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
      return;
    }
    

    setErrors({ email: ''});

    console.log(formData);
    localStorage.setItem('email',formData.email)
    toast.promise(
      new Promise((resolve) => {
        // Simulate some asynchronous operation
        setTimeout(() => {
          resolve('Logged in successfully!');
        }, 2000); // Adjust the delay as needed
      }),
      {
        loading: 'Logging in...',
        success: 'Logged in successfully!',
        error: 'An error occurred while logging in.',
      }
    ).then(() => {
      // Navigate to the next page after the toast is closed or after a delay
      setTimeout(() => {
        if(formData.email=="admin@gmail.com")
        {
          nav('/admin/Dashboard')
        }
        else{
        nav('/user/Dashboard');
        }
      }, 1000); // Adjust the delay as needed
    });
  };
  
  
  return (
    <>
    <section className="h-[100%] flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center mx-5 md:mx-0 md:my-2">
      <div><Toaster/></div>
      <div className="md:w-1/3 max-w-lg">
        <img
          src="https://img.freepik.com/premium-vector/black-man-working-laptop-freelance-remote-work_254685-456.jpg"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-md">
        <div className="text-center md:text-center"><br/><br/>
          <label className="mr-1 text-2xl font-semibold ">Log in </label>
        </div>
        <div className="my-6 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400"></div>
        <form onSubmit={handleSubmit}>        
          <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded outline-[#4a0677]"
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Email Address"
          autoFocus
        />
        {errors.email && <p className="text-red-600">{errors.email}</p>}
        <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded mt-5 outline-[#4a0677]"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <div className="mt-5 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          
        </div>
        <div className="text-center md:text-center  ">
          <button
            className="mt-5 bg-purple-800 hover:bg-purple-700 px-5 py-2 text-white uppercase rounded text-sm tracking-wider"
            type="submit"
          >
            Log in
          </button>
        </div>
        </form>

        <div className="mt-5 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{' '}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to='/register'
          >
            Register
          </Link>
        </div>
      </div>
    </section>
      <br/><br/>
      <br/><br/>
      <br/><br/><br/>     
      </>
  );
};

export default Login;
