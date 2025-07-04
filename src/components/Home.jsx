import React from 'react'
import {BiLogoFacebookSquare} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'
import artchie2 from '../images/artchie2.png'
import { FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';







const Home = () => {
  return (
    <div  id='Home' >
      
    <div  id='Container'  className='max-lg:hidden flex flex-col justify-center bg-[#ffffff] px-[40px] mt-[50px] h-screen'>
      <div id='heroMain' className='flex items-center justify-center gap-[60px]'>
      <left data-aos="fade-right" data-aos-duration="1000" className='w-[609px]'> 
        <div className='text-[55px] font-bold leading-[65px]'>
          Full-Stack Developer</div>
        <div className='mt-[10px] text-[20px] font-medium max-w-[520px]'>Hi, I'm Artchie.
          
        <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              ' A Junior Full-Stack Developer ',
              1000,
              ' ',
              1000,
            ]}
            speed={50}
            style={{ fontSize: '22px', color: '#3b579d' }}
            repeat={Infinity}

          />

           Based in Leyte, Philippines. 💻💻💻</div>
        <div data-aos="fade-up" data-aos-duration="1500" id='logo' className='mt-[10px] flex space-x-[10px]'>
          <BiLogoFacebookSquare className=' cursor-pointer text-[#3b579d] hover:scale-125' size={"35px"}></BiLogoFacebookSquare>
          <a href='https://x.com/Artchie0' target='_blank'><BiLogoTwitter  className=' cursor-pointer text-[#1d9bf0] hover:scale-125' size={"35px"}></BiLogoTwitter ></a>
          <a href='https://github.com/artchie55' target='_blank'><FaGithub className=' cursor-pointer text-[#323131] hover:scale-125' size={"35px"} /></a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className='font-bold mt-[15px]'>Email: artchie2003@gmail.com</div>
      </left>
      <right data-aos="fade-left" data-aos-duration="1000">
        <div className=''>
          <img className='rounded-full border-solid border-[5px] border-black w-[330px] h-[330px] object-cover object-[100%_80%]' id='picture' src={artchie2} />
        </div>
      </right>
      </div>
      
 <div
  data-aos="fade-right"
  data-aos-duration="1500"
  className="flex flex-col items-center mt-24 px-4"
  >
  <div className="flex items-center border-b-2 border-gray-600 pb-2 mb-4">
    <span className="font-bold text-lg ">Tech Stack</span>
  </div>
  <div className="flex flex-wrap justify-center gap-[50px] mt-[40px] max-w-[800px]">
    <img
      title="HTML5"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="CSS"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="JavaScript"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="React"
      src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Tailwind CSS"
      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="MongoDB"
      src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Express JS"
      src="https://www.manektech.com/storage/developer/1646733543.webp"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Node.js"
      src="https://miro.medium.com/v2/resize:fit:866/1*1UBNwRFaslvqt_G3Njw3pg.jpeg"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="JsonWebToken"
      src="https://jwt.io/img/logo-asset.svg"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Stripe"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44LWV1mbueAGMd2V-BVH9tl81d_6gKEfMmg&s"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Postman"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Cloudinary"
      src="https://cdn.prod.website-files.com/64d41aab8183c7c3324ddb29/674f5ebd0de31390e6f53218_3-logo-brand-square.svg"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Axios"
      src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="PHP"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="MySQL"
      src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Vite"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Git"
      src="https://images.seeklogo.com/logo-png/27/2/git-logo-png_seeklogo-273181.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
     
  </div>
</div>
    </div>
    

    

    
    
    <div className='mt-[60px] lg:hidden '>
    <right className='' >
          <div className=' flex justify-center '>
            <img id='picture' className='w-[330px] h-[330px] object-cover object-[100%_30%]' src={artchie2} />
          </div>
        </right>
        <left className='py-[10px] flex flex-col items-center justify-center text-center'>
          <p className=' font-bold text-6xl max-w-[550px] py-[15px]'>
            Full-Stack Developer</p>
           <p className=' font-bold text-7xl'></p>  
          <p className=' max-w-[370px]'>Hi, I'm Artchie. A Junior Full-Stack Developer based in Leyte, Philippines.</p>
          
          <div id='logo' className=' flex justify-center mt-[10px] space-x-[10px] pt-[12px]'>
          <BiLogoFacebookSquare className=' cursor-pointer text-[#3b579d] hover:scale-125' size={"35px"}></BiLogoFacebookSquare>
          <a href='https://x.com/Artchie0' target='_blank'><BiLogoTwitter className='cursor-pointer text-[#1d9bf0] hover:scale-125' size={"35px"}></BiLogoTwitter></a>
          <a href='https://github.com/artchie55' target='_blank'><FaGithub className=' cursor-pointer text-[#323131] hover:scale-125' size={"35px"} /></a>
          </div>
          <div className='font-bold mt-[15px]'>Email:artchie2003@gmail.com</div>
        </left>

 <div
  data-aos="fade-right"
  data-aos-duration="1500"
  className="flex flex-col items-center mt-24 px-4"
  >
  <div className="flex items-center border-b-2 border-gray-600 pb-2 mb-4">
    <span className="font-bold text-lg">Tech Stack</span>
  </div>
  <div className="flex flex-wrap justify-center gap-[50px] mt-[40px] max-w-5xl">
    <img
      title="HTML5"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="CSS"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="JavaScript"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="React"
      src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Tailwind CSS"
      src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="MongoDB"
      src="https://www.opc-router.de/wp-content/uploads/2021/03/mongodb_thumbnail.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Express JS"
      src="https://www.manektech.com/storage/developer/1646733543.webp"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Node.js"
      src="https://miro.medium.com/v2/resize:fit:866/1*1UBNwRFaslvqt_G3Njw3pg.jpeg"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="JsonWebToken"
      src="https://jwt.io/img/logo-asset.svg"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Stripe"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44LWV1mbueAGMd2V-BVH9tl81d_6gKEfMmg&s"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Postman"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-TB9d5YXwtKhv4NWbpeTBVveYvcxu9gMJng&s"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Cloudinary"
      src="https://cdn.prod.website-files.com/64d41aab8183c7c3324ddb29/674f5ebd0de31390e6f53218_3-logo-brand-square.svg"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Axios"
      src="https://user-images.githubusercontent.com/8939680/57233882-20344080-6fe5-11e9-9086-d20a955bed59.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="PHP"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="MySQL"
      src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Vite"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/410px-Vitejs-logo.svg.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
    <img
      title="Git"
      src="https://images.seeklogo.com/logo-png/27/2/git-logo-png_seeklogo-273181.png"
      className="h-12 w-12 object-contain cursor-pointer hover:scale-[170%] transition duration-300"
    />
  </div>
</div>

      </div>

      </div>
  )
}

export default Home