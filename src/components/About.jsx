import ManTyping from '../images/Mantyping.gif'

import React from 'react'

const About = () => {
  return (
<div id='About'>
    <div class='Container' className=' pt-[80px] pb-[250px] max-lg:hidden'>
      <div class='aboutContent' className=' flex justify-center items-center gap-[75px]'>
        <left data-aos="fade-right" data-aos-duration="2000" className='relative'>
          <img className='rounded-[20px] h-[400px] w-[450px]' src={ManTyping} />
        </left>
        <right data-aos="fade-right" data-aos-duration="800" className=' max-w-[495px]'>
          <div className=' text-[#2471c9] font-extrabold text-[20px]'>ABOUT ME</div>
          <div className=' font-extrabold text-[28px] max-w-[450px] py-[15px] leading-[30px]'> A Front-end Developer based in Philippines 🌎</div>
          <div className=' text-[23px]'>As a passionate and detail-oriented Junior Front-End Web Developer, I specialize in crafting seamless, responsive, and visually engaging web experiences. With a solid foundation in HTML, CSS, and JavaScript, I focus on building intuitive and dynamic interfaces that prioritize user interaction and accessibility. Additionally, I bring backend development skills using PHP and MySQL, enabling me to create full-stack applications with functionality and data management.</div>
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
                <div className=' font-extrabold text-[28px] max-w-[450px] pt-[15px] leading-[30px] break-normal'> A Front-end Developer based</div>
                <div className=' font-extrabold text-[28px] max-w-[450px] pb-[15px] leading-[30px]'>in Philippines 🌎</div>
                <div className=' text-[20px]'>As a passionate and detail-oriented Junior Front-End Web Developer, I specialize in crafting seamless, responsive, and visually engaging web experiences. With a solid foundation in HTML, CSS, and JavaScript, I focus on building intuitive and dynamic interfaces that prioritize user interaction and accessibility. Additionally, I bring backend development skills using PHP and MySQL, enabling me to create full-stack applications with functionality and data management.</div>
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
                <div className=' font-extrabold text-[28px] max-w-[450px] pt-[15px] leading-[30px] break-normal'> A Front-end Developer based</div>
                <div className=' font-extrabold text-[28px] max-w-[450px] pb-[15px] leading-[30px]'>in Philippines 🌎</div>
                <div className=' text-[20px]'>As a passionate and detail-oriented Junior Front-End Web Developer, I specialize in crafting seamless, responsive, and visually engaging web experiences. With a solid foundation in HTML, CSS, and JavaScript, I focus on building intuitive and dynamic interfaces that prioritize user interaction and accessibility. Additionally, I bring backend development skills using PHP and MySQL, enabling me to create full-stack applications with functionality and data management.</div>
            </right>
        </div>
    </div>

    

</div>
  )
}

export default About