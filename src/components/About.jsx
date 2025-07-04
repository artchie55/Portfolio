import ManTyping from '../images/Mantyping.gif'

import React from 'react'

const About = () => {
  return (
<div id='About'>
    <div class='Container' className=' pt-[80px] pb-[250px] max-lg:hidden'>
      <div class='aboutContent' className=' flex justify-center items-center gap-[75px]'>
        <left data-aos="fade-right" data-aos-duration="2000" className='relative'>
          <img className='rounded-[20px] h-[500px] w-[550px]' src={ManTyping} />
        </left>
        <right data-aos="fade-right" data-aos-duration="800" className=' max-w-[495px]'>
          <div className=' text-[#2471c9] font-extrabold text-[20px]'>ABOUT ME</div>
          <div className=' font-extrabold text-[28px] max-w-[450px] py-[15px] leading-[30px]'> A Junior Full-Stack Web Developer based in the Philippines  🌎</div>
          <div className=' text-[23px]'>With a strong background in HTML, CSS, and JavaScript, I craft responsive and interactive front-end experiences using tools like React and Tailwind CSS. On the back end, I work with Node.js, MongoDB, Express, PHP, and MySQL, enabling me to develop fully functional web apps with secure data handling and dynamic content.
                                        From building sleek UIs to integrating APIs and authentication systems using JWT, bcrypt, and Axios, I enjoy bringing ideas to life.</div>
        </right>
      </div>
    </div>

    
    <div class='Container' className=' pt-[200px] pb-[320px] lg:hidden max-sm:hidden'>
        <div class='aboutContent' className='flex flex-col justify-center items-center gap-[75px]'>
            <left className='relative'>
                <img src={ManTyping} className='rounded-[20px] h-[400px] w-[450px]' />
                <img className='absolute bottom-[-40px] right-[-40px] w-[185px] bg-white rounded-[50%] animate-rotateslow'/>
                <img className='absolute bottom-3 right-3 w-[80px]' />
            </left>
            <right className=' max-w-[495px] flex flex-col items-center text-center'>
                <div className=' text-[#2471c9] font-extrabold text-[20px] capitalize'>ABOUT ME</div>
                <div className=' font-extrabold text-[28px] max-w-[400px] pt-[15px] leading-[30px] break-normal'> A Junior Full-Stack Web Developer based</div>
                <div className=' font-extrabold text-[28px] max-w-[450px] pb-[15px] leading-[35px]'>in Philippines 🌎</div>
                <div className=' text-[20px]'>With a strong background in HTML, CSS, and JavaScript, I craft responsive and interactive front-end experiences using tools like React and Tailwind CSS. On the back end, I work with Node.js, MongoDB, Express, PHP, and MySQL, enabling me to develop fully functional web apps with secure data handling and dynamic content.
                                        From building sleek UIs to integrating APIs and authentication systems using JWT, bcrypt, and Axios, I enjoy bringing ideas to life.</div>
            </right>
        </div>
    </div>


    <div class='Container' className=' pt-[200px] pb-[320px] sm:hidden'>
        <div class='aboutContent' className='flex flex-col justify-center items-center gap-[75px]'>
            <left className='relative'>
                <img src={ManTyping} className='rounded-[20px] h-[400px] w-[400px]'/>
                <img className='absolute flex justify-center right-[37%] bottom-0 w-[80px] bg-white rounded-[50%] animate-rotateslow '/>
                <img className='absolute right-[42%] bottom-6 w-[40px]'/>
            </left>
            <right className=' max-w-[495px] flex flex-col items-center text-center'>
                <div className=' text-[#2471c9] font-extrabold text-[20px] capitalize'>ABOUT ME</div>
                <div className=' font-extrabold text-[28px] max-w-[400px] pt-[15px] leading-[35px] break-normal'> A Junior Full-Stack Web Developer based</div>
                <div className=' font-extrabold text-[28px] max-w-[450px] pb-[15px] leading-[35px]'>in Philippines 🌎</div>
                <div className=' text-[20px]'>With a strong background in HTML, CSS, and JavaScript, I craft responsive and interactive front-end experiences using tools like React and Tailwind CSS. On the back end, I work with Node.js, MongoDB, Express, PHP, and MySQL, enabling me to develop fully functional web apps with secure data handling and dynamic content.
                                        From building sleek UIs to integrating APIs and authentication systems using JWT, bcrypt, and Axios, I enjoy bringing ideas to life.</div>
            </right>
        </div>
    </div>

    

</div>
  )
}

export default About