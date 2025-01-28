import React from 'react'
import jollibee from '../images/jollibee.png';
import crispyking from '../images/crispyking.png';
import partnersdao from '../images/partnersdaopic.png'

const PortfolioContent = () => {
  return (
    <div id='Projects'>
    <div class='Container' className='relative max-lg:hidden pt-[70px]'>
        <div className='text-center'>
            <div className=' text-[#2471c9] font-extrabold text-[25px]'>PORTFOLIO</div>
            <div className='text-[25px] pb-[75px] font-bold'>Showcasing my front-end projects 📒</div>
        </div>
        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] pb-[20px]'>
            
            <a href='https://jollibee-clone.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                    <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[8s] cursor-pointer' src={jollibee} />
            </a>
            
            <right className=' max-w-[300px] text-center'>
                <div className=' font-extrabold text-[27px]'>JOLLIBEE CLONE 🏪</div>
                <div className='text-[20px]'>I successfully cloned the Jollibee website, replicating its layout and design using HTML and CSS while ensuring responsiveness and cross-browser compatibility to deliver a seamless user experience</div>
            </right>
        </div>

        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] py-[40px]'>
            <a href='https://crispyking-clone.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[8s]' src={crispyking} />
            </a>
            <right className=' max-w-[300px] text-center'>
                <div className=' font-extrabold text-[27px]'>CRISPY KING CLONE 🍗 </div>
                <div className='text-[20px]'>A Crispy King Clone Website I made to hone my skills in developing Front End Web Apps. Coded Using mainly HTML, CSS and a little bit of Javascript. Fully Responsive.</div>
            </right>
        </div>

        <div className='flex justify-center items-center gap-x-[60px] mr-[50px] py-[40px]'>
            <a href='https://partners-dao.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-68%] transition ease-in-out duration-[8s]' src={partnersdao} />
            </a>
            <right className=' max-w-[300px] text-center'>
                <div className=' font-extrabold text-[27px]'>PARTNERS DAO 🧩</div>
                <div className='text-[20px]'>A Crypto Project on Twitter I decided to make A Website For.</div>
            </right>
        </div>

    </div>



    <div class='Container' className='relative lg:hidden max-sm:hidden'>
        <div className='text-center'>
            <div className=' text-[#2471c9] font-extrabold text-[25px]'>PORTFOLIO</div>
            <div className='text-[25px] pb-[75px] font-bold'>Showcasing my front-end projects 📒</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-x-[60px] mr-[50px] pb-[20px]'>
            <a href='https://jollibee-clone.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                    <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[8s] cursor-pointer' src={jollibee} />
            </a>
            <right className=' max-w-[300px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>JOLLIBEE CLONE 🏪</div>
                <div className='text-[18px]'>I successfully cloned the Jollibee website, replicating its layout and design using HTML and CSS while ensuring responsiveness and cross-browser compatibility to deliver a seamless user experience</div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px] mr-[50px] pb-[20px] pt-[80px]'>
            <a href='https://crispyking-clone.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-83%] transition ease-in-out duration-[8s]' src={crispyking} />
            </a>
            <right className=' max-w-[300px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>CRISPY KING CLONE 🍗</div>
                <div className='text-[18px]'>A Crispy King Clone Website I made to hone my skills in developing Front End Web Apps. Coded Using mainly HTML, CSS and a little bit of Javascript. Fully Responsive.</div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px] mr-[50px] pb-[20px] pt-[80px]'>
            <a href='https://partners-dao.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-110'>
                <img className='max-w-[550px] hover:translate-y-[-68%] transition ease-in-out duration-[8s]' src={partnersdao} />
            </a>
            <right className=' max-w-[300px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>PARTNERS DAO 🧩</div>
                <div className='text-[18px]'>A Crypto Project on Twitter I decided to make A Website For.</div>
            </right>
        </div>

    </div>



    <div class='Container' className='relative lg:hidden sm:hidden'>
        <div className='text-center'>
            <div className=' text-[#2471c9] font-extrabold text-[25px]'>PORTFOLIO</div>
            <div className='text-[25px] pb-[75px] font-bold'>Showcasing my front-end projects 📒</div>
        </div>
        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[20px]'>
            <a href='https://jollibee-clone.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                    <img className='max-w-[510px] hover:translate-y-[-83%] transition ease-in-out duration-[8s] cursor-pointer' src={jollibee} />
            </a>
            <right className=' max-w-[300px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>JOLLIBEE CLONE 🏪</div>
                <div className='text-[18px]'>I successfully cloned the Jollibee website, replicating its layout and design using HTML and CSS while ensuring responsiveness and cross-browser compatibility to deliver a seamless user experience</div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[20px] pt-[80px]'>
            <a href='https://crispyking-clone.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                <img className='max-w-[510px] hover:translate-y-[-83%] transition ease-in-out duration-[8s]' src={crispyking} />
            </a>
            <right className=' max-w-[300px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>CRISPY KING CLONE 🍗</div>
                <div className='text-[18px]'>A Crispy King Clone Website I made to hone my skills in developing Front End Web Apps. Coded Using mainly HTML, CSS and a little bit of Javascript. Fully Responsive.</div>
            </right>
        </div>

        <div className='flex flex-col justify-center items-center gap-x-[60px]  pb-[20px] pt-[80px]'>
            <a href='https://partners-dao.netlify.app/' target='_blank' id='projectshadow' className='h-[360px] overflow-hidden hover:scale-105'>
                <img className='max-w-[550px] hover:translate-y-[-68%] transition ease-in-out duration-[8s]' src={partnersdao} />
            </a>
            <right className=' max-w-[300px] text-center pt-[40px]'>
                <div className=' font-extrabold text-[20px]'>PARTNERS DAO 🧩</div>
                <div className='text-[18px]'>A Crypto Project on Twitter I decided to make A Website For.</div>
            </right>
        </div>

    </div>
</div>
    
  )
}

export default PortfolioContent