import Image from "next/image";
import ProfileLogo from "../public/Digital-Silk-logo-listing.jpg";
import { ImLocation } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { WiTime9 } from "react-icons/wi";
import { GiWallet } from "react-icons/gi";
import { BiShowAlt } from "react-icons/bi";
import { RiShareBoxLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import ReactStars from "react-stars";
import Link from "next/link";

const ListingCard = ({ detail }) => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-5 border-[3px] rounded-2xl hover:border-[#5060FF] p-3 bg-white'>
        <div className='w-full lg:w-[15%]'>
          <div className='pb-3'>
            {/* <Image
              alt='Company logo'
              src={detail?.logo}
              className='h-auto w-auto'
            /> */}
            <h1 className='block lg:hidden font-poppins font-bold text-2xl text-[#5060FF]'>
              {detail?.company_title}
            </h1>
          </div>
          <div className='flex gap-2'>
            <ImLocation size={20} />
            {detail?.locality}
          </div>
          <div className='flex gap-2'>
            <IoIosPeople size={20} />
            {detail?.list_item_3}
          </div>
          <div className='flex gap-2'>
            <WiTime9 size={20} />
            {detail?.list_item_2}
          </div>
          <div className='flex gap-2'>
            <GiWallet size={20} />
            {detail?.list_item}
          </div>
        </div>
        <div className='w-full lg:w-[70%] border-l-0 lg:border-l px-2'>
          <h1 className='hidden lg:block font-poppins font-bold text-2xl text-[#5060FF]'>
            {detail?.company_title}
          </h1>
          <span>
            <ReactStars count={5} size={24} color2={"#ffd700"} />
          </span>
          <p className='font-semibold pb-3'>{detail?.company_info__wrap}</p>
          <p className='inline-block font-normal mb-4 p-2 rounded-sm bg-blue-100'>
            Top services: Web Design |360° Digital Services| Graphic Design
          </p>
          <p className='text-gray-600'>{detail?.description}</p>
        </div>
        <div className='w-full lg:w-[15%] px-2 flex justify-center items-center border-l-0 lg:border-l'>
          <div className='w-full lg:w-auto flex flex-col space-y-5 overflow-hidden lg:space-y-0 justify-between items-center h-full'>
            <div className='flex bg-green-500 w-full lg:bg-transparent lg:w-auto justify-center items-center h-full lg:border-b'>
              <Link href={"/website"}>
                <button className='bg-green-500 uppercase text-white font-normal rounded-md px-3 py-3 flex justify-center items-center gap-3'>
                  Visit website
                  <RiShareBoxLine />
                </button>
              </Link>
            </div>
            {/* ------------------ */}
            <div className='flex flex-col md:flex-row justify-between gap-5 w-full lg:flex-col items-center h-full pb-5'>
              <div className='flex justify-center w-full items-center h-full lg:border-b py-0 lg:py-5 border lg:border-0'>
                <button className='text-[#5060FF] whitespace-nowrap uppercase font-normal flex items-center gap-3 px-10 py-1.5 lg:px-0 lg:py-0'>
                  View profile
                  <BiShowAlt />
                </button>
              </div>
              {/* ------------------- */}
              <div className='flex justify-center w-full items-center h-full border lg:border-0'>
                <button className='text-[#5060FF] uppercase flex font-normal items-center gap-3 px-10 py-1.5 lg:px-0 lg:py-0'>
                  Contact
                  <AiOutlineMail />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCard;
