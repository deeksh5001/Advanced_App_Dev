import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className="h-[100%] flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center mx-5 md:mx-0 md:my-2">
      <div className="md:w-1/3 max-w-lg">
        <img
          src="https://img.freepik.com/premium-vector/black-man-working-laptop-freelance-remote-work_254685-456.jpg"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-md">
        <div className="text-center md:text-center">
          <label className="mr-1 text-2xl font-semibold ">Log in </label>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400"></div>
        <form>        
          <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded"
          type="text"
          placeholder="Email Address"
          autoFocus
        />
        <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded mt-5"
          type="password"
          placeholder="Password"
        />
        <div className="mt-5 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          
        </div>
        <div className="text-center md:text-center  ">
          <button
            className="mt-5 bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white uppercase rounded text-sm tracking-wider"
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
  );
};

export default Login;
