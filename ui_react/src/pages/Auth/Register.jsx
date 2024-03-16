import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast'

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
    console.log(formData);
    toast.success("Successfully registered!");
    // You can add your form submission logic here
  };
  
    return (
    
    <section className="h-[100%] flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center mx-5 md:mx-0 md:my-2">
     <div><Toaster/></div>
      <div className="md:w-1/3 max-w-md">
        <div className="text-center md:text-center">
          <label className="mr-1 text-2xl font-semibold ">Register </label>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400"></div>
        <form onSubmit={handleSubmit}>
        <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          autoFocus
          required
          
        />
        <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded mt-5"
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="Email Address"
        />
        <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded mt-5"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded mt-5"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          className="text-md w-full px-4 py-2 border border-solid border-gray-400 rounded mt-5"
          type="password"
          id="password"
          name="confirmPassword"
          onChange={handleChange}
          placeholder="Confirm Password"
        />
        
        <div className="text-center md:text-center  ">
          <button
            className="mt-5 bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white uppercase rounded text-sm tracking-wider"
            type="submit"
          >
            Register
          </button>
        </div>
        </form>
        
        <div className="mt-5 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{' '}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to='/login'
          >
            Login
          </Link>
        </div>
      </div>
      <div className="md:w-1/3 max-w-lg">
        <img
          src="https://img.freepik.com/free-vector/postponed-concept-illustration_23-2148495316.jpg"
          alt="Sample image"
        />
      </div>
    </section>

  )
}

export default Register