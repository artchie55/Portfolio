import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav (!nav)
    };
  return (
    <div data-aos="fade-down" data-aos-duration="1000" className='fixed top-0 right-0 z-[99] w-full bg-white'>
        <FaBars onClick={handleNav} className=' absolute top-4 right-9 lg:hidden'/>
        {
            nav ? (
                <>
                <nav className=' fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 lg:hidden'>
                    <FaBars onClick={handleNav} className='absolute top-4 right-9 lg:hidden'/>
                    <a onClick={handleNav} href='#Home' className='  w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  duration-200'>
                        Home
                    </a>
                    <a onClick={handleNav} href='#About' className='  w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  duration-200'>
                        About
                    </a>
                    <a onClick={handleNav} href='#Projects' className='  w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  duration-200'>
                        Projects
                    </a>
                    <a onClick={handleNav} href='#Home' className='  w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  duration-200 '>
                        Contact
                    </a>
                </nav> 
                
                
                </>
                
            )
            : (<nav className='flex justify-between items-center py-[8px] mx-[60px]'>
                
                    <div>
                      <h1 className=' text-[25px] text-[#2471c9] font-semibold cursor-pointer'>
                        Artchie.dev
                      </h1>
                    </div>
                    <div className='invisible lg:visible'>
                        <ul className='flex gap-[14px] list-none font-semibold text-[17px]'>
                        <li><a href='#Home' className=' cursor-pointer hover:text-[#3151bd] transition duration-[0.23s]'>Home</a></li>
                        <li><a href='#About' className=' cursor-pointer hover:text-[#3151bd] transition duration-[0.23s]'>About</a></li>
                        <li><a href='#Projects' className=' cursor-pointer hover:text-[#3151bd] transition duration-[0.23s]'>Projects</a></li>
                        <li><a href='#Home' className=' cursor-pointer hover:text-[#3151bd]'>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            )

        }
    </div>
  )
}

export default Navbar