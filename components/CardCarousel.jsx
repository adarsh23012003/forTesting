import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import logo from "../public/Digital-Silk-logo-listing.jpg";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillTool } from "react-icons/ai";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsDatabaseFillAdd } from "react-icons/bs";

function CardCarousel() {
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        slidesPerView={3}
        // loop={true}
        onAutoplayResume={true}
      >
        <SwiperSlide>
          <>
            <div className='flex  bg-white hover:border-[#5060FF] border-[2px] rounded-sm'>
              <div className='w-1/2 p-2'>
                <Image src={logo} alt='logo' className='h-auto w-auto' />
                <p className='font-bold text-2xl tracking-tight text-gray-900 dark:text-black'>
                  E2 Markting
                </p>
                <div className='flex gap-2'>
                  <IoLocationSharp className='mt-1 ' />
                  <p className=''>Unite State</p>
                </div>
                <div className='flex gap-2'>
                  <AiFillTool className='mt-1 ' />
                  <p className=''>Advertising</p>
                </div>
                <div className='flex gap-2'>
                  <BsFillBriefcaseFill className='mt-1 ' />
                  <p className=''>B2B Services</p>
                </div>
                <div className='flex gap-2'>
                  <BsDatabaseFillAdd className='mt-1 ' />
                  <p className=''>Any</p>
                </div>
              </div>

              <div className='w-1/2 p-10'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, fugit aut dolores accusamus.
                </p>
                <div className='border border-gray-400 p-2 text-center uppercase cursor-pointer'>
                  View Profile
                </div>
              </div>
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <div className='flex  bg-white hover:border-[#5060FF] border-[2px] rounded-sm'>
              <div className='w-1/2 p-2'>
                <Image src={logo} alt='logo' className='h-auto w-auto' />
                <p className='font-bold text-2xl tracking-tight text-gray-900 dark:text-black'>
                  E2 Markting
                </p>
                <div className='flex gap-2'>
                  <IoLocationSharp className='mt-1 ' />
                  <p className=''>Unite State</p>
                </div>
                <div className='flex gap-2'>
                  <AiFillTool className='mt-1 ' />
                  <p className=''>Advertising</p>
                </div>
                <div className='flex gap-2'>
                  <BsFillBriefcaseFill className='mt-1 ' />
                  <p className=''>B2B Services</p>
                </div>
                <div className='flex gap-2'>
                  <BsDatabaseFillAdd className='mt-1 ' />
                  <p className=''>Any</p>
                </div>
              </div>

              <div className='w-1/2 p-10'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, fugit aut dolores accusamus.
                </p>
                <div className='border border-gray-400 p-2 text-center uppercase cursor-pointer'>
                  View Profile
                </div>
              </div>
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <div className='flex  bg-white hover:border-[#5060FF] border-[2px] rounded-sm'>
              <div className='w-1/2 p-2'>
                <Image src={logo} alt='logo' className='h-auto w-auto' />
                <p className='font-bold text-2xl tracking-tight text-gray-900 dark:text-black'>
                  E2 Markting
                </p>
                <div className='flex gap-2'>
                  <IoLocationSharp className='mt-1 ' />
                  <p className=''>Unite State</p>
                </div>
                <div className='flex gap-2'>
                  <AiFillTool className='mt-1 ' />
                  <p className=''>Advertising</p>
                </div>
                <div className='flex gap-2'>
                  <BsFillBriefcaseFill className='mt-1 ' />
                  <p className=''>B2B Services</p>
                </div>
                <div className='flex gap-2'>
                  <BsDatabaseFillAdd className='mt-1 ' />
                  <p className=''>Any</p>
                </div>
              </div>

              <div className='w-1/2 p-10'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, fugit aut dolores accusamus.
                </p>
                <div className='border border-gray-400 p-2 text-center uppercase cursor-pointer'>
                  View Profile
                </div>
              </div>
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <div className='flex  bg-white hover:border-[#5060FF] border-[2px] rounded-sm'>
              <div className='w-1/2 p-2'>
                <Image src={logo} alt='logo' className='h-auto w-auto' />
                <p className='font-bold text-2xl tracking-tight text-gray-900 dark:text-black'>
                  E2 Markting
                </p>
                <div className='flex gap-2'>
                  <IoLocationSharp className='mt-1 ' />
                  <p className=''>Unite State</p>
                </div>
                <div className='flex gap-2'>
                  <AiFillTool className='mt-1 ' />
                  <p className=''>Advertising</p>
                </div>
                <div className='flex gap-2'>
                  <BsFillBriefcaseFill className='mt-1 ' />
                  <p className=''>B2B Services</p>
                </div>
                <div className='flex gap-2'>
                  <BsDatabaseFillAdd className='mt-1 ' />
                  <p className=''>Any</p>
                </div>
              </div>

              <div className='w-1/2 p-10'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, fugit aut dolores accusamus.
                </p>
                <div className='border border-gray-400 p-2 text-center uppercase cursor-pointer'>
                  View Profile
                </div>
              </div>
            </div>
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            <div className='flex  bg-white hover:border-[#5060FF] border-[2px] rounded-sm'>
              <div className='w-1/2 p-2'>
                <Image src={logo} alt='logo' className='h-auto w-auto' />
                <p className='font-bold text-2xl tracking-tight text-gray-900 dark:text-black'>
                  E2 Markting
                </p>
                <div className='flex gap-2'>
                  <IoLocationSharp className='mt-1 ' />
                  <p className=''>Unite State</p>
                </div>
                <div className='flex gap-2'>
                  <AiFillTool className='mt-1 ' />
                  <p className=''>Advertising</p>
                </div>
                <div className='flex gap-2'>
                  <BsFillBriefcaseFill className='mt-1 ' />
                  <p className=''>B2B Services</p>
                </div>
                <div className='flex gap-2'>
                  <BsDatabaseFillAdd className='mt-1 ' />
                  <p className=''>Any</p>
                </div>
              </div>

              <div className='w-1/2 p-10'>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, fugit aut dolores accusamus.
                </p>
                <div className='border border-gray-400 p-2 text-center uppercase cursor-pointer'>
                  View Profile
                </div>
              </div>
            </div>
          </>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default CardCarousel;
