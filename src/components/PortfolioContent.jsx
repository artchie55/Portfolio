import React from 'react'
import jollibee from '../images/jollibee.png';
import crispyking from '../images/crispyking.png';
import partnersdao from '../images/partnersdaopic.png';
import CozyGetaways from '../images/CozyGetaways.png';
import realestate from '../images/realestate.png';
import PriceTracker from '../images/PriceTracker.png'
import { TfiNewWindow } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";


const PortfolioContent = () => {
  return (
    <div id='Projects'>
    <div class='Container' className='relative max-lg:hidden pt-[70px]'>
        <div className='text-center'>
            <div data-aos="fade-right" data-aos-duration="500" className=' text-[#2471c9] font-extrabold text-[25px]'>PORTFOLIO</div>
            <div data-aos="fade-right" data-aos-duration="2000" className='text-[25px] pb-[75px] font-bold'>Showcasing my front-end projects 📒</div>
        </div>
        
        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] pb-[80px] '>
            
            <a href='https://artchie-price-tracker.netlify.app/' target='_blank' id='projectshadow' data-aos="fade-right" data-aos-duration="1000" className='h-[360px] overflow-hidden hover:scale-110'>
                    <img className='max-w-[550px] hover:translate-y-[-20%] transition ease-in-out duration-[2s] cursor-pointer' src={PriceTracker} />
            </a>
            
            <right data-aos="fade-left" data-aos-duration="1000" className=' max-w-[400px] text-center mt-[-10px]'>
                <div className=' font-extrabold text-[27px] text-[#2471c9]'>PRICETRACKER 📈</div>    
                <div className='text-[20px]'>A Website for Tracking LIVE Crypto Prices Using Coingecko API to fetch data every 60 seconds. Built using React, Tailwind CSS, and PHP. Integrated a Simple Login & Signup Backend in mysql. Go to Github README for Logging in Guide.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/PriceTracker' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://artchie-price-tracker.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>
        
        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] pb-[80px] '>
            
            <a href='https://real-estate-revamp.netlify.app/' target='_blank' id='projectshadow' data-aos="fade-right" data-aos-duration="1000" className='h-[360px] overflow-hidden hover:scale-110'>
                    <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[5s] cursor-pointer' src={realestate} />
            </a>
            
            <right data-aos="fade-left" data-aos-duration="1000" className=' max-w-[400px] text-center mt-[-10px]'>
                <div className=' font-extrabold text-[27px] text-[#2471c9]'>REALTOR 🏠</div>    
                <div className='text-[20px]'>Built a modern, responsive realtor website using React and Tailwind CSS. Integrated a content management system to allow easy updates of property listings, images, and text without coding. Designed a clean UI with a photo carousel, search filters, and service sections to improve user experience.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/real-estate' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://real-estate-revamp.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] pb-[80px] '>
            
            <a href='https://jollibee-clone-artchie.netlify.app/' target='_blank' id='projectshadow' data-aos="fade-right" data-aos-duration="1000" className='h-[360px] overflow-hidden hover:scale-110'>
                    <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[5s] cursor-pointer' src={jollibee} />
            </a>
            
            <right data-aos="fade-left" data-aos-duration="1000" className=' max-w-[400px] text-center mt-[-10px]'>
                <div className=' font-extrabold text-[27px] text-[#2471c9]'>JOLLIBEE 🏪</div>
                <div className='text-[20px]'>I successfully cloned the Jollibee website, replicating its layout and design using HTML and CSS while ensuring responsiveness and cross-browser compatibility to deliver a seamless user experience..</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/Jollibee' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://jollibee-clone-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] py-[40px] pb-[80px]'>
            <a href='https://crispyking-clone-artchie.netlify.app/' target='_blank' id='projectshadow' data-aos="fade-right" data-aos-duration="1000" className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[5s]' src={crispyking} />
            </a>
            <right data-aos="fade-left" data-aos-duration="1000" className=' max-w-[400px] text-center mt-[-10px]'>
                <div className=' font-extrabold text-[27px] text-[#2471c9]'>CRISPY KING 🍗 </div>
                <div className='text-[20px]'>A Crispy King Clone Website I made to hone my skills in developing Front End Web Apps. Coded Using mainly HTML, CSS and a little bit of Javascript. Fully Responsive.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/CrispyKing' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://crispyking-clone-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] py-[40px] pb-[80px]'>
            <a href='https://partners-dao.netlify.app/' target='_blank' id='projectshadow' data-aos="fade-right" data-aos-duration="1000" className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-68%] transition ease-in-out duration-[5s]' src={partnersdao} />
            </a>
            <right data-aos="fade-left" data-aos-duration="1000" className=' max-w-[400px] text-center mt-[-10px]'>
                <div className=' font-extrabold text-[27px] text-[#2471c9]'>PARTNERS DAO 🧩</div>
                <div className='text-[20px]'>A Crypto Project on Twitter I decided to make A Website For.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/PartnersDao' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://partners-dao.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] py-[40px] pb-[80px]'>
            <a href='https://cozy-getaways-artchie.netlify.app/' target='_blank' id='projectshadow' data-aos="fade-right" data-aos-duration="1000" className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-68%] transition ease-in-out duration-[5s]' src={CozyGetaways} />
            </a>
            <right data-aos="fade-left" data-aos-duration="1000" className=' max-w-[400px] text-center mt-[-10px]'>
                <div className=' font-extrabold text-[27px] text-[#2471c9]'>COZY GETAWAYS 🏝️</div>
                <div className='text-[20px]'>Cozy Getaways is a Front-End Design for a Website that offers Customers a Vacation Rentals, Homes, Experiences. Whether you're searching for a cozy cabin, a beachfront villa, or a city apartment, we connect travelers with trusted hosts to create unforgettable stays. Fully Responsive. </div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/CozyGetaways' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://cozy-getaways-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

    </div>



    <div class='Container' className='relative lg:hidden max-sm:hidden'>
        <div className='text-center'>
            <div className=' text-[#2471c9] font-extrabold text-[25px]'>PORTFOLIO</div>
            <div className='text-[25px] font-bold'>Showcasing my front-end projects 📒</div>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-x-[60px] mt-[65px] mr-[50px] pb-[100px]'>
            <a href='https://artchie-price-tracker.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                    <img className='max-w-[550px] hover:translate-y-[-20%] transition ease-in-out duration-[2s] cursor-pointer' src={PriceTracker} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>PRICETRACKER 📈</div>
                <div className='text-[18px]'>A Website for Tracking LIVE Crypto Prices Using Coingecko API to fetch data every 60 seconds. Built using React, Tailwind CSS, and PHP. Integrated a Simple Login & Signup Backend in mysql. Go to Github README for Logging in Guide.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/PriceTracker' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://artchie-price-tracker.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-x-[60px] mt-[65px] mr-[50px] pb-[100px]'>
            <a href='https://real-estate-revamp.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                    <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[5s] cursor-pointer' src={realestate} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>REALTOR 🏠</div>
                <div className='text-[18px]'>Built a modern, responsive realtor website using React and Tailwind CSS. Integrated a content management system to allow easy updates of property listings, images, and text without coding. Designed a clean UI with a photo carousel, search filters, and service sections to improve user experience.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/real-estate' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://real-estate-revamp.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-x-[60px] mr-[50px] pb-[100px]'>
            <a href='https://jollibee-clone-artchie.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                    <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[5s] cursor-pointer' src={jollibee} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>JOLLIBEE 🏪</div>
                <div className='text-[18px]'>I successfully cloned the Jollibee website, replicating its layout and design using HTML and CSS while ensuring responsiveness and cross-browser compatibility to deliver a seamless user experience.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/Jollibee' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://jollibee-clone-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px] mr-[50px] pb-[100px] pt-[80px]'>
            <a href='https://crispyking-clone-artchie.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[5s]' src={crispyking} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>CRISPY KING 🍗</div>
                <div className='text-[18px]'>A Crispy King Clone Website I made to hone my skills in developing Front End Web Apps. Coded Using mainly HTML, CSS and a little bit of Javascript. Fully Responsive.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/CrispyKing' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://crispyking-clone-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px] mr-[50px] pb-[150px] pt-[80px]'>
            <a href='https://partners-dao.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-68%] transition ease-in-out duration-[5s]' src={partnersdao} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>PARTNERS DAO 🧩</div>
                <div className='text-[18px]'>A Crypto Project on Twitter I decided to make A Website For.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/PartnersDao' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://partners-dao.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px] mr-[50px] pb-[100px] pt-[80px]'>
            <a href='https://cozy-getaways-artchie.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-68%] transition ease-in-out duration-[5s]' src={CozyGetaways} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>COZY GETAWAYS 🏝️</div>
                <div className='text-[18px]'>Cozy Getaways is a Front-End Design for a Website that offers Customers a Vacation Rentals, Homes, Experiences. Whether you're searching for a cozy cabin, a beachfront villa, or a city apartment, we connect travelers with trusted hosts to create unforgettable stays. Fully Responsive.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/CozyGetaways' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://cozy-getaways-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

    </div>



    <div class='Container' className='relative lg:hidden sm:hidden'>
        <div className='text-center'>
            <div className=' text-[#2471c9] font-extrabold text-[25px]'>PORTFOLIO</div>
            <div className='text-[25px] pb-[50px] font-bold'>Showcasing my front-end projects 📒</div>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[230px]'>
            <a href='https://artchie-price-tracker.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                    <img className='max-w-[510px] w-full hover:translate-y-[-20%] transition ease-in-out duration-[2s] cursor-pointer' src={PriceTracker} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>PRICETRACKER 📈</div>
                <div className='text-[18px]'>A Website for Tracking LIVE Crypto Prices Using Coingecko API to fetch data every 60 seconds. Built using React, Tailwind CSS, and PHP. Integrated a Simple Login & Signup Backend in mysql. Go to Github README for Logging in Guide.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/PriceTracker' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://artchie-price-tracker.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 '>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[230px]'>
            <a href='https://real-estate-revamp.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                    <img className='max-w-[510px] w-full hover:translate-y-[-83%] transition ease-in-out duration-[5s] cursor-pointer' src={realestate} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>REALTOR 🏠</div>
                <div className='text-[18px]'>Built a modern, responsive realtor website using React and Tailwind CSS. Integrated a content management system to allow easy updates of property listings, images, and text without coding. Designed a clean UI with a photo carousel, search filters, and service sections to improve user experience.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/real-estate' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://real-estate-revamp.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 '>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>
        
        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[230px]'>
            <a href='https://jollibee-clone-artchie.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                    <img className='max-w-[510px] w-full hover:translate-y-[-83%] transition ease-in-out duration-[5s] cursor-pointer' src={jollibee} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>JOLLIBEE 🏪</div>
                <div className='text-[18px]'>I successfully cloned the Jollibee website, replicating its layout and design using HTML and CSS while ensuring responsiveness and cross-browser compatibility to deliver a seamless user experience.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/Jollibee' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://jollibee-clone-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 '>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[230px] pt-[80px]'>
            <a href='https://crispyking-clone-artchie.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                <img className='max-w-[510px] w-full hover:translate-y-[-83%] transition ease-in-out duration-[5s]' src={crispyking} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>CRISPY KING 🍗</div>
                <div className='text-[18px]'>A Crispy King Clone Website I made to hone my skills in developing Front End Web Apps. Coded Using mainly HTML, CSS and a little bit of Javascript. Fully Responsive.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/CrispyKing' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://crispyking-clone-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[230px] pt-[50px]'>
            <a href='https://partners-dao.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                <img className='max-w-[510px] w-full  hover:translate-y-[-68%] transition ease-in-out duration-[5s]' src={partnersdao} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>PARTNERS DAO 🧩</div>
                <div className='text-[18px]'>A Crypto Project on Twitter I decided to make A Website For.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/PartnersDao' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://partners-dao.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[230px] pt-[50px]'>
            <a href='https://cozy-getaways-artchie.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                <img className='max-w-[510px] w-full  hover:translate-y-[-68%] transition ease-in-out duration-[5s]' src={CozyGetaways} />
            </a>
            <right className=' max-w-[400px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>COZY GETAWAYS 🏝️</div>
                <div className='text-[18px]'>Cozy Getaways is a Front-End Design for a Website that offers Customers a Vacation Rentals, Homes, Experiences. Whether you're searching for a cozy cabin, a beachfront villa, or a city apartment, we connect travelers with trusted hosts to create unforgettable stays. Fully Responsive.</div>
                <div className='flex justify-center items-center mt-[20px]'>
                    <a href='https://github.com/artchie55/Portfolio-Content/tree/main/CozyGetaways' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>Source Code<FaGithub size={30} className='ml-[10px]' /></a>
                    <a href='https://cozy-getaways-artchie.netlify.app/' target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200'>Live Project <TfiNewWindow size={28} className='ml-[10px]' /></a>
                </div>
            </right>
        </div>

    </div>
</div>
    
  )
}

export default PortfolioContent