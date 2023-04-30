import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import logo from '../public/logo.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useRouter } from "next/router"

const Navbar = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    {
      name: "Find Jobs",
      path: '/'
    },
    {
      name: "Find Talent",
      path: '/talent'
    },
    {
      name: "Upload Job",
      path: '/job'
    },
    {
      name: "About Us",
      path: '/about'
    },
  ]

  const handleNav = (e) => {
    if (e.target.id === 'mobile') {
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav className='bg-white shadow-sm h-16 sticky top-0'>
        <div className="max-w-7xl container mx-auto px-4 flex justify-between items-center h-full">
          <div className="w-1/2 flex justify-start">
            <Link href="/">
              <Image src={logo} alt="Listing" className="h-10 sm:h-12 w-full object-contain" />
            </Link>
          </div>
          <div className="w-1/2 flex justify-end h-full">
            <div className="hidden sm:flex sm:items-center sm:gap-5 font-normal h-full">
              {links.map((link, i) => {
                return <div key={i} className={router.asPath === link.path ? 'whitespace-nowrap flex items-center text-blue-500 border-b-4 border-blue-500 h-full' : 'whitespace-nowrap flex items-center h-full text-black'}>

                  <Link href={link.path} >{link.name}</Link>
                </div>
              })}
            </div>
          </div>
          <div className="block sm:hidden">
            {!isOpen ? <AiOutlineMenu
              size={25} onClick={() => setIsOpen(true)} /> : <AiOutlineClose
              size={25} onClick={() => setIsOpen(false)} />}
          </div>
        </div>
        <div className={`block sm:hidden fixed z-50 top-16 bottom-0 left-0 right-0 bg-[#083895] w-full min-h-screen ${isOpen ? 'transition-all duration-600 translate-x-0' : 'transition-all duration-600  translate-x-[100%]'}`} id="mobile"
          onClick={handleNav}>
          <div className="text-white h-full">
            <div className="p-4 flex flex-col gap-4">
              {links.map((link, i) => {
                return <Link key={i} href={link.path} className={router.asPath === link.path ? 'text-yellow-400' : 'text-white'}
                  onClick={() => setIsOpen(false)}
                ><div className='border-2 border-blue-400 p-5 bg-[#0181dd] uppercase rounded-md'>
                    {link.name}
                  </div></Link>
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar