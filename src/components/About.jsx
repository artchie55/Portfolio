import React from 'react'

const About = () => {
  return (
<div id='About'>
    <div class='Container' className=' pt-[80px] pb-[250px] max-lg:hidden'>
      <div class='aboutContent' className=' flex justify-center items-center gap-[75px]'>
        <left className='relative'>
          <img className='rounded-[20px] h-[400px] w-[450px]' src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"/>
          <img className='absolute bottom-[-40px] right-[-40px] w-[185px] bg-white rounded-[50%] animate-rotateslow' src='https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg'/>
          <img className='absolute bottom-3 right-3 w-[80px]' src='https://stefantopalovicdev.vercel.app/static/media/working-emoji.c5325f52b5be329995a5.png'/>
        </left>
        <right className=' max-w-[495px]'>
          <div className=' text-[#2471c9] font-extrabold text-[20px]'>ABOUT ME</div>
          <div className=' font-extrabold text-[28px] max-w-[450px] py-[15px] leading-[30px]'> A Front-end Developer based in Philippines 🌎</div>
          <div className=' text-[23px]'>As a motivated and enthusiastic Junior Front-End Web Developer, I am dedicated to crafting seamless, responsive, and visually engaging web experiences. With a strong foundation in HTML, CSS, and JavaScript
            teams to produce outstanding web applications.</div>
        </right>
      </div>
    </div>

    
    <div class='Container' className=' pt-[200px] pb-[320px] lg:hidden max-sm:hidden'>
        <div class='aboutContent' className='flex flex-col justify-center items-center gap-[75px]'>
            <left className='relative'>
                <img className='rounded-[20px] h-[400px] w-[450px]' src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"/>
                <img className='absolute bottom-[-40px] right-[-40px] w-[185px] bg-white rounded-[50%] animate-rotateslow' src='https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg'/>
                <img className='absolute bottom-3 right-3 w-[80px]' src='https://stefantopalovicdev.vercel.app/static/media/working-emoji.c5325f52b5be329995a5.png'/>
            </left>
            <right className=' max-w-[495px] flex flex-col items-center text-center'>
                <div className=' text-[#2471c9] font-extrabold text-[20px] capitalize'>ABOUT ME</div>
                <div className=' font-extrabold text-[28px] max-w-[450px] pt-[15px] leading-[30px] break-normal'> A Front-end Developer based</div>
                <div className=' font-extrabold text-[28px] max-w-[450px] pb-[15px] leading-[30px]'>in Philippines 🌎</div>
                <div className=' text-[20px]'>As a motivated and enthusiastic Junior Front-End Web Developer, I am dedicated to crafting seamless, responsive, and visually engaging web experiences. With a strong foundation in HTML, CSS, and JavaScript</div>
            </right>
        </div>
    </div>


    <div class='Container' className=' pt-[200px] pb-[320px] sm:hidden'>
        <div class='aboutContent' className='flex flex-col justify-center items-center gap-[75px]'>
            <left className='relative'>
                <img className='rounded-[20px] h-[400px] w-[400px]' src="https://stefantopalovicdev.vercel.app/static/media/about-img.62b47e7f183d4b4e9feb.webp"/>
                <img className='absolute flex justify-center right-[37%] bottom-0 w-[80px] bg-white rounded-[50%] animate-rotateslow ' src='https://stefantopalovicdev.vercel.app/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg'/>
                <img className='absolute right-[42%] bottom-6 w-[40px]' src='https://stefantopalovicdev.vercel.app/static/media/working-emoji.c5325f52b5be329995a5.png'/>
            </left>
            <right className=' max-w-[495px] flex flex-col items-center text-center'>
                <div className=' text-[#2471c9] font-extrabold text-[20px] capitalize'>ABOUT ME</div>
                <div className=' font-extrabold text-[28px] max-w-[450px] pt-[15px] leading-[30px] break-normal'> A Front-end Developer based</div>
                <div className=' font-extrabold text-[28px] max-w-[450px] pb-[15px] leading-[30px]'>in Philippines 🌎</div>
                <div className=' text-[20px]'>As a motivated and enthusiastic Junior Front-End Web Developer, I am dedicated to crafting seamless, responsive, and visually engaging web experiences. With a strong foundation in HTML, CSS, and JavaScript</div>
            </right>
        </div>
    </div>

    

</div>
  )
}

export default About