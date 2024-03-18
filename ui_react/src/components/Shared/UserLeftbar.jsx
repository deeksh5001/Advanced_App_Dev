import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Home, Calendar, Book, CreditCard } from 'lucide-react'; // Importing Lucide React icons
import logo from '../../assets/Images/logo1.png';

const UserLeftbar = () => {
    const links=[
        {
          name:'Dashboard',
          path:'/userDashboard',
          icon: <Home size={20} color="#800080" /> // Using Lucide React icon for Dashboard
        },
        {
          name:'Events',
          path:'/userEvents',
          icon: <Calendar size={20} color="#800080" /> // Using Lucide React icon for Events
        },
        {
          name:'My Bookings',
          path:'/userBookings',
          icon: <Book size={20} color="#800080" /> // Using Lucide React icon for My Bookings
        },
        {
          name:'My Payments',
          path:'/userPayments',
          icon: <CreditCard size={20} color="#800080" /> // Using Lucide React icon for My Payments
        },
    ];

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <>
            <div className='w-[16vw] shadow-md flex flex-col'>
                <br />
                <h1 className="border-b-4 mt-[-18px] mb-0">
                    <a href="/">
                        <img src={logo} alt="Logo" style={{ width: "130px" }} />
                    </a>
                </h1>
                <div className='h-[85vh] flex flex-col gap-1'>
                    {links.map((link, index) => (
                        <NavLink key={index} to={link.path} className='p-4 border-b border-gray-200 hover:bg-gray-100 flex items-center justify-start font-semibold'>
                            {link.icon} {/* Displaying Lucide React icon */}
                            <span className='ml-2'>{link.name}</span> {/* Displaying link name */}
                        </NavLink>
                    ))}
                </div>
                {/* Logout button */}
                <div className='h-[7vh] flex justify-center items-end'>
                    <button className='bg-red-500 hover:bg-red-600 font-semibold text-white w-full h-full p-2 flex' onClick={handleLogout}>
                        <svg className="w-5 h-5 mt-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                        </svg>
                        <div className='mt-1'>&nbsp;Logout</div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default UserLeftbar;
