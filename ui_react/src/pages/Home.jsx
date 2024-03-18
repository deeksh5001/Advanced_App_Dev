import React from 'react';
import { CalendarCheck, ClipboardCheck, Database, LaptopMinimal, MessageCirclePlus, Target, Users } from 'lucide-react'; // Importing Lucide React icons
import { Link } from 'react-router-dom';
import woman from '../assets/Images/woman.png';
// Import the background image
import heroBackground from '../assets/Images/BackgroundImage.png';

const Home = () => {
    return (
        <div className="bg-purple-100 min-h-screen flex flex-col items-center justify-center text-center">
            {/* Hero Section with Background Image */}
            <section className="py-44" style={{ backgroundImage: `url(${heroBackground})`, backgroundSize:'cover', width:'100%',backgroundPosition: 'center', }}>
                <h1 className="text-6xl font-bold text-white mr-10 text-right">Welcome to Corpify ;)</h1><br/>
                <p className="text-xl text-white mr-10 text-right">Your go-to corporate event management company</p>
            </section>

             {/* Services Section */}
             <section className="py-20 px-4">
                <h2 className="text-3xl font-bold text-purple-800 mb-8">Our Services</h2>
                <div className="flex flex-wrap justify-center">
                    {/* Event Planning */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
                            <CalendarCheck size={60} color="#7D3B98" />
                            <h3 className="text-xl font-semibold text-purple-800 my-4">Event Planning</h3>
                            <p className="text-purple-700 text-center mb-4">We plan and execute memorable corporate events tailored to your needs. From venue selection to entertainment, we've got you covered.</p>
                          
                        </div>
                    </div>

                    {/* On-site Coordination */}
                    <div className="w-full md:w-1/3 px-4 mb-8">
                        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
                            <ClipboardCheck size={60} color="#7D3B98" />
                            <h3 className="text-xl font-semibold text-purple-800 my-4">On-site Coordination</h3>
                            <p className="text-purple-700 text-center mb-4">Our experienced team ensures smooth on-site coordination for flawless events. Let us handle the logistics while you enjoy the event.</p>
                           
                        </div>
                    </div>
                  <br/> 
                    {/* Digital Solutions */}
                    <div className="w-full md:w-2/3 px-4 mb-8">
                        <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col items-center">
                            <LaptopMinimal size={60} color="#7D3B98" />
                            <h3 className="text-xl font-semibold text-purple-800 my-4">Digital Solutions</h3>
                            <p className="text-purple-700 text-center mb-4">We provide innovative digital solutions to enhance your event experience. From virtual reality to live streaming, we bring your event to life both online and offline.</p>
                           
                        </div>
                    </div>
                </div>
            </section>

            {/* Sign Up Section */}
            <section className="py-20 bg-white w-full flex flex-row">
              <div className='ml-10 mt-20 mr-10'>
                <h2 className="text-3xl font-bold text-purple-800 mb-8">Unlock the Full Potential of Corpify!</h2>
                <p className="text-xl text-purple-700">Ready to take your corporate events to the next level? Sign up now to access exclusive features and resources.</p>
                <Link to='/register'>
                <button className="mt-8 bg-purple-800 text-white py-3 px-8 rounded-full hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">Sign Up</button></Link>
                </div>
                <div><img src={woman} style={{width:"400px"}}/></div>
            </section>
            <br/>
             {/* How Corpify Solves Your Event Challenges Section */}
             <section className="py-20 w-full ">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-purple-800 mb-8">How does Corpify solve your Event challenges?</h2>
                    <p className='text-purple-800 text-lg'>Corpify enhances event coordination by offering intuitive digital tools and personalized services, empowering you to overcome logistical hurdles effortlessly.
We facilitate efficient communication channels and streamline the booking process, ensuring seamless event planning tailored to your specific needs.</p><br/><br/><br/>
                    <div className="flex flex-col lg:flex-row gap-20 justify-center items-center">
                        {/* Efficient Communication */}
                        <div className="flex flex-col items-center">
                            <Users size={80} color="#6A28E6" className="animate-pulse" />
                            <p className="text-lg text-purple-700">Efficient Communication</p>
                        </div>

                        {/* Tailored Event Services */}
                        <div className="flex flex-col items-center">
                            <LaptopMinimal size={80} color="#6A28E6" className="animate-pulse" />
                            <p className="text-lg text-purple-700">Event Services</p>
                        </div>

                        {/* Simplified Booking Process */}
                        <div className="flex flex-col items-center">
                            <ClipboardCheck size={80} color="#6A28E6" className="animate-pulse" />
                            <p className="text-lg text-purple-700">Simplified Booking </p>
                        </div>
                        <br/><br/>
                        {/* Streamlined Experience */}
                        <div className="flex flex-col items-center">
                            <MessageCirclePlus size={80} color="#6A28E6" className="animate-pulse" />
                            <p className="text-lg text-purple-700">Streamlined Experience</p>
                        </div>

                        {/* Data Analytics */}
                        <div className="flex flex-col items-center">
                            <Database size={80} color="#6A28E6" className="animate-pulse" />
                            <p className="text-lg text-purple-700">Data Analytics</p>
                        </div>

                        {/* Targeted Marketing */}
                        <div className="flex flex-col items-center">
                            <Target size={80} color="#6A28E6" className="animate-pulse" />
                            <p className="text-lg text-purple-900">Targeted Marketing</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
