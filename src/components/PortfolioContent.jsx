import React, { useState } from 'react';
import { TfiNewWindow } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import jollibee from '../images/jollibee.png';
import crispyking from '../images/crispyking.png';
import realestate from '../images/realestate.png';
import PriceTracker from '../images/PriceTracker.png';

const projects = [
  {
    id: 'projectshadow',
    title: 'PRICETRACKER 📈',
    desc: 'A Website for Tracking LIVE Crypto Prices Using Coingecko API to fetch data every 60 seconds. Built using React, Tailwind CSS, and PHP. Integrated a Simple Login & Signup Backend in mysql. Go to Github README for Logging in Guide.',
    img: PriceTracker,
    link: 'https://artchie-price-tracker.netlify.app/',
    github: 'https://github.com/artchie55/Portfolio-Content/tree/main/PriceTracker',
    imgTranslate: '-20%',
    duration: '2s'
  },
  {
    id: 'projectshadow',
    title: 'REALTOR 🏠',
    desc: 'Built a modern, responsive realtor website using React and Tailwind CSS. Integrated a content management system to allow easy updates of property listings, images, and text without coding. Designed a clean UI with a photo carousel, search filters, and service sections to improve user experience.',
    img: realestate,
    link: 'https://real-estate-revamp.netlify.app/',
    github: 'https://github.com/artchie55/Portfolio-Content/tree/main/real-estate',
    imgTranslate: '-80.3%',
  },
  {
    id: 'projectshadow',
    title: 'JOLLIBEE 🏪',
    desc: 'I successfully cloned the Jollibee website, replicating its layout and design using HTML and CSS while ensuring responsiveness and cross-browser compatibility to deliver a seamless user experience.',
    img: jollibee,
    link: 'https://jollibee-clone-artchie.netlify.app/',
    github: 'https://github.com/artchie55/Portfolio-Content/tree/main/Jollibee',
    imgTranslate: '-70%',
    duration: '5s'
  },
  {
    id: 'projectshadow',
    title: 'CRISPY KING 🍗',
    desc: 'A Crispy King Clone Website I made to hone my skills in developing Front End Web Apps. Coded Using mainly HTML, CSS and a little bit of Javascript. Fully Responsive.',
    img: crispyking,
    link: 'https://crispyking-clone-artchie.netlify.app/',
    github: 'https://github.com/artchie55/Portfolio-Content/tree/main/CrispyKing',
    imgTranslate: '-70%',
    duration: '5s'
  }
  
];

const FullStack1 = () => {
  const images = [
    'https://res.cloudinary.com/dqwtriadv/image/upload/v1751658224/Homepage_c7z0mo.png',
    'https://res.cloudinary.com/dqwtriadv/image/upload/v1751658731/Homepage2_ieae9o.png',
    'https://res.cloudinary.com/dqwtriadv/image/upload/v1751659044/Products_lghfjz.png',
    'https://res.cloudinary.com/dqwtriadv/image/upload/v1751659043/cart_ibjg3i.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="w-[1000px]  bg-neutral-900 rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 group">
      <div className="relative w-full overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Project Screenshot"
          className="w-full h-full object-cover transition-opacity duration-300"
        />
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[21px]  bg-white scale-110 hover:scale-125 duration-200  text-black px-2 py-1 text-sm rounded "
        >
          ‹
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[21px] bg-white scale-110 hover:scale-125 duration-200  text-black px-2 py-1 text-sm rounded "
        >
          ›
        </button>
      </div>

      {/* Reveal Description Below Image */}
      <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-700 ease-in-out group-hover:max-h-[300px] max-lg:group-hover:max-h-[450px] group-hover:opacity-100 px-4 py-0 group-hover:py-4">
        <h3 className="text-white font-semibold text-lg mb-1 max-lg:text-sm">Luxury Watch Store</h3>
        <p className="text-gray-300 text-sm max-lg:text-[11px]">Luxury Watch Store is a premium e-commerce platform built with React and Tailwind CSS, offering a seamless and elegant shopping experience for high-end timepieces. The site integrates Stripe for secure and smooth checkout processing, giving customers confidence during transactions.
            To enhance the experience, Lenis is implemented for smooth scroll animations, giving the interface a refined, luxurious feel. The site supports role-based access, distinguishing between customers and administrators. Admins have full control over the catalog, with the ability to add or remove products directly from the admin dashboard.
            Authentication is powered by JSON Web Tokens (JWT) and bcrypt, ensuring robust security for user accounts. API communication is handled using Axios, allowing efficient and clean interaction with the backend services..</p>
            <p className="text-gray-300 text-sm text-center mt-[10px] leading-[13px] max-lg:text-[11px]">admin role→ admin@gmail.com:admin <br/> customer role→ user@gmail.com:user</p>
             <p className="text-gray-300 text-sm text-center mt-[10px] leading-[13px] max-lg:text-[11px]">(wait around 1minute, let free hosting database load) </p>
        <div className='flex justify-center items-center mt-[15px] max-lg:scale-75'>
            <a href='https://github.com/artchie55/E-Commerce-for-Watches' target='_blank' className='cursor-pointer p-[8px] bg-[#ffffff] rounded-[20px] flex items-center text-[18px] hover:scale-110 transition duration-300 mr-[20px]'>
            Source Code <FaGithub size={26} className='ml-[10px]' />
            </a>
            <a href='https://e-commerce-for-watches.vercel.app/' target='_blank' className='cursor-pointer p-[8px] bg-[#ffffff] rounded-[20px] flex items-center text-[18px] hover:scale-110 transition duration-300'>
            Live Project <TfiNewWindow size={24} className='ml-[10px]' />
            </a>
        </div>
      </div>
    </div>
  );
};

const FrontendProjects = ({ project, index }) => (
  <div className='flex max-lg:flex-col justify-center items-center gap-x-[60px] mr-[50px] max-lg:mr-0 pb-[80px]' data-aos="fade-up" data-aos-duration={1000 + index * 100}>
    <a href={project.link} target='_blank' id={project.id} className='h-[360px] overflow-hidden hover:scale-110 duration-200'>
      <img
            src={project.img}
            style={{
                transition: 'transform 2.5s ease-in-out'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = `translateY(${project.imgTranslate})`}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            className="max-w-[550px] w-screen cursor-pointer"
      />
    </a>
    <right className='max-w-[400px] text-center mt-[10px] lg:mt-[-10px] pt-[40px]'>
      <div className='font-extrabold text-[20px] lg:text-[27px] text-[#2471c9]'>{project.title}</div>
      <div className='text-[18px] lg:text-[20px]'>{project.desc}</div>
      <div className='flex justify-center items-center mt-[20px]'>
        <a href={project.github} target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 mr-[20px]'>
          Source Code <FaGithub size={30} className='ml-[10px]' />
        </a>
        <a href={project.link} target='_blank' className='cursor-pointer p-[10px] bg-[#7f94db9a] rounded-[20px] flex items-center text-[20px] hover:scale-110 transition duration-200 '>
          Live Project <TfiNewWindow size={28} className='ml-[10px]' />
        </a>
      </div>
    </right>
  </div>
);

const PortfolioContent = () => {
  return (
    < >
<div id='Projects' data-aos="fade-right" data-aos-duration="500" className='text-[#2471c9] font-extrabold text-[25px] text-center'>PORTFOLIO</div>
    <div data-aos="fade-right" data-aos-duration="1000" className='text-center text-[25px] pb-[75px] font-bold max-sm:text-[18px]'>Showcasing my full-stack projects 📒</div>
    {/*Full Stack Projects*/}
    <div data-aos="zoom-in" data-aos-duration="1500" className='flex justify-center'>
      <FullStack1 />
    </div>

    <div>
      <div className='relative pt-[70px] mt-[100px]'>
        <div className='text-center'>
          <div data-aos="fade-right" data-aos-duration="2000" className='text-[25px] pb-[75px] font-bold max-sm:text-[18px]'>Showcasing my front-end projects 📒</div>
        </div>

        {projects.map((project, i) => (
          <FrontendProjects key={i} index={i} project={project} />
        ))}
      </div>
    </div>

    </>
  );
};

export default PortfolioContent;
